// 要素の取得
const accordionHeaders = document.querySelectorAll('.js-accordion-header');

// 関数の定義
const toggleAccordion = (header) => {
  const content = header.nextElementSibling;

  // アコーディオンの開閉を切り替える
  if (content.style.display === 'block') {
    content.style.display = 'none';
  } else {
    content.style.display = 'block';
  }
};

// イベントリスナーの設定
accordionHeaders.forEach((header) => {
  header.addEventListener('click', () => toggleAccordion(header));
});
