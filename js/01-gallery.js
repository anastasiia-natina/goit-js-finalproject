import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.tagName === 'IMG') {
    const imageUrl = event.target.dataset.source;

    const lightbox = basicLightbox.create(`
      <img src="${imageUrl}" width="800" height="600">
    `);

    lightbox.show();
  }
});

const galleryHTML = galleryItems
  .map((item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
      </a>
    </li>`
  )
  .join('');

gallery.innerHTML = galleryHTML;




