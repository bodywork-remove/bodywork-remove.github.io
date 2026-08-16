const body = document.querySelector('body');
/*要素が画面に入ったら .fade-in を追加*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('fade-in');
    });
}, { threshold: 0.12 });
document.querySelectorAll('.card, .visual, .copy, .price-card, .qa-block, .profile-wrap').forEach(el => observer.observe(el));

/*ナビゲーション*/
const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const nav = document.querySelector('nav');

/* ハンバーガーメニュー開閉 */
menu.addEventListener('click', function () {
    header.classList.toggle('opened');
    menu.classList.toggle('opened');
    body.classList.toggle('modal_open');
    nav.classList.toggle('opened');
});

/* ▼ボタンでサブメニュー開閉 */
document.querySelectorAll('.submenu-btn').forEach(btn => {

    btn.addEventListener('click', function (e) {

        e.preventDefault();
        e.stopPropagation();

        this.closest('.has-submenu').classList.toggle('open');

    });

});

/* リンククリックでメニューを閉じる */
document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function () {

        header.classList.remove('opened');
        menu.classList.remove('opened');
        body.classList.remove('modal_open');
        nav.classList.remove('opened');

        /* サブメニューも閉じる */
        document.querySelectorAll('.has-submenu').forEach(item => {
            item.classList.remove('open');
        });

    });

});