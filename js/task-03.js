const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');
console.log(galleryRef);

const makeGallery = image => {
  const { url, alt } = image;
  return `
	<li class = "gallery__item">
	<img src="${url}" alt="${alt}">
  </li>
  `;
};

const galleryItemRef = images.map(makeGallery).join('');

galleryRef.insertAdjacentHTML('afterbegin', galleryItemRef);

// const imgRef = document.createElement('img');
// imgRef.url = images[1].url;
// imgRef.alt = images[1].alt;
// galleryItemRef.append(imgRef);

// galleryRef.append(galleryItemRef);
