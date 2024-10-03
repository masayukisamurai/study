// script.js
// document.querySelectorAll('.js-accordion-header').forEach((header) => {
//   header.addEventListener('click', () => {
//     const content = header.nextElementSibling;

//     // アコーディオンの開閉を切り替える
//     if (content.style.display === 'block') {
//       content.style.display = 'none';
//     } else {
//       content.style.display = 'block';
//     }
//   });
// });

// document.querySelectorAll('.accordion-header') で全てのアコーディオンヘッダーを取得します。
// header.addEventListener('click', () => { ... }) で各ヘッダーにクリックイベントを追加します。
// const content = header.nextElementSibling; でクリックされたヘッダーの次の要素（コンテンツ）を取得します。
// if (content.style.display === 'block') { ... } else { ... } でコンテンツの表示状態を切り替えます。

// functionの場合
// 要素の取得
// const accordionHeaders = document.querySelectorAll('.js-accordion-header');

// // 関数の定義
// function toggleAccordion(header) {
//   const content = header.nextElementSibling;

//   // アコーディオンの開閉を切り替える
//   if (content.style.display === 'block') {
//     content.style.display = 'none';
//   } else {
//     content.style.display = 'block';
//   }
// }
// // イベントリスナーの設定
// accordionHeaders.forEach((header) => {
//   header.addEventListener('click', () => toggleAccordion(header));
// });

// アロー関数の場合
// 全体の流れ
// 要素の取得: クラス名がjs-accordion-headerの全ての要素を取得し、accordionHeadersに格納します。
// 関数の定義: toggleAccordion関数を定義し、クリックされたヘッダーの次の要素（コンテンツ）の表示スタイルを切り替えます。
// イベントリスナーの設定: 取得した各ヘッダー要素にクリックイベントリスナーを追加し、クリックされたときにtoggleAccordion関数を実行します。

// 要素の取得
const accordionHeaders = document.querySelectorAll('.js-accordion-header');
// const: 定数を宣言するキーワードです。ここでは、accordionHeadersという名前の定数を作成しています。
// accordionHeaders: 取得した要素を格納する変数名です。
// document: 現在のHTMLドキュメントを指します。
// querySelectorAll: 指定したCSSセレクタに一致する全ての要素を取得するメソッドです。
// '.js-accordion-header': CSSセレクタです。クラス名がjs-accordion-headerの要素を全て取得します。

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
// const: 定数を宣言するキーワードです。ここでは、toggleAccordionという名前の関数を作成しています。
// toggleAccordion: アコーディオンの開閉を切り替える関数の名前です。
// (header) => { ... }: アロー関数の構文です。headerは関数の引数で、クリックされたヘッダー要素が渡されます。
// header.nextElementSibling: headerの次の兄弟要素（ここではアコーディオンのコンテンツ部分）を取得します。
// content.style.display: content要素の表示スタイルを取得または設定します。
// 'block': 要素をブロック表示にするスタイルです。
// 'none': 要素を非表示にするスタイルです。

// イベントリスナーの設定
accordionHeaders.forEach((header) => {
  header.addEventListener('click', () => toggleAccordion(header));
});
// accordionHeaders: 先ほど取得したアコーディオンヘッダーの要素です。
// forEach: 配列やNodeListの各要素に対して、指定した関数を一度ずつ実行するメソッドです。
// (header) => { ... }: アロー関数の構文です。headerはaccordionHeadersの各要素が順番に渡されます。
// header.addEventListener('click', () => toggleAccordion(header));: header要素にクリックイベントリスナーを追加します。
// クリックされたときにtoggleAccordion関数を実行します。
