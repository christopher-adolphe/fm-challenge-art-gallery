import { getDOMElement, generateCopyright } from './assets/js/utilities';
import { animateHero, animateContent, renderLocation } from './assets/js/index';

document.addEventListener('DOMContentLoaded', () => {
  const copyrightElem = getDOMElement('copyright');
  
  generateCopyright(copyrightElem);

  animateHero();
  animateContent();
  renderLocation('map', 'map-fallback', 41.4797241, -71.3115167, 16);
});
