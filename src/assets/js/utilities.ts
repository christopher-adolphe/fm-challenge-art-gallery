export const getDOMElement = (id: string): HTMLElement | null => {
  return document.getElementById(id);
};

export const generateCopyright = (elem: HTMLElement | null) => {
  const year = new Date().getFullYear();
  const copyrightText = `© ${year}. Created by Christopher Adolphe`;

  if (!elem) {
    return;
  }

  elem.textContent = copyrightText;
};

const Utilities = {
  getDOMElement,
  generateCopyright
};

export default Utilities;
