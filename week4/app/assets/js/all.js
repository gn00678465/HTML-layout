$(document).ready(() => {
  window.addEventListener('load', loadHandler);
  window.addEventListener('scroll', scrollHandler);
  // variables
  const navbar = document.querySelector('.navbar');
  const tabs = [...document.querySelectorAll('.tab')];
  const content = document.querySelector('.content');
  function loadHandler() {
    function tabHandler() {
      const currentPath = window.location.pathname.split('.')[0].replace(/[^a-zA-Z]/g, '');
      const currentTab = this.dataset.tab;
      if (currentPath === currentTab) {
        this.classList.add('active')
      }
    };
    tabs.forEach((tab) => {
      const link = tab.querySelector('a');
      // link.classList.remove('active');
      link.addEventListener('click', tabHandler);
    });
  }
  function scrollHandler(e) {
    const { height } = navbar.getBoundingClientRect();
    if (window.scrollY > 0) {
      navbar.classList.add('fixed')
      content.style.paddingTop = `${height}px`;
    } else {
      navbar.classList.remove('fixed');
      content.style.paddingTop = `0`;
    }
    
  };
});