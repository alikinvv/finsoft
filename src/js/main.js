// header .bar animation

if ($('.header__menu .active').length > 0) {
    $('.header .bar')
        .stop()
        .animate({
            left: $('.header__menu .active').offset().left,
            width: $('.header__menu .active').outerWidth(),
        });
}

$('body').on('mouseenter', '.header__menu a', (e) => {
    $('.header .bar')
        .stop()
        .animate({ left: $(e.currentTarget).offset().left, width: $(e.currentTarget).outerWidth() });
});

$('body').on('mouseleave', '.header', (e) => {
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
    sameHeight('.news .news__item', '.news__title', 4);
    sameHeight('.users__item', '.users__text', 4);
    sameHeight('.reviews__item', '.reviews__body', 2);
    sameHeight('.service', '.service__text', 3);
};

resize();
$(window).on('resize', resize);

$('body').on('click', '.sidebar .scrollto', (e) => {
    $(e.currentTarget).next().slideDown(300);
    $(e.currentTarget).remove();
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

let theme = new Sticky('.theme__nav', {
    marginTop: 0,
    stickyClass: 'fixed',
});

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
