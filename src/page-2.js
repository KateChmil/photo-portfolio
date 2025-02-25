import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  { src: "./img/selection2/DSC_4520.jpg", description: "Image 1" },
  { src: "./img/selection2/DSC_4522.jpg", description: "Image 2" },
  { src: "./img/selection2/DSC_4525.jpg", description: "Image 3" },
  { src: "./img/selection2/DSC_4526.jpg", description: "Image 4" },
  { src: "./img/selection2/DSC_4529.jpg", description: "Image 5" },
  { src: "./img/selection2/DSC_4531.jpg", description: "Image 6" },
  { src: "./img/selection2/DSC_4536.jpg", description: "Image 7" },
  { src: "./img/selection2/DSC_4537.jpg", description: "Image 8" },
  { src: "./img/selection2/DSC_4547.jpg", description: "Image 10" },
  { src: "./img/selection2/DSC_4554.jpg", description: "Image 11" },
  { src: "./img/selection2/DSC_4569.jpg", description: "Image 12" },
  { src: "./img/selection2/DSC_4571.jpg", description: "Image 13" },
  { src: "./img/selection2/DSC_4575.jpg", description: "Image 14" },
  { src: "./img/selection2/DSC_4581.jpg", description: "Image 15" },
  { src: "./img/selection2/DSC_4589.jpg", description: "Image 16" },
  { src: "./img/selection2/DSC_4591.jpg", description: "Image 17" },
  { src: "./img/selection2/DSC_4596.jpg", description: "Image 18" },
  { src: "./img/selection2/DSC_4603.jpg", description: "Image 19" },
  { src: "./img/selection2/DSC_4609.jpg", description: "Image 20" },
  { src: "./img/selection2/DSC_4628.jpg", description: "Image 21" },
  { src: "./img/selection2/DSC_4645.jpg", description: "Image 22" },
  { src: "./img/selection2/DSC_4655.jpg", description: "Image 23" },
  { src: "./img/selection2/DSC_4660.jpg", description: "Image 24" },
  { src: "./img/selection2/DSC_4661.jpg", description: "Image 25" },
  { src: "./img/selection2/DSC_4665.jpg", description: "Image 26" },
  { src: "./img/selection2/DSC_4666.jpg", description: "Image 27" },
  { src: "./img/selection2/DSC_4671.jpg", description: "Image 28" },
  { src: "./img/selection2/DSC_4679.jpg", description: "Image 29" },
  { src: "./img/selection2/DSC_4681.jpg", description: "Image 30" },
  { src: "./img/selection2/DSC_4692.jpg", description: "Image 31" },
  { src: "./img/selection2/DSC_4694.jpg", description: "Image 32" },
  { src: "./img/selection2/DSC_4712.jpg", description: "Image 33" },
  { src: "./img/selection2/DSC_4713.jpg", description: "Image 34" },
  { src: "./img/selection2/DSC_4714-2.jpg", description: "Image 35" },
  { src: "./img/selection2/DSC_4714.jpg", description: "Image 36" },
];

const gallery = document.querySelector(".gallery");

gallery.innerHTML = images
  .map(
    (image) =>
      `<li class="gallery-item">
        <a class="gallery-link" href="${image.src}">
          <img class="gallery-image" src="${image.src}" alt="${image.description}" width="344px" height="auto"/>
        </a>
      </li>`
  )
  .join("");

// Initialize SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a");
