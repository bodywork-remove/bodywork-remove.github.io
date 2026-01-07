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
const body = document.querySelector('body');
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

/*要素が画面に入ったら .fade-in を追加*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('fade-in');
    });
}, { threshold: 0.12 });
document.querySelectorAll('.card, .visual, .copy, .price-card, .qa-block, .profile-wrap').forEach(el => observer.observe(el));

/*SP Menu*/
const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const nav = document.querySelector('nav');

menu.addEventListener('click', function (btn) {
    header.classList.toggle('opened');
    btn.target.classList.toggle('opened');
    body.classList.toggle('modal_open');
    nav.classList.toggle('opened');
});

const links = document.querySelectorAll('nav ul li a');

links.forEach(function (link) {
    link.addEventListener('click', function () {
        header.classList.remove('opened');
        menu.classList.remove('opened');
        body.classList.remove('modal_open');
        nav.classList.remove('opened');
    });
});