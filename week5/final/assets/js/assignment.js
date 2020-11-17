;(function() {
  const textEditBtn = document.querySelector('[data-toggle="text-edit"]');
  const textEdit = document.querySelector('.text-edit');
  // text-edit
  textEditBtn.addEventListener('click',function(){
    if (!textEdit.classList.contains('show')) {
      textEdit.classList.add('show');
    }
    textEdit.querySelector('[data-dismiss="modal"').addEventListener('click', function() {
      textEdit.classList.remove('show');
    })
  })
})();