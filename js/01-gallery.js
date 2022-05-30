import { galleryItems } from "./gallery-items.js";

const refs = {
  galleryEl: document.querySelector(".gallery"),
};

refs.galleryEl.addEventListener("click", onGalleryClick);

refs.galleryEl.insertAdjacentHTML(
  "beforeend",
  createGalleryItems(galleryItems)
);

function onGalleryClick(event) {
  event.preventDefault();
  const targetClassName = event.target.classList.value;

  if (targetClassName !== "gallery__image") {
    return;
  }

  const targetImageUrl = event.target.dataset.source;

  createImageModal(targetImageUrl);
}

function createImageModal(targetImageUrl) {
  const instance = basicLightbox.create(
    `<div class="modal">
      <img
                    src="${targetImageUrl}"
                    width="800" height="600"
            />
    </div>`
  );
  instance.show();
}

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
            />
        </a>
        </div>
        `;
    })
    .join(" ");
}
