import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

function cards (images) {
return images
.map((image)=> {
return `
<li class="gallery__item">
<a class="gallery__link" href="${image.original}">
<img
class="gallery__image"
src="${image.preview}"
data-source="${image.original}"
alt= "${image.description}"
/>
</a>
</li>`;
}).join('');
};

cards(galleryItems);
const elementUl = document.querySelector("ul");
elementUl.insertAdjacentHTML('beforeend', cards(galleryItems));

elementUl.addEventListener ('click', onGallery);

function onGallery (evt) {
evt.preventDefault ();
if (evt.target.nodeName !== "IMG") {
return
}
const instance = basicLightbox.create (
`<img src = "${evt.target.dataset.source}">`
)
instance.show()
}





