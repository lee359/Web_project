# Firebase Emulator 開發模式

## 目的

Firebase Emulator 是本機測試用的 Firebase 環境。開發時可以用它測試 Auth 登入、Firestore 讀寫與後台管理功能，避免資料直接寫入雲端 Firebase 專案。

本專案目前提供兩種模式：

```text
npm run dev           連線到 .env.local 的雲端 Firebase
npm run dev:emulator  連線到本機 Firebase Emulator
```

## 相關檔案

```text
.env.emulator
firebase.json
firestore.rules
client/src/lib/firebase.ts
package.json
```

`.env.emulator` 使用測試專案 ID：

```env
VITE_FIREBASE_PROJECT_ID=demo-profile
VITE_USE_FIREBASE_EMULATOR=true
```

`client/src/lib/firebase.ts` 會在開發模式且 `VITE_USE_FIREBASE_EMULATOR=true` 時連到本機 emulator：

```text
Auth emulator:      127.0.0.1:9099
Firestore emulator: 127.0.0.1:8080
```

## 啟動方式

開兩個 PowerShell 視窗。

第一個視窗啟動 Firebase Emulator：

```powershell
npm run emulators
```

第二個視窗啟動 React/Vite：

```powershell
npm run dev:emulator
```

啟動後可以打開：

```text
Emulator UI: http://localhost:4000
Web app:     http://localhost:3000
```

如果 3000 port 被占用，Vite 可能會自動改用其他 port，請以終端機顯示的網址為準。

## 測試 Admin 登入

1. 開啟 Emulator UI：

```text
http://localhost:4000
```

2. 到 Authentication emulator 建立測試使用者。

範例：

```text
Email: admin@test.local
Password: test123456
```

3. 複製該使用者的 UID。

4. 到 Firestore emulator 建立 collection：

```text
admins
```

5. 在 `admins` collection 裡建立文件，文件 ID 使用剛才的 UID。

範例：

```text
admins/{測試使用者 UID}
```

文件內容可放：

```json
{
  "role": "admin"
}
```

6. 回到網站，從 Sidebar 點 Admin，使用測試帳號登入。

登入成功後會進入：

```text
/admin
```

## 測試 Projects 管理

登入 admin 後進入：

```text
/admin/projects
```

此頁會操作 Firestore emulator 的：

```text
projects
```

可以測試新增、修改、刪除 project。這些資料只會存在本機 emulator，不會寫入雲端 Firebase。

## 注意事項

- `npm run dev` 會連雲端 Firebase。
- `npm run dev:emulator` 才會連本機 Firebase Emulator。
- Emulator 中的 Auth 使用者和 Firestore 資料是本機測試資料。
- 關閉 emulator 後，測試資料可能不會永久保存，除非另外設定 export/import。
- 第一次啟動 Firestore emulator 可能需要下載 emulator 檔案。
- Firestore emulator 需要 Java，如果啟動失敗，請確認電腦已安裝 Java。

## 目前使用的 ports

```text
Auth:        9099
Firestore:   8080
Emulator UI: 4000
```

設定位置：

```text
firebase.json
```
