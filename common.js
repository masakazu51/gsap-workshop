// GSAPの共通設定とユーティリティ関数
document.addEventListener("DOMContentLoaded", function () {
  // GSAPのデフォルト設定
  gsap.defaults({
    ease: "power2.out",
    duration: 0.5,
  });

  // コードブロックのコピー機能
  document.querySelectorAll(".copy-button").forEach((button) => {
    button.addEventListener("click", function () {
      const codeBlock = this.parentNode.querySelector("code");
      const code = codeBlock.textContent;

      navigator.clipboard.writeText(code).then(() => {
        const originalText = this.textContent;
        this.textContent = "コピーしました！";
        this.classList.add("copied");

        setTimeout(() => {
          this.textContent = originalText;
          this.classList.remove("copied");
        }, 2000);
      });
    });
  });

  // メニューのアクティブ状態管理
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href").includes(currentPage)) {
      link.classList.add("active");
    }
  });

  // Prism.jsの再ハイライト処理（動的に追加されたコードブロックに対応）
  if (typeof Prism !== "undefined") {
    Prism.highlightAll();

    // シンタックスハイライト後にコードブロックにコピーボタンを追加
    addCopyButtonsToCodeBlocks();
  }
});

// コードブロックにコピーボタンを追加する関数
function addCopyButtonsToCodeBlocks() {
  // pre > code 形式のコードブロックを検索
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

    // ボタンのスタイル設定
    copyButton.style.position = "absolute";
    copyButton.style.top = "5px";
    copyButton.style.right = "5px";
    copyButton.style.padding = "3px 8px";
    copyButton.style.fontSize = "12px";
    copyButton.style.cursor = "pointer";
    copyButton.style.background = "#4CAF50";
    copyButton.style.color = "white";
    copyButton.style.border = "none";
    copyButton.style.borderRadius = "3px";
    copyButton.style.opacity = "0.7";

    // ホバー時のスタイル
    copyButton.addEventListener("mouseover", function () {
      this.style.opacity = "1";
    });

    copyButton.addEventListener("mouseout", function () {
      this.style.opacity = "0.7";
    });
  });
}
