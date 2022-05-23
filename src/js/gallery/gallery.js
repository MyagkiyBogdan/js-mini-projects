import { galleryItems } from './gallery-items';
import '../../sass/gallery/_gallery.scss';
import '../../sass/_global.scss';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const galleryItemsEl = galleryItems
  .map(
    item =>
      `
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>`,
  )

  .join('');

galleryEl.innerHTML = galleryItemsEl;

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});
