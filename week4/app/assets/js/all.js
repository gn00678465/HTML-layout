// $(document).ready(() => {
//   const tabs = [...document.querySelectorAll('.tab')];
//   function tabHandler() {
//     const currentPath = window.location.pathname.split('.')[0].replace(/[^a-zA-Z]/g, '');
//     const currentTab = this.dataset.tab;
//     if (currentPath === currentTab) {
//       this.classList.add('active')
//     }
//   };
//   tabs.forEach((tab) => {
//     const link = tab.querySelector('a');
//     link.classList.remove('active');
//     link.addEventListener('click', tabHandler);
//   });
// });