# 網頁顏色調整指南

## 概述
本文件整理了整個專案中控制網頁界面顏色的所有檔案，提供快速參考和顏色調整指南。

---

## 全局配置檔案

### 1. **client/src/index.css** ⭐ (最重要)
**位置:** `client/src/index.css`  
**功能:** 定義所有 CSS 變數和全局樣式

#### 主要顏色變數

**賽博朋克主題色:**
- `--color-cyber-cyan: #00d4ff` — 青色（主要強調色）
- `--color-cyber-violet: #7c3aed` — 紫色（次要強調色）
- `--color-cyber-navy: #050d1a` — 深海軍藍（背景）
- `--color-cyber-navy-mid: #0a1628` — 中等海軍藍
- `--color-cyber-navy-light: #0f2040` — 淺海軍藍

**CSS 變數 (使用 OKLCH 色彩空間):**
- `--primary: oklch(0.75 0.18 200)` — 主色
- `--secondary: oklch(0.13 0.03 240)` — 次色
- `--accent: oklch(0.45 0.22 290)` — 強調色
- `--destructive: oklch(0.60 0.22 25)` — 危險/警告色
- `--sidebar-*` — 側邊欄相關顏色

#### 調整顏色的方法

要改變全局顏色，編輯 `:root` 和 `.dark` 部分中的 OKLCH 值：

```css
:root {
  --primary: oklch(0.75 0.18 200);  /* 亮度 0.75, 飽和度 0.18, 色調 200° */
  --accent: oklch(0.45 0.22 290);
}

.dark {
  /* 暗模式顏色 */
}
```

**OKLCH 色彩空間參數:**
- 第一個數字：亮度 (0-1)
- 第二個數字：飽和度 (0-0.4)
- 第三個數字：色調 (0-360°)

---

### 2. **components.json**
**位置:** `components.json`  
**功能:** shadcn/ui 組件庫配置

```json
{
  "baseColor": "neutral",      // 基礎顏色
  "cssVariables": true,         // 使用 CSS 變數
  "tailwindConfig": "./tailwind.config.ts"
}
```

**何時修改:** 需要改變 UI 組件整體風格時（通常不需要修改）

---

### 3. **vite.config.ts**
**位置:** `vite.config.ts`  
**功能:** 建置配置，加載 Tailwind CSS

**相關設定:**
```typescript
import tailwindcss from "@tailwindcss/vite";
// 使用 Tailwind CSS 外掛處理 CSS
```

---

### 4. **client/src/contexts/ThemeContext.tsx**
**位置:** `client/src/contexts/ThemeContext.tsx`  
**功能:** 管理主題切換（亮色/暗色）

**主要功能:**
- `toggleTheme()` — 切換亮暗模式
- 在 `document.documentElement` 上添加/移除 "dark" 類別
- 儲存主題偏好到 localStorage

**如何使用:**
```typescript
const { theme, toggleTheme } = useTheme();
```

---

## 組件特定顏色檔案

### 5. **client/src/components/Sidebar.tsx**
**位置:** `client/src/components/Sidebar.tsx`  
**功能:** 側邊欄導航樣式

**硬編碼顏色:**
- `#00d4ff` — 青色（活躍指示器、圖標）
- `#e2e8f0` — 淺灰色（文字）
- `#050d1a` — 深藍（背景）
- `#060e1e` 至 `#080f1f` — 漸層背景

**調整位置:**
- 第 60-75 行：漢堡選單按鈕顏色
- 第 125-145 行：側邊欄背景漸層
- 第 155-165 行：導航項目顏色
- 第 185+ 行：頁腳連結顏色

---

### 6. **client/src/components/sections/HeroSection.tsx**
**位置:** `client/src/components/sections/HeroSection.tsx`  
**功能:** 英雄區域（首頁頂部）樣式

**硬編碼顏色:**
- `#050d1a` — 背景色
- `#00d4ff` — 青色文字/邊框
- `#e2e8f0` — 淺色文字
- `#a78bfa` — 紫色文字

**調整位置:**
- 各個 `style={{}}` 物件中的顏色定義

---

### 7. **client/src/components/Footer.tsx**
**位置:** `client/src/components/Footer.tsx`  
**功能:** 頁腳樣式

