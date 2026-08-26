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
            const heroWrap = document.querySelector('.hero_wrap');

            if (!heroTitle || !heroDescription) return;

            heroTitle.innerHTML =
                '整体×ピラティスで<br>動きやすい<br class="sp">身体をつくる';

            heroDescription.innerHTML =
                'ダンスのパフォーマンスアップから<br class="sp">日常生活の身体づくりまで。<br>' +
                '姿勢・動作・感覚・発達など<br class="sp">多角的な視点で、<br>' +
                '一人ひとりに合わせた身体づくりを<br class="sp">サポートします。';

            heroWrap.classList.add('general');
        }
    }

});

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
    slidesPerView: 1.15,
    spaceBetween: 16,
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

function equalizeExampleCards() {
    const cards = document.querySelectorAll('.examples-swiper .example-card');

    if (!cards.length) return;

    // 一度高さをリセット
    cards.forEach(card => {
        card.style.height = 'auto';
    });

    // 一番高いカードを取得
    const maxHeight = Math.max(
        ...Array.from(cards).map(card => card.offsetHeight)
    );

    // 全カードを最大高さに揃える
    cards.forEach(card => {
        card.style.height = `${maxHeight}px`;
    });
}

window.addEventListener('load', equalizeExampleCards);
window.addEventListener('resize', equalizeExampleCards);

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
