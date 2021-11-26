let ww = $(window).width();

// header .bar animation

if ($('.header__menu .active').length > 0 && ww > 768) {
    if (ww > 768) {
        $('.header .bar')
            .stop()
            .animate({
                left: $('.header__menu .active').offset().left,
                width: $('.header__menu .active').outerWidth(),
            });
    }
}

$('body').on('mouseenter', '.header__menu a', (e) => {
    if (ww > 768) {
        $('.header .bar')
            .stop()
            .animate({ left: $(e.currentTarget).offset().left, width: $(e.currentTarget).outerWidth() });
    }
});

$('body').on('mouseleave', '.header', (e) => {
    if (ww > 768) {
        if ($('.header__menu .active').length > 0) {
            $('.header .bar')
                .stop()
                .animate({
                    left: $('.header__menu .active').offset().left,
                    width: $('.header__menu .active').outerWidth(),
                });
        } else {
            $('.header .bar').stop().animate({ left: 0, width: 0 });
        }
    }
});

// submenu .bar animation

if ($('.submenu .active').length > 0) {
    $('.submenu .bar')
        .stop()
        .animate({
            left: $('.submenu .active').offset().left - $('.container').offset().left,
            width: $('.submenu .active').outerWidth(),
        });
}

$('body').on('mouseenter', '.submenu a', (e) => {
    $('.submenu .bar')
        .stop()
        .animate({ left: $(e.currentTarget).offset().left - $('.container').offset().left, width: $(e.currentTarget).outerWidth() });
});

$('body').on('mouseleave', '.submenu', (e) => {
    if ($('.submenu .active').length > 0) {
        $('.submenu .bar')
            .stop()
            .animate({
                left: $('.submenu .active').offset().left - $('.container').offset().left,
                width: $('.submenu .active').outerWidth(),
            });
    } else {
        $('.submenu .bar').stop().animate({ left: 0, width: 0 });
    }
});

// tabs .bar animation

if ($('.tabs .active').length > 0) {
    $('.tabs .bar')
        .stop()
        .animate({
            left: $('.tabs .active').offset().left - $('.tabs').offset().left,
            width: $('.tabs .active').outerWidth(),
        });
}

$('body').on('mouseenter', '.tabs a', (e) => {
    $('.tabs .bar')
        .stop()
        .animate({ left: $(e.currentTarget).offset().left - $('.tabs').offset().left, width: $(e.currentTarget).outerWidth() });
});

$('body').on('mouseleave', '.tabs', (e) => {
    if ($('.tabs .active').length > 0) {
        $('.tabs .bar')
            .stop()
            .animate({
                left: $('.tabs .active').offset().left - $('.tabs').offset().left,
                width: $('.tabs .active').outerWidth(),
            });
    } else {
        $('.tabs .bar').stop().animate({ left: 0, width: 0 });
    }
});

$('body').on('click', '.bookmark', (e) => {
    $(e.currentTarget).toggleClass('active');
});

$('body').on('click', '.heart', (e) => {
    $(e.currentTarget).toggleClass('active');
});

$('body').on('click', '.sidebar .scrollto', (e) => {
    $(e.currentTarget).next().slideDown(300);
    $(e.currentTarget).remove();
});

$('body').on('click', '.sort__filter, .filter__close', (e) => {
    $('.content.with-filter').toggleClass('show-filter');
    $('.filter').toggleClass('active');

    if (ww < 768) {
        $('html, body').toggleClass('overflow');
    }
});

$('body').on('click', 'a[data-scroll]', (e) => {
    $('html, body').animate({ scrollTop: $(`*:not(a)[data-scroll="${$(e.currentTarget).attr('data-scroll')}"]`).offset().top }, 1000);
});

$('body').on('click', '.tabs a', (e) => {
    $('.tabs a').removeClass('active');
    $('.tab').removeClass('active');
    $(e.currentTarget).addClass('active');
    $(`.tab[data-tab="${$(e.currentTarget).attr('data-tab')}"]`).addClass('active');
});

$('body').on('click', '.theme__nav-item', (e) => {
    $('.theme__nav-item').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('.tab').removeClass('active');
    $(`.tab[data-tab="${$(e.currentTarget).attr('data-tab')}"]`).addClass('active');
});

