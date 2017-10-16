document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.select__arrow').addEventListener('click', function(item) {
    if(item.target.classList.contains('select__arrow--opened')) {
      hideSelectMenu(item.target);
    } else {
      document.querySelector('.popup-currency').style.display = "block";
      item.target.classList.add('select__arrow--opened');
    }
  });
  
  document.querySelectorAll('.popup-currency__item').forEach(function(node) {
    node.addEventListener('click', function(item) {
      document.querySelector('.select__text').innerHTML = item.target.innerHTML;

      if(!item.target.classList.contains('popup-currency__item--selected')) {
        document.querySelector('.popup-currency__item--selected').classList.remove('popup-currency__item--selected');
        item.target.classList.add('popup-currency__item--selected');
      }
      hideSelectMenu(document.querySelector('.select__arrow'));
    });
  });

  function hideSelectMenu(elem) {
    document.querySelector('.popup-currency').style.display = "none";
    elem.classList.remove('select__arrow--opened');
  }

});