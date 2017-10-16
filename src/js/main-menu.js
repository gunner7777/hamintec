desktopVersion();

function desktopVersion() {
  var mainMenuItems = document.querySelectorAll('.main-menu__link');

  mainMenuItems.forEach(function(item) {
    if(item.nextSibling !== null) {

      item.addEventListener('mouseleave', function(el) {
          setTimeout(function() {
            if(el.target.nextSibling.nextSibling.dataset.hover !== 'hover') {
              toggleMainMenu(el.target.nextSibling.nextSibling, 0);
            }
          }, 400);
      });

      item.addEventListener('mouseenter', function(el) {
        el.target.nextSibling.nextSibling.addEventListener('mouseenter', function(ii) {
          ii.target.setAttribute('data-hover', 'hover');
          toggleMainMenu(ii.target, 1);
        });

        el.target.nextSibling.nextSibling.addEventListener('mouseleave', function(ii) {
          ii.target.setAttribute('data-hover', '');
          setTimeout(function() {
            toggleMainMenu(ii.target, 0);
          }, 300);
        });

        setTimeout(function() {
          toggleMainMenu(el.target.nextSibling.nextSibling, 1);
        }, 200);   
      });
    }
  });
}

function toggleMainMenu(node, action) {
  if(document.body.clientWidth < 992) {
    node.style.display = 'block';
    node.style.opacity = 1;
    return false;
  } else {
    node.style.display = action === 0 ? 'none' : 'block';
    node.style.maxHeight = action === 0 ? '0' : '800px';
    node.style.opacity = action === 0 ? 0 : 1;
  }
}

var mtoggle = document.querySelectorAll('.main-menu__toggle');
for(var i = 0; i < mtoggle.length; i++) {
  mtoggle[i].addEventListener('click', function(item) {
    toggleMenuMobile(item);
  });
}

function toggleMenuMobile(e) {
  e.preventDefault();
  if(!e.target.classList.contains('select__arrow--opened')) {
    e.target.classList.add('select__arrow--opened');
    e.target.parentNode.nextSibling.nextSibling.style.maxHeight = "800px";
  } else {
    e.target.classList.remove('select__arrow--opened');
    e.target.parentNode.nextSibling.nextSibling.style.maxHeight = "0";
  }
}
