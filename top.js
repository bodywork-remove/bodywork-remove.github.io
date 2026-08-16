/*swiper*/
const swiper = new Swiper(".swiper-container", {
    // ドットインジケーターの表示
    pagination: {
        el: ".swiper-pagination",
    },
    // 前後スライドボタンを表示
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true, // ループの有効化
    speed: 2000,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
});

const examplesSwiper = new Swiper('.examples-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    pagination: {
        el: '.examples-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.examples-next',
        prevEl: '.examples-prev',
    },
});


/*tab切り替え*/
const select = document.querySelectorAll('.select');
const pricingType = document.querySelectorAll('.pricing-type');

select.forEach(function (tabs) {
    tabs.addEventListener('click', function (event) {
        select.forEach(function (element) {
            element.classList.remove('current');
        });
        event.target.classList.add('current');
        pricingType.forEach(function (element) {
            element.classList.add('hide');
        });
        const tabIndex = Array.from(select).indexOf(tabs);
        pricingType[tabIndex].classList.remove('hide');
    });
});

/*予約modal*/
// const reserve = document.querySelectorAll('.reserve');
// const modal = document.querySelectorAll('.modal');

// reserve.forEach(function (btn) {
//     btn.addEventListener('click', function () {
//         body.classList.add('modal_open');
//         const modalIndex = Array.from(reserve).indexOf(btn);
//         modal[modalIndex].classList.add('show');
//     });
// });

// const closeBtn = document.querySelectorAll('.close');
// const modals = document.querySelectorAll('.modal');

// closeBtn.forEach(function (btn) {
//     btn.addEventListener('click', function () {
//         body.classList.remove('modal_open');
//         modals.forEach(function (modal) {
//             modal.classList.remove('show');
//         });
//     });
// });
