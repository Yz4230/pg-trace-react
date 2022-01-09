# [pg-trace-react](https://yz4230.github.io/pg-trace-react/)

## これは何？

これは[株式会社 Shinonome](https://shinonome.io/)が提供している学生コミュニティ「Playground」の、ウェブサイトのトレース課題です。

## 使用した OSS

このトレースサイトは、以下の OSS により実現しました。

- [React](https://reactjs.org/)
- [Emotion](https://emotion.sh/)
- [Vite](https://vitejs.dev/)
- [pNPM](https://pnpm.io/)

## ビルド方法

このプログラムでは、次のバージョンを使用しています。

- `pNPM == 6.25.1`
- `Node.js == 16.13.0`

### 依存関係のインストール

```bash
pnpm install
```

### 開発サーバーの起動

```bash
pnpm run dev
```

### ビルド

```bash
pnpm run build
```

## デプロイ

このレポジトリでは、[GitHub Actions](https://github.com/features/actions)によって、`main`ブランチにプッシュされたら自動でビルド&デプロイを行います。

## 技術選定

次の理由により、フレームワークの選定を行いました。

### React

- Typescript ネイティブでチーム開発に適している。
- 将来的に SSR/SSG をするときに、[Next.js](https://nextjs.org/)の恩恵を受けることができる。

### Emotion

- 似たような OSS に、[Styled Components](https://styled-components.com/)があるが、こちらの方がキャッシュ機能が優秀で、高いパフォーマンスが期待できる。
- 他に、[CSS Modules](https://github.com/css-modules/css-modules)という選択肢があるが、
  - ファイル構成が冗長になる
  - `styles`の型が`any`になる。
    点により見送った。

### Vite & pNPM

- Vite は内部的に[esbuild](https://esbuild.github.io/)を使用していて、esbuild は Go 言語を使用しているため、非常にビルドが速い。ただし、esbuild はトランスコンパイルのみで TypeScript の型チェックを行わないため、ビルドには`tsc --noEmit`が必要。
- pNPM は、独自のキャッシュ機能や最適化により、npm よりも高速に依存関係をインストールできる。
