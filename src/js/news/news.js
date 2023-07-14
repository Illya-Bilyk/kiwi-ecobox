import { newsCards } from './infoNews.js';
import curvedLine from '../../images/common/line.svg';
import btn from '../../images/news/newsButton.svg';

const refs = {
  newsList: document.querySelector('.desktopNews-list'),
};

const markup = newsCards
  .map(({ img, title, text }) => {
    return `
  <li class="newsCard">
          <div class="newsCardImage">
            <img src="${img}" alt="box" class="newsCard--image" />
          </div>
          <div class="newsCard-info">
            <div class="newsCard-info--title">
              <h2 class="textMain">${title}</h2>
            </div>
            <div class="newsLine">
              <img src="${curvedLine}" alt="curved line" />
            </div>
            <div>
              <p class="infoText newsCard-info--text">
                ${text}
              </p>
            </div>
            <div class="newsCard-btn">
              <button
                type="button"
                class="newsCard-btn--style"
              >
                <img src="${btn}" alt="READ MORE" />
              </button>
            </div>
          </div>
        </li>`;
  })
  .join('');

refs.newsList.insertAdjacentHTML('beforeend', markup);
