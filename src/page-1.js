import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const images = [
  { src: 'https://katechmil.github.io/photo-portfolio/img/selection1/DSC_6826.jpg', description: 'Image 1' },
  { src: 'https://katechmil.github.io/photo-portfolio/img/selection1/DSC_6828.jpg', description: 'Image 2' },
  { src: 'https://katechmil.github.io/photo-portfolio/img/selection1/DSC_6830.jpg', description: 'Image 3' },
];




const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML("beforeend", galleryMarkup(images));

function galleryMarkup(images) {
  return images
    .map(
      (image) =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${image.src}">
            <img class="gallery-image" src="${image.src}" alt="${image.description}" width="344px" height="auto"/>
          </a>
        </li>`
    )
    .join("");
}
console.log(images.map(img => img.src)); 
// Initialize SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a')





