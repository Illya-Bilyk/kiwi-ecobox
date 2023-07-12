import { content } from './reviewContent.js';
import quotes from '../../images/reviews/quotes.svg';
import curvedLine from '../../images/common/line.svg';

const refs = {
  reviews: document.querySelector('.reviews'),
};

const markup = content
  .map(({ photo, name, rateStars, rate, text }) => {
    return `
     <div class="revCard">
      <div class="revCard-wrap">
        <div class="revCard-images">
          <div>
            <img src="${quotes}" alt="Quotes" />
          </div>
          <div class="revCard-images--photo">
            <img
              src="${photo}"
              alt="Reviewer photo"
              class="photo"
            />
          </div>
        </div>
        <div class="revCard-info">
          <div>
            <h2 class="revCard-info--nameText">${name}</h2>
          </div>
          <div class="revCard-infoRate">
            <img
              src="${rateStars}"
              alt="Rate stars"
              width="92"
              height="16"
            />
            <p class="revCard-infoRate--text">${rate}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <img src="${curvedLine}" alt="curved line" />
    </div>
    <div class="rev-text">
      <p class="infoText rev-text--scroll">
        ${text}
      </p>
    </div>
    <div class="revCard-arrows">
      <button type="button" class="revCard-arrows--left">
        <img src="./images/reviews/arrowLeft.svg" alt="Arrrow Left" />
      </button>
      <button type="button" class="revCard-arrows--right">
        <img src="./images/reviews/arrowRight.svg" alt="Arrrow Right" />
      </button>
    </div>
   `;
  })
  .join('');

// refs.reviews.insertAdjacentHTML('beforeend', markup);
