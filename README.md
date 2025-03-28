# T2X Platform

モダンなNext.js 15.1.0ベースのウェブアプリケーションプラットフォームです。8つの主要サービスを提供し、高度なコンテンツ生成・管理を実現します。

## 提供サービス

### 1. TTSLIDES
- プレゼンテーション資料の自動生成
- スライドテンプレートのドラッグ＆ドロップ
- レイアウト編集機能
- 背景・アニメーション設定
- テーマカスタマイズ

### 2. TTDOCS
- ドキュメント自動生成
- セクション分割機能
- アウトライン表示
- リアルタイム共同編集
- スタイル・フォント設定

### 3. TTSHEETS
- スプレッドシート自動生成
- テーブル構造編集
- セル書式設定
- 計算式自動生成
- グラフ生成機能

### 4. TTSQL
- データベース設計支援
- ER図作成
- テーブル定義の自動生成
- クエリパラメータ設定
- SQLシンタックスハイライト

### 5. TTCODES
- コード生成・変換
- プログラミング言語選択
- コードフォーマット
- シンタックスハイライト
- コードエディタ機能

### 6. TTIMAGES
- 画像生成・加工
- フィルター適用
- レイアウト設定
- 解像度調整
- 画像編集ツール

### 7. TTVIDEOS
- 動画コンテンツ生成
- シーン構成編集
- シナリオ作成
- BGM/ナレーション設定
- 動画プレビュー機能

### 8. TTRESEARCH
- リサーチレポート自動生成
- 学術論文作成支援
- 調査データ分析
- 参考文献自動引用
- マーケットリサーチ支援

## 技術スタック

### フロントエンド
- Next.js 15.1.0
- React 19
- TypeScript
- Tailwind CSS
- Radix UI Components
  - Accordion, Alert Dialog, Avatar
  - Context Menu, Dialog, Dropdown
  - Navigation Menu, Popover, Tabs
  - Toast, Tooltip など
- Next-themes（ダークモード対応）
- その他のUIコンポーネント
  - react-day-picker
  - react-hook-form
  - react-resizable-panels
  - recharts（グラフ描画）
  - sonner（通知）

### 開発環境
- Node.js 18.0.0以上
- npm 9.0.0以上
- TypeScript
- ESLint
- Postcss
- Tailwind CSS

## アプリケーション構造

```
t2x-platform/
├── app/                    # Next.js 13+ App Router
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # メインページ
├── components/            # 共通コンポーネント
│   ├── navigation-bar.tsx # グローバルナビゲーション
│   ├── text-input.tsx    # テキスト入力
│   ├── user-menu.tsx     # ユーザーメニュー
│   ├── theme-provider.tsx # テーマプロバイダー
│   └── ui/               # UIコンポーネント
├── public/               # 静的ファイル
└── styles/              # グローバルスタイル
```

## 主要機能

### 1. グローバルナビゲーション
- 8つのサービスへのクイックアクセス
- ユーザーメニュー（プロフィール、履歴、設定）
- レスポンシブ対応

### 2. テキスト入力・変換
- マルチライン入力対応
- リアルタイムバリデーション
- 変換プログレス表示
- エラーハンドリング

### 3. プレビュー・編集
- サービスごとのプレビュー表示
- 編集機能
- ダウンロード
- 再変換オプション

### 4. 設定管理
- サービスごとの詳細設定
- テーマ設定
- ユーザー設定
- 変換エンジン選択

### 5. レスポンシブデザイン
- モバイル対応
- タブレット対応
- デスクトップ最適化

### 6. アクセシビリティ
- WAI-ARIA対応
- キーボードナビゲーション
- スクリーンリーダー対応
- 高コントラストモード

### 7. パフォーマンス最適化
- 動的インポート
- 画像最適化
- キャッシング
- 遅延読み込み

## セットアップ

1. リポジトリのクローン:
```bash
git clone [repository-url]
cd t2x-platform
```

2. 依存関係のインストール:
```bash
npm install
```

3. 開発サーバーの起動:
```bash
npm run dev
```

アプリケーションは http://localhost:3000 で起動します。

## 利用可能なスクリプト

- `npm run dev` - 開発サーバーを起動
- `npm run build` - プロダクションビルドを作成
- `npm run start` - プロダクションサーバーを起動
- `npm run lint` - コードの静的解析を実行

## ライセンス

このプロジェクトはプライベートです。

## Screenshot

![Main Screen](main.png)

## Features

- **TTSLIDES**: Convert text into beautiful presentation slides
- **TTDOCS**: Transform text into formatted documents
- **TTSHEETS**: Generate spreadsheets from text
- **TTSQL**: Convert natural language to SQL queries
- **TTCODES**: Transform text into code
- **TTIMAGES**: Generate images from text descriptions
- **TTVIDEOS**: Create videos from text scripts
- **TTRESEARCH**: Research assistant

## Tech Stack

- Next.js 15.1.0
- React
- TypeScript
- Tailwind CSS
- Firebase Authentication
- Firebase Realtime Database

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_DATABASE_URL=your_database_url
```

## License

MIT 