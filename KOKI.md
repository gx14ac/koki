# Auberge KOKI - プロジェクト説明書

## プロジェクト概要

Auberge KOKI（オーベルジュコキ）は、山梨県道志村にある自然に囲まれたオーベルジュレストランです。
「山を扱く、なにもないようでなんでもある。二十四節季の記憶を耕す。」をコンセプトに、シンプルで洗練されたデザインを採用しています。

### 基本情報
- **プロジェクト名**: Auberge KOKI
- **技術スタック**: Next.js 15.4.6 (App Router), TypeScript, Tailwind CSS
- **開発環境**: Node.js, npm
- **デプロイ**: Vercel（推定）
- **ドメイン**: aubergekoki.com

## デザインコンセプト

### カラーパレット
- **背景色**: `rgb(245, 245, 245)` - 温かみのあるオフホワイト
- **テキスト色**: `#171717` - ダークグレー（可読性重視）
- **アクセント色**: グレー系のボーダーとセパレーター

### レイアウト原則
1. **ミニマリズム**: 余白を効果的に活用した空間設計
2. **レスポンシブデザイン**: モバイルファーストでタブレット・PC対応
3. **可読性**: 適切なフォントサイズとコントラスト
4. **ユーザビリティ**: 直感的なナビゲーションとアクセシビリティ

## フォント設定

### 日本語フォント
- **メインフォント**: A-OTF 中ゴシックBBB Pr5 Medium
- **ファイル**: 
  - `/public/A-OTF-GothicBBBPr5-Medium.woff2` (Web最適化)
  - `/public/A-OTF-GothicBBBPr5-Medium.otf` (フォールバック)
- **適用範囲**: ひらがな、カタカナ、漢字 (Unicode範囲: U+3000-303F, U+3040-309F, U+30A0-30FF, U+4E00-9FFF, U+FF00-FFEF)
- **ウェイト**: 200, 300, 400, 500 対応

### 英語フォント
- **サブフォント**: Helvetica Regular
- **ファイル**: `/public/Helvetica-Regular.otf`
- **適用範囲**: 英数字とASCII文字

### フォールバック順序
```css
font-family: 'A-OTF 中ゴシックBBB Pr5 Medium', 'Helvetica Regular', 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
```

## ページ構成とレスポンシブ対応

### ページ一覧
1. **TOP** (`/`) - メイン画像とナビゲーション
2. **RESERVATION** (`/reservation`) - 予約情報とコース詳細
3. **STAY** (`/stay`) - 宿泊施設の詳細
4. **ABOUT** (`/about`) - 施設について
5. **CONTACT** (`/contact`) - 連絡先情報

### レスポンシブブレークポイント

#### 基本ブレークポイント（Tailwind CSS準拠）
- **モバイル**: `< 768px`
- **タブレット**: `768px ≤ width < 1024px`
- **デスクトップ**: `1024px ≤ width < 1280px`
- **大型デスクトップ**: `≥ 1280px`

#### ページ別特殊設定

**RESERVATION ページ**
- **モバイル版表示**: `< 1536px` (2xl:hidden)
- **PC版表示**: `≥ 1536px` (hidden 2xl:block)
- *理由: 複雑なレイアウトの崩れを防ぐため、より大きな画面でのみPC版を表示*

**ABOUT ページ**
- **モバイル版表示**: `< 1280px` (xl:hidden)
- **PC版表示**: `≥ 1280px` (hidden xl:flex)
- *理由: 比較的シンプルなレイアウトのため、早めにPC版に切り替え*

## フォントサイズ仕様

### RESERVATION ページ
- **見出し**: 
  - モバイル: 18px
  - Web: 24px
- **説明文**: モバイル・Web共通サイズ

### STAY ページ
- **見出し（設備・アメニティ、注意事項、キャンセル料）**:
  - モバイル: 12px
  - Web: 20px
- **説明文**:
  - モバイル: 10px
  - Web: 16px
- **チェックイン・アウト情報**:
  - モバイル: デフォルト
  - Web: 20px

### ABOUT ページ
- **縦書きキャプション**:
  - モバイル: 15px
  - Web: 18px

### CONTACT ページ
- **連絡先情報**:
  - モバイル: 14px
  - Web: 16px
- **Google Mapリンク**: 14px（固定）

## 技術構成

