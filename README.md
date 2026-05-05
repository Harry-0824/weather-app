# Weather App

## 專案簡介

Weather App 是一款專為作品集展示與技術驗證打造的即時天氣查詢應用。用戶可輸入城市名稱，快速取得目前天氣資訊。專案重點在於穩定的搜尋流程、響應式設計，以及完善的無障礙體驗，適合作為前端工程師作品集或技術評估參考。

## 主要流程

1. 使用者輸入地點（如城市名稱）
2. 按下查詢，進入 loading 狀態
3. 顯示天氣資訊（成功）、錯誤訊息（失敗）、或提示（空輸入）
4. 錯誤狀態下可直接重試

## 技術架構

- Next.js 16（App Router）
- React 19
- TypeScript
- styled-components（component-scoped styles）

## 樣式架構

- 頁面層樣式集中在 `src/app/page.styles.ts`
- 天氣功能元件樣式拆分在 `src/features/weather/components/*.styles.ts`
- `src/app/globals.css` 僅保留 reset 與 base 樣式，避免樣式檔過度膨脹

## 快速開始

本機開發與測試：

```bash
npm install
npm run dev
```

Production 版本建置：

```bash
npm run build
npm start
```

Lint 檢查：

```bash
npm run lint
```

預設啟動於 [http://localhost:3000](http://localhost:3000)

## 功能範圍（MVP）

- 即時查詢單一地點天氣
- 支援以地點名稱查詢目前天氣
- 響應式設計，適用於手機、平板、桌機
- 明確的 loading、error、empty、success 狀態
- 完整鍵盤操作體驗與明顯 focus 樣式
- 無需註冊、登入或權限

## 非目標範圍（Non-goals）

- 不支援天氣預報（forecast）
- 不支援地理定位（geolocation）
- 不支援收藏、地圖、圖表、帳號系統
- 不含部署腳本或自動化
- 不支援多城市、語系或主題切換

## 天氣資料來源

本專案採用 [Open-Meteo](https://open-meteo.com/) API 作為天氣資料來源，僅查詢目前天氣，不含預報。

## 驗證摘要

- 已通過 `npm run build`、`npm run lint`
- 手機、平板、桌機下版面穩定，無水平捲軸
- 各狀態（empty/loading/error/success）皆可辨識
- input、submit、retry 均可鍵盤操作且 focus 明顯
- 無新增未驗證功能

## 交接說明與限制

- 僅支援單一地點查詢，不含預報、地圖、收藏等進階功能
- 無部署腳本，僅供本機開發與驗證
- 若 Open-Meteo API 變更，需手動調整 provider 整合
- 無自動化測試，僅手動驗證
- 若需擴充功能，建議先補充自動化測試與 CI/CD

---

如需進一步擴充、維護或驗證，請參考本 README 所列現有功能與限制，並優先考慮自動化測試與 CI/CD 流程。
