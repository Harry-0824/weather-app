# AI Context

## 1. Project Overview

專案名稱：即時天氣查詢應用

這是一個以 Next.js + React + TypeScript + CSS 建置的即時天氣查詢應用，主要目標是讓使用者輸入城市名稱後，快速取得該城市的即時天氣資訊，並以清楚、直覺、行動裝置友善的方式呈現。

核心功能：

- 查詢城市天氣
- 顯示即時氣溫
- 顯示天氣狀態（例如：晴天、陰天、雨天、多雲等）
- 提供友善的載入、錯誤、空狀態回饋
- 具備良好的響應式 UI 與可維護的程式架構

設計目標：

- 查詢流程簡單：輸入城市 → 送出 → 顯示結果
- 資訊呈現清楚：重點是「目前溫度」與「天氣狀態」
- 程式結構可擴充：未來可加入預報、定位、自動完成、收藏城市等功能
- 保持元件責任單一、型別清楚、API 邏輯集中

---

## 2. Tech Stack（詳細列出）

### 核心技術

- Next.js
  - 使用 App Router 架構
  - 適合頁面式路由與元件化開發
  - 支援 Server Components / Client Components 的分工
- React
  - 建構互動式 UI
  - 用於表單、結果顯示、狀態控制
- TypeScript
  - 加強型別安全
  - 減少 API 資料結構與 UI 狀態的錯誤
- CSS
  - 本專案採用 styled-components 作為主要樣式方案
  - 元件樣式使用 co-located `*.styles.ts` 檔案
  - `globals.css` 僅保留 reset/base，不承載頁面與功能樣式

### 常用搭配工具

- ESLint
  - 統一程式碼風格與靜態檢查
- Next.js built-in tooling
  - 路由、圖片、metadata、最佳化建置流程
- Fetch API
  - 與天氣資料服務互動
- 環境變數（.env.local）
  - 放 API Key、base URL 等敏感設定

### 建議延伸套件（視需求選用）

- Zod
  - 驗證 API response 與使用者輸入
- React Hook Form
  - 若表單需求變複雜，可提升可維護性
- TanStack Query / SWR
  - 若需要快取、重試、背景更新與 loading 狀態管理
- clsx / classnames
  - 管理條件式 className

### 本專案技術特性

- 專案名稱：weather-app
- 目前依據 package.json：
  - next: 16.2.4
  - react: 19.2.4
  - react-dom: 19.2.4
  - typescript: ^5
  - eslint: ^9

---

## 3. Folder Structure（符合 Next.js）

以下為建議的 Next.js App Router 結構，適合即時天氣查詢應用：

```text
weather-app/
├─ docs/
│  └─ ai-context.md
├─ public/
│  ├─ icons/
│  └─ images/
├─ src/
│  ├─ app/
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ page.styles.ts
│  │  ├─ loading.tsx            # 全域或頁面載入狀態（可選）
│  │  ├─ error.tsx              # 頁面錯誤邊界（可選）
│  │  ├─ not-found.tsx          # 404 頁（可選）
│  │  └─ api/                   # 若有內部 API route 可放這裡
│  │     └─ weather/
│  │        └─ route.ts
│  ├─ components/
│  │  ├─ common/
│  │  ├─ weather/
│  │  ├─ forms/
│  │  └─ layout/
│  ├─ features/
│  │  └─ weather/
│  │     ├─ components/
│  │     │  ├─ SearchBar.tsx
│  │     │  ├─ SearchBar.styles.ts
│  │     │  └─ ...
│  │     ├─ hooks/
│  │     ├─ services/
│  │     ├─ types/
│  │     └─ utils/
│  ├─ lib/
│  │  ├─ fetcher.ts
│  │  ├─ constants.ts
│  │  └─ env.ts
│  ├─ types/
│  │  └─ weather.ts
│  ├─ hooks/
│  ├─ utils/
│  └─ styles/
│     ├─ variables.css
│     └─ theme.css
├─ .env.local
├─ next.config.ts
├─ tsconfig.json
├─ package.json
└─ README.md
```

