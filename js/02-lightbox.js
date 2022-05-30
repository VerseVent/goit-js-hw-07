import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryEl: document.querySelector(".gallery"),
};

refs.galleryEl.addEventListener("click", onGalleryClick);

refs.galleryEl.insertAdjacentHTML(
  "beforeend",
  createGalleryItems(galleryItems)
);

const lightbox = new SimpleLightbox(".gallery a", {
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});

function onGalleryClick(event) {
  event.preventDefault();
  const targetClassName = event.target.classList.value;

  if (targetClassName !== "gallery__image") {
    console.log("???");
    return;
  }
}

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    })
    .join(" ");
}
