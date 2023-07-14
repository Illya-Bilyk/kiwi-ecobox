import logo from '../images/header/logo.svg';

const mainRef = document.querySelector('#header');

const header = ` 
      <ul class="header-list">
        <li class="header-item">
           <button type="button" class="mob-menu--button">
              <a href="#main" class="mob-menu--link">HOME</a>
           </button>
        </li>
        <li class="header-item">
          <button type="button" class="mob-menu--button">
            <a href="#news" class="mob-menu--link">BOXES</a>
          </button>
        </li>
        <li class="header-item">
          <a href=''>
            <img
              src="${logo}"
              alt="logo"
              width="191px"
              height="100px"
          /></a>
        </li>
        <li class="header-item">
          <button type="button" class="mob-menu--button">
            <a  href="#description" class="mob-menu--link">ABOUT</a>
          </button>
        </li>
        <li class="header-item">
          <button type="button" class="mob-menu--button">
            <a  href="#subscribe" class="mob-menu--link">ACCOUNT</a>
          </button>
        </li>
      </ul>

`;

mainRef.insertAdjacentHTML('beforeend', header);