// show modal
$('body').on('click', '[data-modal]:not(.modal)', (e) => {
    if (!$('.backdrop').hasClass('active')) $('.backdrop').addClass('active');
    $('.modal.active').removeClass('active');
    $(`.modal[data-modal="${$(e.currentTarget).attr('data-modal')}"]`).addClass('active');

    if ($(e.currentTarget).attr('data-modal') === 'thanks') {
        setTimeout(() => {
            $('.modal.active').find('svg').addClass('animate');
        }, 100);
    }
});

// close modal events
let closeModal = () => {
    $('.backdrop').removeClass('active');
    $('.modal').removeClass('active');
    $('.modal').find('svg').removeClass('animate');
};

$('body').on('click', '.modal__close, .modal .close', closeModal);

$('body').on('click', '.backdrop', (e) => {
    if ($(e.target)[0].className === 'backdrop active') closeModal();
});

// close modal on press ESC
$(document).keyup((e) => {
    if (e.keyCode === 27 && $('.backdrop').hasClass('active')) closeModal();
});

$('body').on('submit', 'form', (e) => {
    e.preventDefault();
});

$('body').on('click', '.phone__toggle', (e) => {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).parent().find('.phone__dropdown').toggleClass('active');
});

$(document).click((event) => {
    if (
        !$(event.target).closest('.phone__toggle').length &&
        !$(event.target).closest('.header__user > img').length &&
        !$(event.target).closest('.select__current').length &&
        !$(event.target).closest('.select__dropdown').length &&
        !$(event.target).closest('.header__dropdown').length
    ) {
        $('.phone__dropdown').removeClass('active');
        $('.phone__toggle').removeClass('active');
        $('.header__dropdown').removeClass('active');
        $('.select').removeClass('active');
    }
});

$('body').on('click', '.show-popup', (e) => {
    $('.popup').toggleClass('active');
});

$('body').on('click', '.popup .btn:not(.btn-outline)', (e) => {
    $('.popup').toggleClass('active');
});

$('body').on('click', '.header__controls .btn-outline', (e) => {
    $('.header__controls .btn:not(.btn-outline)').addClass('btn-outline');
    $(e.currentTarget).removeClass('btn-outline');
});

$('body').on('click', '.header__user > img', (e) => {
    $('.header__dropdown').toggleClass('active');
});

$('body').on('click', '.password .icon.show:not(.active)', (e) => {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).parent().find('input').attr('type', 'text');
});

$('body').on('click', '.password .icon.show.active', (e) => {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).parent().find('input').attr('type', 'password');
});

// Custom scroll
document.querySelectorAll('.custom-scroll').forEach((el) => {
    new SimpleBar(el);
});

$('body').on('click', '.select.active .select__current', (e) => {
    $('.select').removeClass('active');
    $(e.currentTarget).parent().removeClass('active');
});

$('body').on('click', '.select:not(.active) .select__current', (e) => {
    $('.select').removeClass('active');
    $(e.currentTarget).parent().addClass('active');
});

let masks = document.querySelectorAll('.phone-mask');

masks.forEach((el) => {
    IMask(el, { mask: '+{7} (000) 000 00 00' });
});

if (ww > 768) {
    let theme = new Sticky('.theme__nav', {
        marginTop: 0,
        stickyClass: 'fixed',
    });
}

$('body').on('click', '.video + .content__more', (e) => {
    $('.video.hide').addClass('active');
    $(e.currentTarget).remove();
});

$('body').on('click', '.logos + .content__more', (e) => {
    $(e.currentTarget).prev().addClass('active');
    $(e.currentTarget).remove();
});

$('body').on('click', '.company__text a', (e) => {
    $(e.currentTarget).parent().next().slideDown(300);
    $(e.currentTarget).remove();
});

$('body').on('click', '.points__range div', (e) => {
    $('.points__range div').removeClass('active');
    $(e.currentTarget).addClass('active');
});

$('body').on('click', '.hamburger', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.header__menu').toggleClass('active');
});

let service = document.querySelectorAll('.service__list');

