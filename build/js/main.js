"use strict";

var ww = $(window).width(); // header .bar animation

if ($('.header__menu .active').length > 0 && ww > 768) {
  if (ww > 768) {
    $('.header .bar').stop().animate({
      left: $('.header__menu .active').offset().left,
      width: $('.header__menu .active').outerWidth()
    });
  }
}

$('body').on('mouseenter', '.header__menu a', function (e) {
  if (ww > 768) {
    $('.header .bar').stop().animate({
      left: $(e.currentTarget).offset().left,
      width: $(e.currentTarget).outerWidth()
    });
  }
});
$('body').on('mouseleave', '.header', function (e) {
  if (ww > 768) {
    if ($('.header__menu .active').length > 0) {
      $('.header .bar').stop().animate({
        left: $('.header__menu .active').offset().left,
        width: $('.header__menu .active').outerWidth()
      });
    } else {
      $('.header .bar').stop().animate({
        left: 0,
        width: 0
      });
    }
  }
}); // submenu .bar animation

if ($('.submenu .active').length > 0) {
  $('.submenu .bar').stop().animate({
    left: $('.submenu .active').offset().left - $('.container').offset().left,
    width: $('.submenu .active').outerWidth()
  });
}

$('body').on('mouseenter', '.submenu a', function (e) {
  $('.submenu .bar').stop().animate({
    left: $(e.currentTarget).offset().left - $('.container').offset().left,
    width: $(e.currentTarget).outerWidth()
  });
});
$('body').on('mouseleave', '.submenu', function (e) {
  if ($('.submenu .active').length > 0) {
    $('.submenu .bar').stop().animate({
      left: $('.submenu .active').offset().left - $('.container').offset().left,
      width: $('.submenu .active').outerWidth()
    });
  } else {
    $('.submenu .bar').stop().animate({
      left: 0,
      width: 0
    });
  }
}); // tabs .bar animation

if ($('.tabs .active').length > 0) {
  $('.tabs .bar').stop().animate({
    left: $('.tabs .active').offset().left - $('.tabs').offset().left,
    width: $('.tabs .active').outerWidth()
  });
}