### 結構說明

- `src/app/`
  - Next.js App Router 頁面與路由入口，`globals.css` 僅保留 reset/base
- `src/components/`
  - 可重用 UI 元件
- `src/features/weather/`
  - 依功能拆分，集中天氣查詢相關邏輯與元件樣式 (`*.styles.ts`)
- `src/lib/`
  - 共用工具：fetcher、環境變數、常數
- `src/types/`
  - 共用型別定義
- `src/utils/`
  - 純函式工具
- `public/`
  - 靜態資源，如圖示、背景圖、天氣 icon

### 建議頁面切分

- `page.tsx`
  - 主畫面：城市輸入、查詢結果、狀態顯示
- 若未來增加頁面：
  - `history/`：查詢紀錄
  - `favorites/`：收藏城市
  - `settings/`：單位、語言、主題設定

---

## 4. Coding Rules（React + TypeScript 最佳實踐）

### React 原則

- 一個元件只負責一件事
- 優先拆成小元件，避免單檔過大
- 不要把資料處理、API 邏輯、UI 呈現全部塞在同一個元件
- 若元件需要大量邏輯，先抽成 hook 或 service

### TypeScript 原則

- 所有 API response 都要明確定義型別
- 避免使用 `any`
- 儘量使用 `unknown` 搭配型別守衛或 schema 驗證
- Props 與 state 都應明確標註型別
- 優先定義 domain type，例如：`WeatherData`、`WeatherStatus`、`CityQueryResult`

### Component Rules

- 元件名稱使用 PascalCase
- 檔名與元件名稱盡量一致
- Props 物件命名清楚，避免縮寫過度
- 需要共用的 UI 元件放在 `components/common`
- 天氣功能專屬元件放在 `features/weather/components`
- 元件樣式與元件共同放置，命名為 `ComponentName.styles.ts`

### State Rules

- 本地 UI 狀態：使用 `useState`
- 複雜表單：可使用 `useReducer` 或表單函式庫
- 資料抓取狀態：建議集中在 hook / service，不要散落在頁面中
- 可衍生資料用 `useMemo`，避免重複計算
- 事件處理函式用 `useCallback` 不是必要，但若有 props 傳遞或效能考量可使用

### Rendering Rules

- 能在 Server Component 處理的資料，盡量不要提前轉成 Client Component
- 只有需要互動的區塊才標記為 `use client`
- 顯示內容前先處理空值與資料缺失情況
- 不要假設 API 回來的欄位一定存在

### Error Safety

- 任何可能失敗的流程都要有錯誤 UI
- 不要讓 API 錯誤直接造成整頁崩潰
- 對於 loading / empty / error 要有明確區分

---

## 5. API Rules（fetch / error handling）

### API 呼叫原則

- API 呼叫應集中在 `service` 或 `fetcher` 層
- 不要把 fetch 直接散落在多個元件裡
- 所有 API URL、key、timeout、預設參數集中管理
- 使用環境變數管理敏感資訊

### fetch 規範

建議建立統一的 fetch helper，例如：

- 統一處理 base URL
- 統一處理 headers
- 統一處理 timeout（若需要）
- 統一處理 HTTP error
- 統一解析 JSON

### Error Handling 原則

- HTTP status 非 2xx 時要視為失敗
- API response 格式錯誤也要視為失敗
- 顯示對使用者友善的訊息，不直接曝露原始錯誤內容
- 開發模式可額外輸出 log 便於除錯

### 建議錯誤分類

- `NetworkError`：無法連線、DNS、CORS、timeout
- `HttpError`：400 / 401 / 403 / 404 / 500 等
- `ParseError`：response 格式不正確
- `ValidationError`：資料欄位缺失或型別不符

### 建議回傳格式

若有內部 API route 或 service wrapper，建議統一格式：

```ts
type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: { message: string; code?: string } };
```

### 天氣 API 使用注意

