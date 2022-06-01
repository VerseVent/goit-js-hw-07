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
  const targetClassName = event.target.classList.value;

  if (targetClassName !== "gallery__image") {
    return;
  }
  event.preventDefault();
  const targetImageUrl = event.target.dataset.source;

  createImageModal(targetImageUrl);
}

function createImageModal(targetImageUrl) {
  const instance = basicLightbox.create(
    `
      <img
                    src="${targetImageUrl}"
            />
              `
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
