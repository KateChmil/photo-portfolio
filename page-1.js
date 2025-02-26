import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                                */import{S as e}from"./assets/vendor-CgTBfC_f.js";const o=[{src:"https://katechmil.github.io/photo-portfolio/img/selection1/DSC_6826.jpg",description:"Image 1"},{src:"https://katechmil.github.io/photo-portfolio/img/selection1/DSC_6828.jpg",description:"Image 2"},{src:"https://katechmil.github.io/photo-portfolio/img/selection1/DSC_6830.jpg",description:"Image 3"}],l=document.querySelector(".gallery");l.insertAdjacentHTML("beforeend",r(o));function r(t){return t.map(i=>`<li class="gallery-item">
          <a class="gallery-link" href="${i.src}">
            <img class="gallery-image" src="${i.src}" alt="${i.description}" width="344px" height="auto"/>
          </a>
        </li>`).join("")}console.log(o.map(t=>t.src));new e(".gallery a");
//# sourceMappingURL=page-1.js.map