- 城市名稱要先 trim
- 對空字串做前置檢查
- 必要時加上國家或地區限制，避免同名城市混淆
- 若 API 有單位參數（攝氏 / 華氏），需由設定統一管理
- 若 API 回傳天氣 icon code，需在前端建立對照表或轉換函式

---

## 6. Naming Convention

### 檔名規則

- React 元件：`PascalCase.tsx` 或依專案慣例使用 `kebab-case`，但需全專案一致
- 工具函式：`camelCase.ts`
- 型別檔：`weather.ts`、`api.ts`、`common.ts`
- Next.js 預設檔名：`page.tsx`、`layout.tsx`、`loading.tsx`、`error.tsx`

### 變數命名

- 一般變數、函式：`camelCase`
- 常數：`UPPER_SNAKE_CASE`
- 型別、介面：`PascalCase`
- 布林值：用可讀語意，例如 `isLoading`、`hasError`、`isSubmitting`

### 元件命名

- 顯示元件：`WeatherCard`、`SearchBar`、`TemperatureBadge`
- 容器元件：`WeatherSearchPanel`
- 狀態元件：`WeatherLoadingState`、`WeatherErrorState`

### 資料欄位命名

- 對外 API 欄位若是 snake_case，進入應用後建議轉成 camelCase
- 內部 domain model 一律使用 camelCase

---

## 7. UI Rules（天氣 app 常見設計）

### 視覺風格

- 乾淨、清楚、偏資訊導向
- 天氣主題色可依狀態變化：晴天偏藍／黃、雨天偏灰／藍、多雲偏中性色
- 盡量避免過多裝飾，重點放在資訊可讀性

### 版面設計

- 首屏先顯示搜尋框
- 結果區域需明顯聚焦「城市名稱」、「即時溫度」、「天氣狀態」
- 使用卡片式區塊呈現主要資訊
- Mobile-first，桌機上可增加左右分欄或卡片排列

### 資訊層級

1. 城市名稱
2. 目前氣溫
3. 天氣狀態
4. 補充資訊（若未來有加入風速、濕度、體感溫度）

### 狀態 UI

- Loading：可使用 skeleton 或簡潔 loading text
- Empty：提示使用者輸入城市名稱
- Error：顯示可理解的錯誤訊息與重試按鈕
- Success：清楚展示查詢結果

### 互動規則

- Enter 可直接送出查詢
- 查詢中避免重複送出
- 錯誤後保留使用者輸入內容
- 若城市查詢失敗，保留最後一次成功結果或清楚標示失敗狀態，避免畫面空白

### 無障礙與可讀性

- 按鈕與輸入框要有清楚 label
- 色彩對比需足夠
- 狀態資訊不要只靠顏色辨識
- 天氣 icon 應有 alt 或輔助文字

---

## 8. State Management（如果需要）

### 建議使用策略

對於這個專案，若功能保持在「查詢單一城市天氣 + 顯示結果」的範圍內，優先使用本地 state 即可，不一定需要大型 state manager。

### 適合使用 `useState` 的情況

- 輸入框值
- loading 狀態
- 查詢結果
- 錯誤訊息
- 選擇的單位（攝氏 / 華氏）

### 適合抽 hook 的情況

- 查詢邏輯複雜
- 需要重試、取消請求、快取結果
- 需要將狀態與 UI 拆離

例如：

- `useWeatherQuery()`
- `useCitySearch()`

### 何時考慮全域 state

如果未來加入以下功能，才建議使用全域 state 或 query cache：

- 收藏城市
- 最近查詢紀錄
- 多頁共享天氣狀態
- 使用者設定（單位、語言、主題）
- 自動更新與背景輪詢

### 可選工具

- React Context：適合少量全域設定
- Zustand：輕量、簡潔，適合 UI state
- TanStack Query / SWR：適合 server state、快取、重新抓取

### 建議原則

- UI state 與 server state 分開
- 不要把 API response 長期複製到多個地方
- 能由 query cache 管理的資料，不要再自己重造一套 cache

