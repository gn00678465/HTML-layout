;(function() {
  const texts = {
    addCart: '已加入購物車',
    addFavorite: '已加入我的收藏'
  }
  $('[data-target="#showModal"]').on('click', function() {
    const { text } = this.dataset;
    const $modal = $('#showModal');
    const $dialog = $modal.find('.modal-dialog');
    const $modalText = $modal.find('.modal-body > p');
    const isBig = !!(window.innerWidth > 576);
    if (!isBig) {
      $dialog.addClass('modal-sm')
    }
    $modalText.text(texts[text])
  })
  $('#showModal').on('shown.bs.modal', function () {
    const $modal = $('#showModal');
    const $dialog = $modal.find('.modal-dialog');
    const $modalText = $modal.find('.modal-body > p');
    const isModalSm = $dialog.hasClass('modal-sm');
    window.setTimeout(() => {
      if(isModalSm) {
        $dialog.removeClass('modal-sm')
      }
      $modalText.text = null;
      $modal.modal('hide');
    }, 1000)
  })
})($)