# 專案主題：個人技術履歷與作品集（Personal CV & Portfolio）

<!-- Badges: environment and tooling -->
![Node.js](https://img.shields.io/badge/Node.js-16%2B-brightgreen?logo=node&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-%E2%89%A5%2010-blue?logo=pnpm&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.1-61DAFB?logo=react&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.9%2B-yellow?logo=python&logoColor=white)

## 專案簡介

一個使用 Vite、React 與 TypeScript 建置的個人作品集（CV & Portfolio）前端專案。專案採用 Tailwind CSS、Radix UI 與多個自訂 UI 元件；`server/` 下包含一個可選的簡易 Express 伺服器，`build` 時會一併打包。


## 環境建置

### 。開發與執行環境需求與安裝指令

| 項目 | 版本 / 指令 |
|------|-------------|
| Node.js (runtime) | 16+（建議 LTS） |
| 套件管理 | pnpm（若未安裝，使用 `npx pnpm@latest`） |
| 安裝相依套件 | `npx pnpm@latest install` |

### 。專案使用的程式語言與版本

| 程式語言 | 版本 / 備註 |
|----------|------------|
| TypeScript | 5.6.3（參見 `devDependencies`） |
| JavaScript | ECMAScript / ESNext（由 Vite 編譯） |
| Node.js | 16+（runtime） |
| Python | 3.9+（若使用 repo 中的 Python 工具或 `doc` 裡的渲染流程） |

## 專案結構
```
thu_web_HW/
├── client/                 ← 前端（Vite + React）
│   ├── src/
│   │   ├── main.tsx        ← 應用進入點（render `App`）
│   │   ├── App.tsx         ← 根元件與路由（`wouter`）
│   │   ├── components/     ← 共用 UI 元件
│   │   └── pages/          ← 頁面元件（Home、Projects、NotFound）
│   └── index.html / public/ ← 靜態資源
├── server/                 ← 可選的 Express 伺服器（build 時會 bundle 至 `dist/`）
├── doc/                    ← 專案文件（包含 `How to open preview.md`）
├── patches/                ← pnpm patched dependencies
├── package.json
└── README.md               ← 專案說明
```

## 使用方式

啟動開發伺服器（Vite）：

```bash
npx pnpm@latest dev
```

建置 production（同時會將 `server/index.ts` bundle 到 `dist/`）：

```bash
npx pnpm@latest build
```

本機預覽已建置的產物：

```bash
npx pnpm@latest preview
```

在 production 模式下啟動（需先執行 `build`）：

```bash
npm run start
```

## 渲染效果預覽

。預覽圖

![alt text](image\image.png)

![alt text](image\image-1.png)

![alt text](image\image-2.png)

 網站連結：
 [https://deploy-preview-2--web666-project.netlify.app](https://web666-project.netlify.app/)

## 開發

- 應用入口：`client/src/main.tsx`（會 render `client/src/App.tsx`）
- 使用 `wouter` 作為 client-side 路由，並在 `client/src/contexts/ThemeContext.tsx` 提供主題（theme）上下文。
- 執行 TypeScript 型別檢查：

```bash
npx pnpm@latest run check
```

使用 Prettier 格式化程式碼：

```bash
npx pnpm@latest run format
```

## 常用指令

`package.json` 中的常用 scripts：

- `dev` — 啟動 Vite 開發伺服器
- `build` — 建置前端並 bundle server
- `preview` — 預覽 build 輸出
- `start` — 執行 production bundle (`node dist/index.js`)
- `check` — TypeScript 型別檢查
- `format` — Prettier 格式化






