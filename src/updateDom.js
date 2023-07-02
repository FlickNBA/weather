export const updateDom = (selector, html) => {
  document.querySelector(selector).innerHTML = html;
};
