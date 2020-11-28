$(document).ready(() => {
  function setRootStyle() {
    const clientWidth = window.innerWidth;
    document.documentElement.style.setProperty('--index-image-height', `${clientWidth / 2}px`)
  }
  window.addEventListener('resize', setRootStyle);
  setRootStyle();
});