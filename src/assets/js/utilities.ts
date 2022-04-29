export const getDOMElement = (id: string): HTMLElement | null => {
  return document.getElementById(id);
};

export const generateCopyright = (elem: HTMLElement | null) => {
  const year = new Date().getFullYear();
  const copyrightContent = `<p class="footer__copyright-text">© ${year}</p>`;

  if (!elem) {
    return;
  }

  const copyrightElem: HTMLElement | null = elem.querySelector('.footer__copyright-text');

  if (copyrightElem) {
    copyrightElem.innerHTML = copyrightContent;
  }

};

const Utilities = {
  getDOMElement,
  generateCopyright
};

export default Utilities;
