import { info } from './descInfo';
import line from '../../images/common/line.svg';

const refs = {
  description: document.querySelector('#desc'),
};

const markup = info
  .map(({ src, alt, title, text }) => {
    return `
    <div class="desc-image">
      <img src=${src} alt=${alt}/>
    </div>
    <div><h2 class="desc-secondTitle">${title}</h2></div>
    <div class="desc-textWrapper">
      <p class="infoText">
        ${text}
      </p>
    </div>
    <div class="desc-linesList">
      <div class="desc-line"></div>
      <div class="desc-curvedLine">
        <img src=${line} alt="line" />
      </div>
      <div class="desc-line"></div>
  </div>`;
  })
  .join('');

refs.description.insertAdjacentHTML('afterbegin', markup);
