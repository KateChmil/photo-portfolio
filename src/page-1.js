import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";





const images = [
  { src: './selection1/DSC_6826.jpg', description: 'Image 1' },
  { src: './img/selection1/DSC_6828.jpg', description: 'Image 2' },
  { src: './img/selection1/DSC_6830.jpg', description: 'Image 3' },
  { src: './img/selection1/DSC_6831.jpg', description: 'Image 4' },
  { src: './img/selection1/DSC_6836.jpg', description: 'Image 5' },
  { src: './img/selection1/DSC_6837.jpg', description: 'Image 6' },
  { src: './img/selection1/DSC_6844.jpg', description: 'Image 7' },
  { src: './img/selection1/DSC_6847.jpg', description: 'Image 8' },
  { src: './img/selection1/DSC_6850.jpg', description: 'Image 9' },
  { src: './img/selection1/DSC_6856.jpg', description: 'Image 10' },
  { src: './img/selection1/DSC_6860.jpg', description: 'Image 11' },
  { src: './img/selection1/DSC_6872.jpg', description: 'Image 12' },
  { src: './img/selection1/DSC_6968.jpg', description: 'Image 13' },
  { src: './img/selection1/DSC_6999.jpg', description: 'Image 14' },
  { src: './img/selection1/DSC_7001.jpg', description: 'Image 15' },
  { src: './img/selection1/DSC_7006.jpg', description: 'Image 16' },
  { src: './img/selection1/DSC_7011.jpg', description: 'Image 17' },
  { src: './img/selection1/DSC_7024.jpg', description: 'Image 18' },
  { src: './img/selection1/DSC_7027.jpg', description: 'Image 19' },
  { src: './img/selection1/DSC_7038.jpg', description: 'Image 20' },
  { src: './img/selection1/DSC_7043.jpg', description: 'Image 21' },
  { src: './img/selection1/DSC_7047.jpg', description: 'Image 22' },
  { src: './img/selection1/DSC_7051.jpg', description: 'Image 23' },
  { src: './img/selection1/DSC_7052.jpg', description: 'Image 24' },
  { src: './img/selection1/DSC_7057.jpg', description: 'Image 25' },
  { src: './img/selection1/DSC_7062.jpg', description: 'Image 26' },
  { src: './img/selection1/DSC_7065.jpg', description: 'Image 27' },
  { src: './img/selection1/DSC_7075.jpg', description: 'Image 28' },
  { src: './img/selection1/DSC_7140.jpg', description: 'Image 29' },
  { src: './img/selection1/DSC_7162.jpg', description: 'Image 30' },
  { src: './img/selection1/DSC_7205.jpg', description: 'Image 31' },
  { src: './img/selection1/DSC_7235.jpg', description: 'Image 32' },
  { src: './img/selection1/DSC_7239.jpg', description: 'Image 33' },
  { src: './img/selection1/DSC_7246.jpg', description: 'Image 34' },
  { src: './img/selection1/DSC_7251.jpg', description: 'Image 35' },
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

// Initialize SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a')





