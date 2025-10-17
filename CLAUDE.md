# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

Next.js 14ベースの公開メモ（Scrap）サービス。ユーザーがメモを投稿し、コメントを追加できるアプリケーション。

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **認証**: NextAuth.js v5 (Google OAuth)
- **データベース**: PostgreSQL + Prisma ORM
- **スタイリング**: Tailwind CSS
- **パッケージマネージャー**: Yarn
- **デプロイ**: Google Cloud Run + Cloud Build

## 開発コマンド

### ローカル開発

```bash
# 開発サーバー起動
yarn dev

# 本番ビルド（Prisma Client生成も含む）
yarn build

# 本番サーバー起動
yarn start

# Lint実行
yarn lint

# Prismaコマンド実行
yarn prisma <command>
```

### データベース

```bash
# ローカルPostgres起動（Docker Compose）
docker-compose up -d

# マイグレーション実行
yarn prisma migrate dev

# マイグレーション適用（本番）
yarn prisma migrate deploy

# Prisma Client再生成
yarn prisma generate

# Prisma Studioでデータ確認
yarn prisma studio
```

接続情報:
- ローカルDB: `localhost:5333`
- データベース名/ユーザー/パスワードは環境変数で設定

## アーキテクチャ

### ルートグループ構造

- `app/(scrap)/`: メインのScrapサービス
- `app/life/`: 別サービス用のルートグループ（将来の拡張用）

同一プロジェクトで複数サービスを運用するため、サービスごとにルートグループで分離している。

### データフロー

**Next.js公式チュートリアルのパターンを採用:**

1. **データ取得**: `app/lib/data.ts` - Server Componentsから呼び出すfetch関数群
2. **データ更新**: `app/lib/actions.ts` - Server Actionsによる変更処理（"use server"）

### 認証システム

**ファイル構成:**
- `auth.ts`: NextAuth設定とユーザー情報取得関数
- `auth.config.ts`: 認証設定
- `middleware.ts`: 認証ミドルウェア

**重要な仕様:**
- Prisma Adapterを使用しているが、sessionは`strategy: "jwt"`（DBセッションだとJWEエラーが発生するため）
- カスタムAdapter実装で、ユーザー作成時に自動的にランダムな6文字の`screenName`を生成
- `findCurrentUser()`: 認証必須の処理で使用（未認証時はエラー）
- `fetchCurrentUser()`: 認証状態を確認する処理で使用（未認証時はnull）

### データモデル設計（Prisma Schema）

**論理削除パターン:**
- `ScrapPosting` -> `ScrapDeleting`: Scrapの削除は論理削除
- `ScrapCommenting` -> `ScrapCommentDeleting`: コメントの削除も論理削除
- `ScrapCommentEditing`: コメント編集履歴を保持（最新の編集内容を表示）

**命名規則:**
- イベントソーシング的な命名: `ScrapPosting`, `ScrapCommenting`, `ScrapDeleting`, `ScrapCommentEditing`など
- テーブル名: snake_case（例: `scrap_postings`, `scrap_comment_editings`）
- フィールド名: camelCase（Prismaモデル）、snake_case（DB）

### 日時処理

`@js-temporal/polyfill`を使用してタイムゾーン処理を実装（`app/lib/data.ts`の`toZnedDateTime`関数）。すべての日時は`Asia/Tokyo`で処理。

### Next.js設定

- `output: "standalone"`: Dockerイメージ最適化のため
- ビルド時に`prisma generate`を自動実行

## デプロイ

Google Cloud Buildによる自動デプロイ（`cloudbuild.yaml`）:

1. Dockerイメージビルド
2. Container Registryにプッシュ
3. Cloud SQL Proxyを使用してPrismaマイグレーション実行
4. Cloud Runにデプロイ

**環境変数:**
- `DATABASE_URL`: PostgreSQL接続文字列（Secret Managerで管理）
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`: OAuth認証情報
- `NEXTAUTH_SECRET`: NextAuth用シークレット

## 権限管理

すべてのServer Actionsで権限チェックを実装:
- ユーザーは自分のScrapにのみコメント可能
- ユーザーは自分のScrap/コメントのみ編集・削除可能