**硬編碼顏色:**
- `#050d1a` — 背景
- `rgba(226,232,240,0.3)` — 淺灰色文字

---

### 8. **client/src/components/ManusDialog.tsx**
**位置:** `client/src/components/ManusDialog.tsx`  
**功能:** 對話框/模態樣式

**顏色方案:** （與主題不同，使用淺色主題）
- `#f8f8f7` — 淺色背景
- `#34322d` — 深灰
- `#858481` — 中灰
- `#1a1a19` — 深黑

**注意:** 這個組件使用獨立的顏色方案，與主題系統分離

---

## 快速顏色變更指南

### 情況 1：改變全局主色調
**檔案:** `client/src/index.css`

在 `:root` 和 `.dark` 區塊中修改：
```css
--primary: oklch(0.75 0.18 200);  /* 改變這行的 "200" 可改變色調 */
--accent: oklch(0.45 0.22 290);
```

### 情況 2：改變賽博朋克主顏色（青色 → 其他顏色）
**檔案:** 多個檔案需要修改

1. `client/src/index.css` — 改變 CSS 變數
2. `client/src/components/Sidebar.tsx` — 改變 `#00d4ff`
3. `client/src/components/sections/HeroSection.tsx` — 改變相關顏色
4. 其他組件檔案

### 情況 3：改變亮/暗模式顏色
**檔案:** `client/src/index.css`

修改 `.dark` 區塊中的 OKLCH 值，不影響 `:root` (亮色模式)

### 情況 4：改變特定組件顏色
**檔案:** 該組件的 `.tsx` 檔案

找到 `style={{}}` 物件，直接修改顏色值（如 `#00d4ff`）

---

## 主要顏色組合

### 賽博朋克主題 (當前)
| 用途 | 顏色值 | 說明 |
|------|-------|------|
| 背景 | #050d1a | 深海軍藍 |
| 主強調 | #00d4ff | 電青色 |
| 次強調 | #7c3aed | 紫色 |
| 文字 | #e2e8f0 | 淺灰 |
| 邊框 | rgba(0,212,255,0.3) | 青色半透明 |

### 進階調整（OKLCH 參考）
| 顏色類型 | OKLCH 值 | 說明 |
|---------|---------|------|
| 淺色背景 | oklch(0.98 0.01 240) | 接近白色 |
| 深色背景 | oklch(0.07 0.02 240) | 接近黑色 |
| 高對比文字 | oklch(0.92 0.01 220) | 淺灰文字 |
| 低對比文字 | oklch(0.60 0.02 220) | 中灰文字 |

---

## 常見工作流

### 將整個網站從暗色改為淺色
1. 編輯 `client/src/index.css` 的 `:root` 顏色
2. 編輯各個組件檔案的硬編碼顏色
3. 或使用 `ThemeContext.tsx` 的主題切換功能（推薦）

### 改變賽博朋克的青色主色
1. 在 `client/src/index.css` 中改變 `--color-cyber-cyan`
2. 在 `Sidebar.tsx` 中搜尋 `#00d4ff` 並替換
3. 在其他組件中搜尋相同顏色並替換

### 檢查色彩一致性
使用編輯器的「查找和替換」功能搜尋所有硬編碼顏色（如 `#00d4ff`）

---

## 工具與資源

### 色彩轉換工具
- **OKLCH 轉換器:** https://oklch.com/
- **HEX 轉換器:** 任何線上色彩轉換網站

### 推薦工作流
1. 在 `client/src/index.css` 中定義全局顏色
2. 在組件中使用 `var(--color-name)` 而非硬編碼 hex 值
3. 使用 Tailwind CSS 類別處理樣式（避免內聯樣式）

---

## 檔案修改檢查清單

修改顏色時，檢查以下檔案是否需要更新：

- [ ] `client/src/index.css` — CSS 變數
- [ ] `client/src/components/Sidebar.tsx` — 導航顏色
- [ ] `client/src/components/sections/HeroSection.tsx` — 英雄區顏色
- [ ] `client/src/components/Footer.tsx` — 頁腳顏色
- [ ] `client/src/components/ManusDialog.tsx` — 模態框顏色（如適用）
- [ ] 其他自訂組件 — 搜尋 `style={{` 和硬編碼顏色

---

**最後更新:** 2026-05-14
