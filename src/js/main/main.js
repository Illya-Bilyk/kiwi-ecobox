import { images } from './imagesMain';
import { desktopImages } from './imagesMain';

import ellipseTransparent from '../../images/common/ellipseTransparent.svg';

const refs = {
  firstImages: document.querySelector('.firstImages-list'),
};
const viewPortWidth = window.innerWidth;

if (viewPortWidth < 1024) {
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
}

if (viewPortWidth > 1023) {
  const markup = desktopImages
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
}
