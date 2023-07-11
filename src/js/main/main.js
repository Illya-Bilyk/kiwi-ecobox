import { images } from './imagesMain';
import ellipseTransparent from '../../images/common/ellipseTransparent.svg';

const refs = {
  firstImages: document.querySelector('.firstImages-list'),
};

const markup = images
  .map(({ src, alt }) => {
    return `
   <li class="firstImages-item">
      <div class="firstImages-item--ellipseTr">
             <img
            src=${ellipseTransparent}
            alt="ellipse Transparent"
          />
      </div>
      <div class="firstImages-item--image">
          <img
            src=${src}
            alt=${alt}            
          />
      </div>
  </li>`;
  })
  .join('');

refs.firstImages.insertAdjacentHTML('beforeend', markup);
