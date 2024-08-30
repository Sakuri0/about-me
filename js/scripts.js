document.addEventListener("DOMContentLoaded", function () {
    console.log('自己紹介サイトへようこそ！');

    const fadeInElements = document.querySelectorAll('.fade-in');
    const header = document.querySelector('.page-header');
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    // スクロールイベントを監視して要素を表示する & ヘッダーの固定
    function handleScroll() {
        const windowHeight = window.innerHeight;

        // フェードイン効果
        fadeInElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= windowHeight - 100) {
                el.classList.add('show');
            }
        });

        // ヘッダーの固定
        if (window.scrollY > 100) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    }

    // ページ内リンクのスムーススクロール
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ページロード時とスクロール時に実行
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