### ディレクトリ構造
```
/
├── app/
│   ├── about/page.tsx          # ABOUTページ
│   ├── contact/page.tsx        # CONTACTページ
│   ├── reservation/page.tsx    # RESERVATIONページ
│   ├── stay/page.tsx          # STAYページ
│   ├── components/            # 共通コンポーネント
│   │   ├── GlobalHamburgerMenu.tsx  # ハンバーガーメニュー
│   │   ├── SectionBar.tsx     # フッターナビゲーション
│   │   ├── FooterSection.tsx  # フッター制御
│   │   └── PageContainer.tsx  # ページラッパー
│   ├── contexts/
│   │   └── LocaleContext.tsx  # 国際化対応（将来拡張用）
│   ├── globals.css           # グローバルスタイル
│   ├── layout.tsx           # ルートレイアウト
│   └── page.tsx            # TOPページ
├── public/                 # 静的ファイル
│   ├── fonts/             # フォントファイル
│   └── images/           # 画像ファイル
└── package.json
```

### 主要コンポーネント

#### SectionBar（フッターナビゲーション）
- **variants**: 
  - `default` - 標準レイアウト
  - `more-left` - 左寄せレイアウト
  - `mobile-large` - モバイル用大きめレイアウト
  - `centered` - 中央揃えレイアウト（RESERVATION、STAYページ用）

#### FooterSection（フッター制御）
- TOPページ、ABOUTページ、CONTACTページでは非表示
- RESERVATIONページ、STAYページでは`centered`バリアント使用

### CSS特徴

#### カスタムクラス
```css
.layout-left {
  padding-left: 2.0rem;
}
@media (min-width: 768px) {
  .layout-left {
    padding-left: 2.5rem;
  }
}
```

#### アニメーション
- ハンバーガーメニュー用の波アニメーション
- スムーズな浮上・沈没エフェクト
- 水の波紋・水滴エフェクト

## 開発・保守情報

### 開発サーバー起動
```bash
npm run dev
```
- デフォルトポート: 3000
- ポートが使用中の場合、自動的に3001等に変更

### ビルド・デプロイ
```bash
npm run build    # プロダクションビルド
npm run start    # プロダクションサーバー起動
npm run lint     # ESLintチェック
```

### 重要な設定ファイル

#### next.config.ts
- Turbopack使用設定
- 画像最適化設定

#### tailwind.config.ts
- カスタムフォント設定
- ブレークポイント拡張

#### globals.css
- フォントface定義
- カスタムアニメーション
- レイアウト用ユーティリティクラス

### ブラウザ対応
- **モダンブラウザ**: Chrome, Firefox, Safari, Edge（最新版）
- **フォント**: WOFF2対応ブラウザ
- **JavaScript**: ES2022対応

## 引き継ぎ時の注意点

### 1. フォントファイルの重要性
- A-OTF-GothicBBBPr5-Mediumは商用フォントのため、ライセンス確認必須
- フォントファイルが欠損するとデザインが大きく崩れる
- 必ず`/public/`内のフォントファイルをバックアップ

### 2. レスポンシブ設計の理解
- RESERVATION、ABOUTページは特殊なブレークポイント設定
- モバイル・PC版の切り替えロジックを理解してから修正
- テスト時は必ず複数デバイスサイズで確認

### 3. フッター表示制御
- `FooterSection.tsx`でページ別表示制御
- 新ページ追加時は必ず制御ロジックを確認
- ABOUTページ、CONTACTページは個別にSectionBar配置

### 4. 画像ファイル管理
- `/public/`内の画像は最適化済み
- 新しい画像追加時はWebP形式も検討
- ファビコンは`koki_vert_white_logo.png`使用

### 5. CSS優先順位
- Tailwindクラスとカスタムスタイルの競合に注意
- `!important`は必要最小限に使用
- グローバルスタイルの変更は影響範囲を慎重に確認

### 6. パフォーマンス考慮
- フォントプリロード設定（layout.tsx）
- 画像の遅延読み込み設定
- CSS-in-JS使用時のバンドルサイズ

## トラブルシューティング

### よくある問題

#### フォントが表示されない
1. フォントファイルのパス確認
2. Unicode範囲設定確認
3. ブラウザキャッシュクリア

#### レスポンシブが効かない
1. ブレークポイント設定確認
2. Tailwindクラスの競合確認
3. 親要素のoverflow設定確認

#### ハイドレーションエラー
- `suppressHydrationWarning={true}`設定済み
- ブラウザ拡張機能の影響を確認

### 緊急時の対応
1. `git log`で変更履歴確認
2. 直前のコミットにロールバック
3. Vercelダッシュボードで以前のデプロイメントに戻す

## 連絡先・リソース

### 技術サポート
- Next.js公式ドキュメント: https://nextjs.org/docs
- Tailwind CSS公式ドキュメント: https://tailwindcss.com/docs

### デザインリソース
- 使用画像は`/public/`フォルダ内
- アイコンはカスタム制作
- カラーパレットは本ドキュメント参照

---

**最終更新**: 2025年9月
**バージョン**: 1.0
k