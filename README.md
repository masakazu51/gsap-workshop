# GSAP 勉強会

このリポジトリは、GSAP（GreenSock Animation Platform）の勉強会用の教材です。Web アニメーションの基礎から GSAP の応用まで、実践的に学ぶことができます。

## 目次

1. [GSAP の概要](./01_introduction/README.md) - GSAP とは何か、何ができるのか
2. [GSAP のメリット](./02_benefits/README.md) - 他のアニメーションライブラリとの比較
3. [Web での良いアニメーション](./03_good_animation/README.md) - 自然な動きとタイミング
4. [GSAP の基本的な使い方](./04_basic_syntax/README.md) - 基本構文と重要な概念
5. [実演：アニメーション実装例](./05_examples/README.md) - 実践的なコード例

## 勉強会の進め方

1. 各セクションの README を読みながら、概念を理解していきます
2. サンプルコードを実際に試してみましょう
3. 各セクションの最後にある練習問題に挑戦してみてください

## 準備

勉強会に参加する前に、以下の準備をしておくとスムーズです：

1. 最新のブラウザ（Chrome/Firefox/Safari）
2. テキストエディタ（VSCode 推奨）
3. 基本的な HTML/CSS/JavaScript の知識

## GSAP のインストール方法

GSAP を使用するには、主に以下の 2 つの方法があります：

### 1. CDN から読み込む方法（推奨）

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
```

ScrollTrigger プラグインを使用する場合は、以下も追加します：

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
  gsap.registerPlugin(ScrollTrigger);
</script>
```

### 2. npm からインストールする方法

```bash
npm install gsap
```

```javascript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
```

## ライセンス

GSAP は商用プロジェクトでも無料で使用できますが、制限があります。詳細は[GreenSock 公式サイト](https://greensock.com/licensing/)を確認してください。