$('body').on('mouseenter', '.tabs a', function (e) {
  $('.tabs .bar').stop().animate({
    left: $(e.currentTarget).offset().left - $('.tabs').offset().left,
    width: $(e.currentTarget).outerWidth()
  });
});
$('body').on('mouseleave', '.tabs', function (e) {
  if ($('.tabs .active').length > 0) {
    $('.tabs .bar').stop().animate({
      left: $('.tabs .active').offset().left - $('.tabs').offset().left,
      width: $('.tabs .active').outerWidth()
    });
  } else {
    $('.tabs .bar').stop().animate({
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
$('body').on('click', '.sidebar .scrollto', function (e) {
  $(e.currentTarget).next().slideDown(300);
  $(e.currentTarget).remove();
});
$('body').on('click', '.overview__text a', function (e) {
  $(e.currentTarget).parent().find('.hide').show();
  $(e.currentTarget).remove();
});
$('body').on('click', '.sort__filter, .filter__close', function (e) {
  $('.content.with-filter').toggleClass('show-filter');
  $('.filter').toggleClass('active');

  if (ww < 768) {
    $('html, body').toggleClass('overflow');
  }
});
$('body').on('click', 'a[data-scroll]', function (e) {
  $('html, body').animate({
    scrollTop: $("*:not(a)[data-scroll=\"".concat($(e.currentTarget).attr('data-scroll'), "\"]")).offset().top
  }, 1000);
});
$('body').on('click', '.tabs a', function (e) {
  $('.tabs a').removeClass('active');
  $('.tab').removeClass('active');
  $(e.currentTarget).addClass('active');
  $(".tab[data-tab=\"".concat($(e.currentTarget).attr('data-tab'), "\"]")).addClass('active');
  $('.news__list.three  .news__title').css('height', 'auto');

  if (ww > 767) {
    sameHeight('.news__list.three .news__item', '.news__title', 3);
  }
});
$('body').on('click', '.theme__nav-item', function (e) {
  $('.theme__nav-item').removeClass('active');
  $(e.currentTarget).addClass('active');
  $('.tab').removeClass('active');
  $(".tab[data-tab=\"".concat($(e.currentTarget).attr('data-tab'), "\"]")).addClass('active');
}); // show modal

$('body').on('click', '[data-modal]:not(.modal)', function (e) {
  if (!$('.backdrop').hasClass('active')) $('.backdrop').addClass('active');
  $('.modal.active').removeClass('active');
  $(".modal[data-modal=\"".concat($(e.currentTarget).attr('data-modal'), "\"]")).addClass('active');

  if ($(e.currentTarget).attr('data-modal') === 'thanks') {
    setTimeout(function () {
      $('.modal.active').find('svg').addClass('animate');
    }, 100);
  }
}); // close modal events

var closeModal = function closeModal() {
  $('.backdrop').removeClass('active');
  $('.modal').removeClass('active');
  $('.modal').find('svg').removeClass('animate');
};

$('body').on('click', '.modal__close, .modal .close', closeModal);
$('body').on('click', '.backdrop', function (e) {
  if ($(e.target)[0].className === 'backdrop active') closeModal();
}); // close modal on press ESC

$(document).keyup(function (e) {
  if (e.keyCode === 27 && $('.backdrop').hasClass('active')) closeModal();
});
$('body').on('submit', 'form', function (e) {
  e.preventDefault();
});
$('body').on('click', '.phone__toggle', function (e) {
  $(e.currentTarget).toggleClass('active');
  $(e.currentTarget).parent().find('.phone__dropdown').toggleClass('active');
});
$(document).click(function (event) {
  if (!$(event.target).closest('.phone__toggle').length && !$(event.target).closest('.header__user > img').length && !$(event.target).closest('.select__current').length && !$(event.target).closest('.select__dropdown').length && !$(event.target).closest('.header__dropdown').length) {
    $('.phone__dropdown').removeClass('active');
    $('.phone__toggle').removeClass('active');
    $('.header__dropdown').removeClass('active');
    $('.select').removeClass('active');
  }
});
$('body').on('click', '.show-popup', function (e) {
  $('.popup').toggleClass('active');
});
$('body').on('click', '.popup .btn:not(.btn-outline)', function (e) {
  $('.popup').toggleClass('active');
});
$('body').on('click', '.header__controls .btn-outline', function (e) {
  $('.header__controls .btn:not(.btn-outline)').addClass('btn-outline');
  $(e.currentTarget).removeClass('btn-outline');
});
$('body').on('click', '.header__user > img', function (e) {
  $('.header__dropdown').toggleClass('active');
});
$('body').on('click', '.password .icon.show:not(.active)', function (e) {
  $(e.currentTarget).toggleClass('active');
  $(e.currentTarget).parent().find('input').attr('type', 'text');
});
$('body').on('click', '.password .icon.show.active', function (e) {
  $(e.currentTarget).toggleClass('active');
  $(e.currentTarget).parent().find('input').attr('type', 'password');
}); // Custom scroll

document.querySelectorAll('.custom-scroll').forEach(function (el) {
  new SimpleBar(el);
});
$('body').on('click', '.select.active .select__current', function (e) {
  $('.select').removeClass('active');
  $(e.currentTarget).parent().removeClass('active');
});
$('body').on('click', '.select__dropdown .select__item', function (e) {
  $(e.currentTarget).parent().removeClass('active');
  $(e.currentTarget).closest('.select').find('.select__current span').text($(e.currentTarget).text());
  $(e.currentTarget).closest('.select').removeClass('active');
});
$('body').on('click', '.select:not(.active) .select__current', function (e) {
  $('.select').removeClass('active');
  $(e.currentTarget).parent().addClass('active');
});
var masks = document.querySelectorAll('.phone-mask');
masks.forEach(function (el) {
  IMask(el, {
    mask: '(000) 000 00 00'
  });
});
var phones = document.querySelectorAll('.phone-input');
phones.forEach(function (el) {
  IMask(el, {
    mask: '+{7} (000) 000 00 00'
  });
});
var code = document.querySelectorAll('.code');
code.forEach(function (el) {
  IMask(el, {
    mask: '0000'
  });
});

if (ww > 768) {
  var theme = new Sticky('.theme__nav', {
    marginTop: 0,
    stickyClass: 'fixed'
  });
}

$('body').on('click', '.video + .content__more', function (e) {
  $(e.currentTarget).prev().addClass('active');
  $(e.currentTarget).remove();
});
$('body').on('click', '.logos + .content__more', function (e) {
  $(e.currentTarget).prev().addClass('active');
  $(e.currentTarget).remove();
});
$('body').on('click', '.company__text a', function (e) {
  $(e.currentTarget).parent().next().slideDown(300);
  $(e.currentTarget).remove();
});
$('body').on('click', '.points__range div', function (e) {
  $('.points__range div').removeClass('active');
  $(e.currentTarget).addClass('active');
});
$('body').on('click', '.hamburger', function (e) {
  $(e.currentTarget).toggleClass('active');
  $('.header__menu').toggleClass('active');
});
var service = document.querySelectorAll('.service__list');
service.forEach(function (slide) {
  new Swiper(slide, {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination'
    },
    breakpoints: {
      768: {
        slidesPerView: 2.1,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
});
var video = document.querySelectorAll('.video');
video.forEach(function (slide) {
  new Swiper(slide, {
    slidesPerView: 1.1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
});
var reviews = new Swiper('.reviews__list', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 1.2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});
var docs = new Swiper('.docs', {
  slidesPerView: 1.1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
var materials = new Swiper('.materials__list:not(.three)', {
  slidesPerView: 1.3,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});
var materialsThree = new Swiper('.materials__list.three', {
  slidesPerView: 1.3,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
var similar = new Swiper('.similar__list', {
  slidesPerView: 1.3,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});
var freelancers = new Swiper('.freelancers__list', {
  slidesPerView: 1.1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});
var agency = new Swiper('.agency__list', {
  slidesPerView: 1.1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});
var users = new Swiper('.users__list', {
  slidesPerView: 1.1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

if (ww <= 1023) {
  var sale = new Swiper('.sale__list:not(.four)', {
    slidesPerView: 1.3,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 3.1,
        spaceBetween: 20
      }
    }
  });
}

var news = new Swiper('.news__list', {
  slidesPerView: 1.1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});
$('body').on('click', 'h2 .tip-parent, .question .tip-parent', function (e) {
  if (ww < 1024) {
    if (!$('.backdrop').hasClass('active')) $('.backdrop').addClass('active');
    $('.modal.active').removeClass('active');
    $(".modal[data-modal=\"tips\"] .modal__body").html($(e.currentTarget).find('.tip').html());
    $(".modal[data-modal=\"tips\"]").addClass('active');
  }
});
$('body').on('click', '.footer__title', function (e) {
  if (ww < 768) {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).next().slideToggle(300).css('display', 'flex');
  }
});

var sameHeight = function sameHeight(item, element, count) {
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

var sameHeightFeatures = function sameHeightFeatures(item, element, count) {
  var titleHeight = 0;
  var items = [];

  for (var i = 0; i < $(item).length + 1; i++) {
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
  ww = $(window).width();
  sameHeight('.news__list:not(.three) .news__item', '.news__title', 4);
  sameHeight('.users__item', '.users__text', 4);
  sameHeight('.reviews__item', '.reviews__body', 2);
  sameHeight('.service', '.service__text', 3);
  sameHeight('.sale__list:not(.four) .swiper-slide .sale__item', '.sale__text', 5);

  if (ww > 1279) {
    sameHeight('.sale__list.four .sale__item', '.sale__text', 4);
  }

  if (ww > 1023 && ww < 1280) {
    sameHeight('.sale__list.four .sale__item', '.sale__text', 3);
  }

  if (ww > 767 && ww < 1024) {
    sameHeight('.sale__list.four .sale__item', '.sale__text', 2);
  }

  if (ww > 767) {
    sameHeight('.news__list.three .news__item', '.news__title', 3);
  }
};

resize();
$(window).on('resize', resize); // if (ww > 767) {
//     $('.product__header').append($('.plan__buttons'));
//     $('.product__header').append($('.submenu'));
//     $('body').addClass('tablet');
//     $('.plan__top').append($('.plan__buttons'));
//     $('.plan__top').after($('.submenu'));
//     $('.main .container').append($('.main__search-wrap'));
//     $('.head .breadcrumbs').after($('.main__search'));
//     $('.main__search input').attr('placeholder', 'Найдите сервис за 2 минуты, сэкономьте до 80% времени и денег!');
//     $('.product .item__controls').after($('.product').find('.item__info'));
//     $('.features__item').css('height', 'auto');
//     for (let i = 0; i < $('.company').length; i++) {
//         $('.company').eq(i).find('.reviews__check').before($('.company').eq(i).find('.company__user-features'));
//     }
//     for (let i = 0; i < $('.company__comment-top').length; i++) {
//         $('.company__comment-top').eq(i).after($('.company__comment-top').eq(i).find('.company__comment-text'));
//     }
//     for (let i = 0; i < $('.agency__info').length; i++) {
//         $('.agency__info').eq(i).append($('.agency__info').eq(i).closest('.agency__item').find('.agency__text'));
//     }
//     for (let i = 0; i < $('.task__top').length; i++) {
//         $('.task__top').eq(i).append($('.task__top').eq(i).closest('.task__item').find('.task__price'));
//     }
//     for (let i = 0; i < $('.item__top').length; i++) {
//         $('.item__top').eq(i).append($('.item__top').eq(i).closest('.item').find('.item__buttons'));
//         $('.item__controls').eq(i).append($('.item').eq(i).find('.item__reviews'));
//         $('.item__bottom').eq(i).append($('.item').eq(i).find('.service__progress'));
//         $('.item__controls a:first-child').eq(i).append($('.item').eq(i).find('.item__title'));
//     }
//     for (let i = 0; i < $('.settings__list div').length; i++) {
//         $('.settings__list div').eq(i).find('span').append($('.settings__list div').eq(i).find('.settings__edit'));
//     }
// }

if (ww < 1023) {
  $('.product__header').append($('.plan__buttons'));
  $('.product__header').append($('.submenu'));
}

if (ww < 768) {
  $('.header .container').append($('.main__search-wrap'));
  $('.header .container').append($('.head .main__search'));
  $('.main__search input').attr('placeholder', 'Найдите сервис за 2 минуты');
  $('.product__info').after($('.product').find('.item__info'));
  $('.profile__left').append($('.profile__name'));
  $('.profile__name').append($('.profile__stars'));
  $('.profile__name').append($('.profile__time'));
  sameHeightFeatures('.features__row', '.features__item', 3);
  $('.news__list.three  .news__title').css('height', 'auto');
  $('.sale__list:not(.four) .sale__text').css('height', 'auto');

  if (!$('.main__search').length) {
    $('.header').addClass('center');
  }

  for (var i = 0; i < $('.company__user').length; i++) {
    $('.company__user').eq(i).find('.company__user-name').append($('.company__user').eq(i).find('.company__user-features'));
  }

  for (var _i = 0; _i < $('.company__user').length; _i++) {
    $('.company__user').eq(_i).find('.company__user-name').append($('.company__user').eq(_i).find('.reviews__check'));
  }

  for (var _i2 = 0; _i2 < $('.company__comment').length; _i2++) {
    $('.company__comment').eq(_i2).append($('.company__comment').eq(_i2).find('.company__comment-text'));
  }

  for (var _i3 = 0; _i3 < $('.agency__body').length; _i3++) {
    $('.agency__body').eq(_i3).prepend($('.agency__body').eq(_i3).closest('.agency__item').find('.agency__text'));
  }

  for (var _i4 = 0; _i4 < $('.task__text').length; _i4++) {
    $('.task__text').eq(_i4).after($('.task__text').eq(_i4).closest('.task__item').find('.task__price'));
  }

  for (var _i5 = 0; _i5 < $('.item').length; _i5++) {
    $('.item').eq(_i5).append($('.item').eq(_i5).find('.item__buttons'));
    $('.item__photo').eq(_i5).append($('.item').eq(_i5).find('.item__title'));
    $('.item__info').eq(_i5).append($('.item').eq(_i5).find('.item__reviews'));
    $('.item .service__features').eq(_i5).before($('.item').eq(_i5).find('.service__progress'));
  }

  for (var _i6 = 0; _i6 < $('.settings__list div').length; _i6++) {
    $('.settings__list div').eq(_i6).append($('.settings__list div').eq(_i6).find('.settings__edit'));
  }
}