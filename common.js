// GSAPの共通設定とユーティリティ関数
document.addEventListener("DOMContentLoaded", function () {
  // GSAPのデフォルト設定
  gsap.defaults({
    ease: "power2.out",
    duration: 0.5,
  });

  // コピーボタンの機能を初期化
  initCopyButtons();

  // メニューのアクティブ状態管理
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href").includes(currentPage)) {
      link.classList.add("active");

      // ドロップダウンメニュー内のアクティブなリンクの親メニューをアクティブにする
      const parentLi = link.closest(".dropdown");
      if (parentLi) {
        const parentLink = parentLi.querySelector("a");
        if (parentLink) {
          parentLink.classList.add("active");
        }
      }
    }
  });

  // 05_examplesディレクトリのページでは、コードサンプルを親メニューをアクティブにする
  if (window.location.pathname.includes("05_examples")) {
    const dropdownLink = document.querySelector(".dropdown > a");
    if (dropdownLink && !dropdownLink.classList.contains("active")) {
      dropdownLink.classList.add("active");
    }
  }

  // Prism.jsの再ハイライト処理（動的に追加されたコードブロックに対応）
  if (typeof Prism !== "undefined") {
    Prism.highlightAll();

    // シンタックスハイライト後に未処理のコードブロックにコピーボタンを追加
    addCopyButtonsToCodeBlocks();
  }
});

// コードブロックのコピー機能を初期化する関数
function initCopyButtons() {
  // 既存のコピーボタンにイベントリスナーを設定
  document.querySelectorAll(".copy-button").forEach((button) => {
    if (!button.hasAttribute("data-copy-initialized")) {
      button.setAttribute("data-copy-initialized", "true");
      addCopyFunctionality(button);
    }
  });
}

// コピーボタンに機能を追加する関数
function addCopyFunctionality(button) {
  button.addEventListener("click", function () {
    // 親ノードを取得し、その中からコード要素を探す
    const parentNode = this.parentNode;
    const codeElement = parentNode.querySelector("code");

    if (codeElement) {
      const code = codeElement.textContent;
      navigator.clipboard.writeText(code).then(() => {
        const originalText = this.textContent;
        this.textContent = "コピーしました！";
        this.classList.add("copied");

        setTimeout(() => {
          this.textContent = originalText;
          this.classList.remove("copied");
        }, 2000);
      });
    }
  });
}

// コピーボタンのスタイル設定
function applyCopyButtonStyles(button) {
  // ボタンのスタイル設定
  const styles = {
    position: "absolute",
    top: "5px",
    right: "5px",
    padding: "3px 8px",
    fontSize: "12px",
    cursor: "pointer",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "3px",
    opacity: "0.7",
  };

  // スタイルをボタンに適用
  Object.entries(styles).forEach(([property, value]) => {
    button.style[property] = value;
  });

  // ホバー時のイベント
  button.addEventListener("mouseover", () => (button.style.opacity = "1"));
  button.addEventListener("mouseout", () => (button.style.opacity = "0.7"));
}

// コードブロックにコピーボタンを追加する関数
function addCopyButtonsToCodeBlocks() {
  // pre > code 形式のコードブロックを検索（かつまだコピーボタンが追加されていないもの）
  document.querySelectorAll("pre:not(.copy-added)").forEach(function (pre) {
    // すでにコピーボタンがある場合はスキップ
    if (pre.querySelector(".copy-button")) return;

    // コピーボタンを作成
    const copyButton = document.createElement("button");
    copyButton.className = "copy-button";
    copyButton.textContent = "コピー";
    copyButton.title = "クリップボードにコピー";

    // コードブロックの親要素にボタンを追加
    pre.classList.add("copy-added");
    pre.style.position = "relative";
    pre.appendChild(copyButton);

    // ボタンのスタイルを適用
    applyCopyButtonStyles(copyButton);

    // コピー機能を追加
    addCopyFunctionality(copyButton);
  });
}