---

## 9. Notes（最佳實務）

### 架構最佳實務

- 先做清楚的資料流：輸入 → 驗證 → 請求 → 解析 → 顯示
- API、型別、UI 分層處理
- 類似邏輯不要重複寫多次
- 保持目錄小而清晰，避免一開始就過度抽象

### 開發最佳實務

- 每個 API response 都要有對應型別
- 重要的型別與常數集中管理
- 不要把樣式與商業邏輯寫在同一個區塊
- 不要將功能樣式堆疊在 `globals.css`，全域樣式檔僅保留 reset/base
- 新增功能前先確認是否會影響既有查詢流程

### 維護最佳實務

- 優先建立可讀性高的命名
- 資料格式轉換最好集中在一個層級
- 錯誤訊息要能幫助使用者理解問題，而不是只給技術代碼
- 若未來接入多個天氣 API，請建立統一的 domain model，避免 UI 依賴供應商格式

### 效能與體驗

- 避免不必要的重複請求
- 可使用 debounce 改善即時搜尋體驗（若未來加入自動完成）
- 圖片 / icon 使用適當尺寸與載入策略
- 查詢結果可考慮快取最近數次搜尋，提升體驗

### 安全與環境

- API Key 不可寫死在前端程式碼
- 敏感資料放在 `.env.local`
- 若外部 API 有速率限制，要設計好重試與節流
- 若使用第三方氣象服務，注意其授權與使用限制

---

## Appendix：Recommended Domain Types

```ts
export type WeatherStatus =
  | "clear"
  | "cloudy"
  | "rainy"
  | "snowy"
  | "stormy"
  | "foggy"
  | "unknown";

export interface WeatherData {
  city: string;
  temperature: number;
  status: WeatherStatus;
  description: string;
  updatedAt: string;
}

export interface WeatherSearchState {
  query: string;
  isLoading: boolean;
  error: string | null;
  data: WeatherData | null;
}
```

---

## Appendix：Recommended Feature Flow

1. 使用者輸入城市名稱
2. 前端先做基本驗證（非空、長度限制）
3. 呼叫天氣 API
4. 驗證 response
5. 映射成內部 WeatherData 型別
6. 顯示溫度與天氣狀態
7. 若失敗，顯示友善錯誤與重試

---

## Final Reminder

這份 `ai-context.md` 的目標是成為專案的 AI 開發上下文規範：

- 讓人可以快速理解專案架構
- 讓 AI 在產出程式碼時遵守一致規則
- 讓未來擴充新功能時，不破壞既有結構

---

# AI EXECUTION RULES (CRITICAL)

When generating code, you MUST follow these rules:

## General

- ALWAYS read this ai-context before coding
- ALWAYS follow folder structure strictly
- NEVER create random files outside defined structure

## Component Design

- MUST split components if file > 150 lines
- MUST separate UI and logic (use hooks or services)
- MUST NOT put API calls directly inside UI components

## Data Flow

- API → service → hook → component
- NEVER skip layers

## Type Safety

- MUST define types for all API responses
- MUST NOT use `any`

## Error Handling

- MUST handle:
  - loading
  - empty
  - error

## Reusability

- If code is repeated twice → MUST refactor

## Naming

- MUST follow naming convention exactly

---

# AI DECISION GUIDE

When implementing features:

## When to create a new component

- If UI block is reusable → create component
- If JSX > 30 lines → split

## When to create a hook

- If logic involves:
  - API call
  - state management
  - reuse across components

## When to use service

- All API calls MUST go into services

## When to use client component

- ONLY if:
  - user interaction needed
  - uses state or event

## When unsure

- Choose simpler solution first
- Avoid over-engineering

---

# CODE OUTPUT RULES

When generating code:

- MUST show full file path
- MUST show complete file content
- MUST NOT output partial code

Example:

/src/components/WeatherCard.tsx

```tsx
// full code here
```

MUST explain what files were modified
