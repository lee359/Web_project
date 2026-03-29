# 設計構想 — 個人技術履歷與作品集

## 內容分析
- 使用者：中原大學電機工程學系在學學生，專注 AI / ML 與 Web 開發
- 主要區塊：Hero、關於我、技術技能、學術背景、專案作品、學習計畫（互動路線圖）、相關連結、GitHub 統計

---

<response>
<probability>0.07</probability>
<text>
## 方案 A：「Terminal Noir」— 終端機黑色美學

**Design Movement**: Brutalist Terminal / Hacker Aesthetic
**Core Principles**:
1. 一切元素模擬 CLI 終端機輸出，字體為等寬字體
2. 高對比黑底綠字，帶有掃描線（scanline）紋理
3. 動畫模仿打字機效果，游標閃爍
4. 資訊密度高，無多餘裝飾

**Color Philosophy**: 純黑 (#0a0a0a) 底、螢光綠 (#00ff41) 主色、暗綠 (#003b00) 輔助，傳遞「骨灰級駭客」氛圍
**Layout Paradigm**: 全頁單欄，模擬終端機 session，每個區塊以 `$ command` 開頭
**Signature Elements**: 掃描線疊加層、游標閃爍動畫、ASCII art 分隔線
**Interaction Philosophy**: hover 觸發終端機指令輸出動畫
**Animation**: 打字機逐字顯示、游標 blink、進入視窗時 `echo` 效果
**Typography System**: JetBrains Mono (全站等寬)，大標題用 ASCII art
</text>
</response>

<response>
<probability>0.08</probability>
<text>
## 方案 B：「Cyberpunk Blueprint」— 賽博龐克藍圖美學 ✅ 選定

**Design Movement**: Cyberpunk / Technical Blueprint
**Core Principles**:
1. 深海軍藍底色搭配電光青色 (Cyan) 強調，呈現工程藍圖感
2. 幾何線條、網格背景、帶有「電路板」視覺語言
3. 卡片元素帶有斜角裁切 (clip-path) 與發光邊框效果
4. 排版非對稱，左側固定導覽，右側主內容區

**Color Philosophy**:
- 背景：`#050d1a`（深夜藍）
- 主色：`#00d4ff`（電光青）
- 輔助：`#7c3aed`（紫羅蘭）
- 文字：`#e2e8f0`（冷白）
- 強調邊框：`#00d4ff` 帶 glow

**Layout Paradigm**: 左側固定導覽列（寬 220px）+ 右側單頁滾動主內容；Hero 區使用全寬斜角分隔線
**Signature Elements**:
1. 帶有 `clip-path: polygon` 斜角裁切的卡片與按鈕
2. 電路板網格背景 (SVG pattern)
3. 技能條帶有掃描動畫的發光進度條

**Interaction Philosophy**: hover 時卡片邊框發光增強、導覽項目左側出現電光線條
**Animation**: 進入視窗時 fade-up + 左側滑入；技能條從 0 動畫到目標值；路線圖卡片 3D 翻轉切換
**Typography System**:
- 標題：Space Grotesk (Bold 700)，帶字母間距
- 內文：DM Sans (Regular 400)
- 程式碼：JetBrains Mono
</text>
</response>

<response>
<probability>0.06</probability>
<text>
## 方案 C：「Washi Paper Tech」— 和紙科技美學

**Design Movement**: Japanese Minimalism × Technical Documentation
**Core Principles**:
1. 米白和紙紋理底色，搭配深墨色文字，呼應東方書法美學
2. 留白極致，每個區塊間距寬鬆，資訊呼吸感強
3. 強調色使用硃砂紅，對應技術標記（tag、badge）
4. 排版受日本雜誌影響，縱向流動感

**Color Philosophy**: 米白 (#f5f0e8) 底、深墨 (#1a1a2e) 文字、硃砂紅 (#c0392b) 強調，傳遞「精緻工匠」氛圍
**Layout Paradigm**: 全寬單欄，每個區塊交替左右對齊，形成視覺節奏
**Signature Elements**: 和紙紋理背景、毛筆筆觸分隔線、印章式標籤
**Interaction Philosophy**: 極輕微的 hover 位移，如翻閱書頁
**Animation**: 滾動時如展開捲軸的 reveal 動畫
**Typography System**: Noto Serif TC (標題) + Noto Sans TC (內文)
</text>
</response>

---

## 選定方案：B「Cyberpunk Blueprint」

理由：與使用者的 AI/ML 技術背景高度契合，深色科技感呼應 GitHub 統計圖的 tokyonight 主題，互動路線圖卡片在此風格下視覺效果最佳。
