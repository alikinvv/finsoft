"use strict";

// header .bar animation
if ($('.header__menu .active').length > 0) {
  $('.header .bar').animate({
    left: $('.header__menu .active').offset().left,
    width: $('.header__menu .active').outerWidth()
  });
}

$('body').on('mouseenter', '.header__menu a', function (e) {
  $('.header .bar').animate({
    left: $(e.currentTarget).offset().left,
    width: $(e.currentTarget).outerWidth()
  });
});
$('body').on('mouseleave', '.header', function (e) {
  if ($('.header__menu .active').length > 0) {
    $('.header .bar').animate({
      left: $('.header__menu .active').offset().left,
      width: $('.header__menu .active').outerWidth()
    });
  } else {
    $('.header .bar').animate({
      left: 0,
      width: 0
    });
  }
}); // submenu .bar animation

if ($('.submenu .active').length > 0) {
  $('.submenu .bar').animate({
    left: $('.submenu .active').offset().left - $('.container').offset().left,
    width: $('.submenu .active').outerWidth()
  });
}

$('body').on('mouseenter', '.submenu a', function (e) {
  $('.submenu .bar').animate({
    left: $(e.currentTarget).offset().left - $('.container').offset().left,
    width: $(e.currentTarget).outerWidth()
  });
});
$('body').on('mouseleave', '.submenu', function (e) {
  if ($('.submenu .active').length > 0) {
    $('.submenu .bar').animate({
      left: $('.submenu .active').offset().left - $('.container').offset().left,
      width: $('.submenu .active').outerWidth()
    });
  } else {
    $('.submenu .bar').animate({
      left: 0,
      width: 0
    });
  }
});
$('body').on('click', '.bookmark', function (e) {
  $(e.currentTarget).toggleClass('active');
});
$('body').on('click', '.heart', function (e) {
  $(e.currentTarget).toggleClass('active');
});

var someHeight = function someHeight(item, element, count) {
  var titleHeight = 0;
  var items = [];

  for (var i = 1; i < $(item).length + 1; i++) {
    var $step = $(item).eq(i - 1);

    if (i !== 0 && i % count === 0) {
      if ($step.find(element).height() > titleHeight) {
        titleHeight = $step.find(element).height();
      }

      items.push(i - 1);

      for (var j = 0; j < items.length; j++) {
        $(item).eq(items[j]).find(element).height(titleHeight);
      }

      items = [];
      titleHeight = 0;
    } else {
      items.push(i - 1);

      if ($step.find(element).height() > titleHeight) {
        titleHeight = $step.find(element).height();
      }
    }
  }
};

var resize = function resize() {
  someHeight('.news__item', '.news__title', 4);
  someHeight('.users__item', '.users__text', 4);
  someHeight('.reviews__item', '.reviews__body', 2);
  someHeight('.service', '.service__text', 3);
};

resize();
$(window).on('resize', resize);