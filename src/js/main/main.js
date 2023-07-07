import { images } from './imagesMain';
import ellipseTransparent from '../../images/common/ellipseTransparent.svg';

const refs = {
  firstImages: document.querySelector('.firstImages'),
};

const markup = images
  .map(({ src, alt }) => {
    return `
   <div class="imageItem">
          <img
            src=${ellipseTransparent}
            alt="ellipse Transparent"
            class="ellipseTr"
          />
          <img
            src=${src}
            alt=${alt}
            class="itemImage"
          />
        </div>`;
  })
  .join('');

refs.firstImages.insertAdjacentHTML('beforeend', markup);