service.forEach((slide) => {
    new Swiper(slide, {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            768: {
                slidesPerView: 2.1,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
});

let video = document.querySelectorAll('.video');

video.forEach((slide) => {
    new Swiper(slide, {
        slidesPerView: 1.1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
});

var reviews = new Swiper('.reviews__list', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});

var docs = new Swiper('.docs', {
    slidesPerView: 1.1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

var materials = new Swiper('.materials__list:not(.three)', {
    slidesPerView: 1.3,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var materialsThree = new Swiper('.materials__list.three', {
    slidesPerView: 1.3,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var similar = new Swiper('.similar__list', {
    slidesPerView: 1.3,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var freelancers = new Swiper('.freelancers__list', {
    slidesPerView: 1.1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var agency = new Swiper('.agency__list', {
    slidesPerView: 1.1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});

var users = new Swiper('.users__list', {
    slidesPerView: 1.1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

if (ww <= 1023) {
    var sale = new Swiper('.sale__list:not(.four)', {
        slidesPerView: 1.3,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3.1,
                spaceBetween: 20,
            },
        },
    });
}

var news = new Swiper('.news__list', {
    slidesPerView: 1.1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

$('body').on('click', 'h2 .tip-parent, .question .tip-parent', (e) => {
    if (ww < 1024) {
        if (!$('.backdrop').hasClass('active')) $('.backdrop').addClass('active');
        $('.modal.active').removeClass('active');
        $(`.modal[data-modal="tips"] .modal__body`).html($(e.currentTarget).find('.tip').html());
        $(`.modal[data-modal="tips"]`).addClass('active');
    }
});

$('body').on('click', '.footer__title', (e) => {
    if (ww < 768) {
        $(e.currentTarget).toggleClass('active');
        $(e.currentTarget).next().slideToggle(300).css('display', 'flex');
    }
});

let sameHeight = (item, element, count) => {
    let titleHeight = 0;
    let items = [];

    for (let i = 1; i < $(item).length + 1; i++) {
        let $step = $(item).eq(i - 1);

        if (i !== 0 && i % count === 0) {
            if ($step.find(element).height() > titleHeight) {
                titleHeight = $step.find(element).height();
            }

            items.push(i - 1);

            for (let j = 0; j < items.length; j++) {
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

let resize = () => {
    ww = $(window).width();
    sameHeight('.news__list:not(.three) .news__item', '.news__title', 4);
    sameHeight('.news__list.three .news__item', '.news__title', 3);
    sameHeight('.users__item', '.users__text', 4);
    sameHeight('.reviews__item', '.reviews__body', 2);
    sameHeight('.service', '.service__text', 3);
};

resize();
$(window).on('resize', resize);

// if (ww > 767) {
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
    sameHeight('.features__row', '.features__item', 3);

    if (!$('.main__search').length) {
        $('.header').addClass('center');
    }

    for (let i = 0; i < $('.company__user').length; i++) {
        $('.company__user').eq(i).find('.company__user-name').append($('.company__user').eq(i).find('.company__user-features'));
    }

    for (let i = 0; i < $('.company__user').length; i++) {
        $('.company__user').eq(i).find('.company__user-name').append($('.company__user').eq(i).find('.reviews__check'));
    }

    for (let i = 0; i < $('.company__comment').length; i++) {
        $('.company__comment').eq(i).append($('.company__comment').eq(i).find('.company__comment-text'));
    }

    for (let i = 0; i < $('.agency__body').length; i++) {
        $('.agency__body').eq(i).prepend($('.agency__body').eq(i).closest('.agency__item').find('.agency__text'));
    }

    for (let i = 0; i < $('.task__text').length; i++) {
        $('.task__text').eq(i).after($('.task__text').eq(i).closest('.task__item').find('.task__price'));
    }

    for (let i = 0; i < $('.item').length; i++) {
        $('.item').eq(i).append($('.item').eq(i).find('.item__buttons'));
        $('.item__photo').eq(i).append($('.item').eq(i).find('.item__title'));
        $('.item__info').eq(i).append($('.item').eq(i).find('.item__reviews'));
        $('.item .service__features').eq(i).before($('.item').eq(i).find('.service__progress'));
    }

    for (let i = 0; i < $('.settings__list div').length; i++) {
        $('.settings__list div').eq(i).append($('.settings__list div').eq(i).find('.settings__edit'));
    }
}
