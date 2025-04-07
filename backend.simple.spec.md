# 書本管理 API 規格書

## 簡介
書本管理系統是一個基於 Node.js 和 Express 框架的 RESTful API，使用 TypeScript 開發，提供書本的查詢、新增、刪除和修改功能。書本資料將儲存在記憶體中的 JSON 檔案中，並使用依賴注入 (DI) 進行管理。

---

## API 路由
所有 API 路由的基礎路徑為 `/api/book`。

---

## 資料結構
### 書本物件
```json
{
  "id": "string",          // 書本唯一識別碼 (自動生成)
  "title": "string",       // 書名 (必填)
  "author": "string",      // 作者 (必填)
  "publishedDate": "string", // 出版日期 (格式: YYYY-MM-DD, 必填)
  "price": "number",       // 價格 (正整數, 必填)
  "category": "string"     // 類別 (必填, 預定義選項)
}
```

### 預定義類別
- 文學
- 科學
- 歷史
- 技術
- 其他

---

## API 詳細規格

### 1. 查詢書本列表
**描述**: 獲取所有書本的列表。

- **方法**: `GET`
- **路徑**: `/api/book`
- **請求參數**: 無
- **回應**:
  - **狀態碼**: `200 OK`
  - **內容**:
    ```json
    [
      {
        "id": "string",
        "title": "string",
        "author": "string",
        "publishedDate": "string",
        "price": "number",
        "category": "string"
      }
    ]
    ```

---

### 2. 查詢單一本書
**描述**: 根據書本 ID 獲取書本的詳細資訊。

- **方法**: `GET`
- **路徑**: `/api/book/:id`
- **請求參數**:
  - `id` (路徑參數): 書本的唯一識別碼
- **回應**:
  - **狀態碼**: `200 OK`
  - **內容**:
    ```json
    {
      "id": "string",
      "title": "string",
      "author": "string",
      "publishedDate": "string",
      "price": "number",
      "category": "string"
    }
    ```
  - **錯誤**:
    - **狀態碼**: `404 Not Found`
    - **內容**:
      ```json
      { "error": "Book not found" }
      ```

---

### 3. 新增書本
**描述**: 新增一本書。

- **方法**: `POST`
- **路徑**: `/api/book`
- **請求 Body**:
  ```json
  {
    "title": "string",
    "author": "string",
    "publishedDate": "string",
    "price": "number",
    "category": "string"
  }
  ```
- **回應**:
  - **狀態碼**: `201 Created`
  - **內容**:
    ```json
    {
      "id": "string",
      "title": "string",
      "author": "string",
      "publishedDate": "string",
      "price": "number",
      "category": "string"
    }
    ```
  - **錯誤**:
    - **狀態碼**: `400 Bad Request`
    - **內容**:
      ```json
      { "error": "Invalid input data" }
      ```

---

### 4. 修改書本
**描述**: 修改一本書的資訊。

- **方法**: `PUT`
- **路徑**: `/api/book/:id`
- **請求參數**:
  - `id` (路徑參數): 書本的唯一識別碼
- **請求 Body**:
  ```json
  {
    "title": "string",
    "author": "string",
    "publishedDate": "string",
    "price": "number",
    "category": "string"
  }
  ```
- **回應**:
  - **狀態碼**: `200 OK`
  - **內容**:
    ```json
    {
      "id": "string",
      "title": "string",
      "author": "string",
      "publishedDate": "string",
      "price": "number",
      "category": "string"
    }
    ```
  - **錯誤**:
    - **狀態碼**: `404 Not Found`
    - **內容**:
      ```json
      { "error": "Book not found" }
      ```
    - **狀態碼**: `400 Bad Request`
    - **內容**:
      ```json
      { "error": "Invalid input data" }
      ```

---

### 5. 刪除書本
**描述**: 刪除一本書。

- **方法**: `DELETE`
- **路徑**: `/api/book/:id`
- **請求參數**:
  - `id` (路徑參數): 書本的唯一識別碼
- **回應**:
  - **狀態碼**: `204 No Content`
  - **錯誤**:
    - **狀態碼**: `404 Not Found`
    - **內容**:
      ```json
      { "error": "Book not found" }
      ```

---

## 錯誤處理
- **400 Bad Request**: 用於無效的輸入資料。
- **404 Not Found**: 用於找不到指定的資源。
- **500 Internal Server Error**: 用於伺服器內部錯誤。

---

## 開發技術要求
- 使用 Node.js 和 Express 框架，在 /src 目錄下建立一個專案。
- 使用 TypeScript 開發。
- 使用依賴注入 (DI) 管理書本資料。
- 書本資料儲存在記憶體中的 JSON 檔案中。
- 嚴格遵循 RESTful API 設計原則。
