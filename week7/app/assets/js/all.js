$(document).ready(() => {
  function setRootStyle() {
    const clientWidth = window.innerWidth;
    document.documentElement.style.setProperty('--index-image-height', `${clientWidth / 2}px`)
  }

  // 設定 AOS 參數
  function setAosAttr(action = "fade-up",offect = 120, durationTime = 300, delay = "0") {
    return {
      "data-aos": action,
      "data-aos-offset": offect,
      "data-aos-duration": durationTime,
      "data-aos-delay": delay
    }
  }

  // 計算比例
  function calcRato(scrollTop, height ,rate = 10) {
    return Math.ceil((scrollTop) / (height / rate))
  }

  // 判斷方向
  function calcDirection(index, reverse = false) {
    if (!reverse) {
      return (index % 2 === 0) ? 1 : -1;
    } return (index % 2 === 0) ? -1 : 1;
  }

  // 將每個卡片設定 AOS 參數
  function showCards() {
    const $cardContainer = $('[data-select="cards"]');
    const $cards = $cardContainer.find('.card');
    $cards.each(function(index) {
      const $this = $(this)
      const offsetHeight = $this.height() / 2;
      $this.attr(setAosAttr("fade-up", offsetHeight, 800, index * 100))
    })
  }

  // 文字視差滾動
function parallelText() {
  const $noGutters = $('[data-parallel="no-gutters"]');
  const scrollTop = window.scrollY;
  $noGutters.each(function(index) {
    const $this = $(this);
    const height = $this.height();
    const offsetTop = $this.offset().top;
    const offsetBottom = $this.offset().top + height;
    if(scrollTop > offsetTop && scrollTop <  offsetBottom) {
      const $img = $this.find('[data-parallel="img"] img');
      const $texts = $this.find('[data-parallel="text"] h2 p');
      const imgRate = calcRato(scrollTop - offsetTop, $this.height(), 50);
      const textRate = calcRato(scrollTop - offsetTop, $this.height(), 20);
      $img.css('transform', `translateX(${calcDirection(index) * imgRate}px)`);
      // $text['0'].css('transform', `translateX(${calcDirection(index) * textRate}px)`);
      $texts.each(function(pIndex) {
        $(this).css('transform', `translateX(${calcDirection(pIndex) * textRate}px)`)
      })
    }
  })
}

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    if (timeout) return
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (immediate) func.apply(context, args);
  };
}



  window.addEventListener('resize', debounce(setRootStyle));
  setRootStyle();
  showCards();
  window.addEventListener('scroll', parallelText);

  AOS.init({
    once: true,
  });
});
