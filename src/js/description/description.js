import { info } from './descInfo';
import line from '../../images/common/line.svg';

const refs = {
  description: document.querySelector('#desc'),
};

const markup = info
  .map(({ src, alt, title, text }) => {
    return `
    <div class="descImage">
      <img src=${src} alt=${alt}/>
    </div>
    <div><h2 class="descSecondTitle">${title}</h2></div>
    <div class="textWrapper">
      <p class="infoText">
        ${text}
      </p>
    </div>
    <div class="descLines">
      <div class="descLine"></div>
      <div class="curvedLine">
        <img src=${line} alt="line" />
      </div>
      <div class="descLine"></div>
  </div>`;
  })
  .join('');

refs.description.insertAdjacentHTML('afterbegin', markup);
