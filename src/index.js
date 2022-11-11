import 'normalize.css'
import './styles/styles.scss'

const navMenuBtn = document.getElementsByClassName('open-nav-btn')[0];
const navCloseBtn = document.getElementsByClassName('close-btn')[0];
const navWrapper = document.getElementsByClassName('nav-wrapper')[0];

navMenuBtn.addEventListener('click', () => {
  navWrapper.style.display = 'block';
})

navCloseBtn.addEventListener('click', () => {
  navWrapper.style.display = 'none';
})