import { getDOMElement, generateCopyright } from './assets/js/utilities';
import { animateHero, renderLocation } from './assets/js/index';

document.addEventListener('DOMContentLoaded', () => {
  const copyrightElem = getDOMElement('copyright');
  
  generateCopyright(copyrightElem);

  animateHero();
  renderLocation('map', 41.4855535, -71.3082539, 16);
});
