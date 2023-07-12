import logo from '../images/header/logo.svg';

const mainRef = document.querySelector('#header');

const header = ` 
      <ul class="header-list">
        <li class="header-item"><a href="#main" class="mob-menu--link">HOME</a></li>
        <li class="header-item"><a href="#news" class="mob-menu--link">BOXES</a></li>
        <li class="header-item">
        <a href=''>
            <img
              src="${logo}"
              alt="logo"
              width="191px"
              height="100px"
          /></a>
        </li>
        <li class="header-item"><a  href="#description" class="mob-menu--link">ABOUT</a></li>
        <li class="header-item"><a  href="#subscribe" class="mob-menu--link">ACCOUNT</a></li>
      </ul>

`;

mainRef.insertAdjacentHTML('beforeend', header);
