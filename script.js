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

/*出し分け*/
document.addEventListener('DOMContentLoaded', () => {

    // 検索流入時にTOPで一般用HEROを表示するページ
    const generalPages = [
        '/seitai-pilates.html',
        '/pilates.html',
        '/tougou-work.html',
        '/approach.html'
    ];

    const currentPath = window.location.pathname;
    const referrer = document.referrer;

    // 検索エンジンからの流入か判定
    let isSearchEngine = false;

    if (referrer) {
        try {
            const host = new URL(referrer).hostname.toLowerCase();

            isSearchEngine =
                host.includes('google.') ||
                host.includes('yahoo.') ||
                host.includes('bing.') ||
                host.includes('duckduckgo.') ||
                host.includes('search.brave.com') ||
                host.includes('ecosia.org') ||
                host.includes('baidu.com') ||
                host.includes('naver.com');

        } catch (error) {
            isSearchEngine = false;
        }
    }

    // 検索エンジンから一般用ページに入った場合
    if (isSearchEngine && generalPages.includes(currentPath)) {
        sessionStorage.setItem('heroType', 'general');
    }

    // 検索エンジンからダンサー向けページに入った場合
    if (
        isSearchEngine &&
        (
            currentPath === '/dance-support.html' ||
            currentPath === '/dancer-seitai.html'
        )
    ) {
        sessionStorage.setItem('heroType', 'dancer');
    }

    // TOPページの場合
    if (currentPath === '/' || currentPath === '/index.html') {

        let heroType = sessionStorage.getItem('heroType');

        // 検索エンジンからTOPへ直接流入した場合は一般用
        if (!heroType && isSearchEngine) {
            heroType = 'general';
        }

        // 一般用HERO
        if (heroType === 'general') {

            const heroTitle = document.getElementById('hero-title');
            const heroDescription = document.getElementById('hero-description');

            if (!heroTitle || !heroDescription) return;

            heroTitle.innerHTML =
                '整体×ピラティスで<br>動きやすい身体をつくる';

            heroDescription.innerHTML =
                'ダンスのパフォーマンスアップから<br class="sp">日常生活の身体づくりまで。<br>' +
                '姿勢・動作・感覚・発達など<br class="sp">多角的な視点を取り入れ、<br>' +
                '一人ひとりに合わせた身体づくりを<br class="sp">サポートします。';
        }
    }

});