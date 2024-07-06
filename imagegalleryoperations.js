
function showImages(tag) {
  const imageGallery = document.querySelector('.image-gallery');
  const images = imageGallery.children;

  Array.prototype.forEach.call(images, (image) => {
    image.style.display = 'none';
  });

  if (tag === 'all') {
    Array.prototype.forEach.call(images, (image) => {
      image.style.display = 'block';
    });
  } else {
    Array.prototype.forEach.call(images, (image) => {
      if (image.dataset.tag === tag) {
        image.style.display = 'block';
      }
    });
  }
}

const tags = document.querySelectorAll('.tag');
Array.prototype.forEach.call(tags, (tag) => {
  tag.addEventListener('click', () => {
    showImages(tag.textContent.toLowerCase());
  });
});

const images = [
  { src: 'image1.jpg', tag: 'cool' },
  { src: 'image2.jpg', tag: 'creative' },
  { src: 'image3.jpg', tag: 'beautiful' },
  { src: 'image4.jpg', tag: 'all' },
  { src: 'image5.jpg', tag: 'cool' },
  { src: 'image6.jpg', tag: 'creative' },
  { src: 'image7.jpg', tag: 'beautiful' },
  { src: 'image8.jpg', tag: 'all' },
];

images.forEach((image) => {
  const img = document.createElement('img');
  img.src = image.src;
  img.dataset.tag = image.tag;
  document.querySelector('.image-gallery').appendChild(img);
});