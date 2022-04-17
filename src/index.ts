import { getDOMElement, generateCopyright } from "./assets/js/utilities";

document.addEventListener('DOMContentLoaded', () => {
  const copyrightElem = getDOMElement('copyright');
  
  generateCopyright(copyrightElem);
});
