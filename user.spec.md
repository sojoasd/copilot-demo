# 使用者管理 API 規格書

## 簡介
使用者管理系統是一個基於 Node.js 和 Express 框架的 RESTful API，使用 TypeScript 開發，提供使用者的查詢、新增、刪除和修改功能。使用者資料將儲存在記憶體中的 JSON 檔案中，並使用依賴注入 (DI) 進行管理。

---

## API 路由
所有 API 路徑的基礎路徑為 `/api/user`。

---

## 資料結構
### 使用者物件
```json
{
  "id": "number",          // 使用者唯一識別碼 (自動生成)
  "name": "string",        // 使用者名稱 (必填)
  "createdAt": "string"    // 建立日期 (格式: YYYY-MM-DD, 自動生成)
}
```

---

## API 詳細規格

### 1. 查詢使用者列表
**描述**: 獲取所有使用者的列表。

- **方法**: `GET`
- **路徑**: `/api/user`
- **請求參數**: 無
- **回應**:
  - **狀態碼**: `200 OK`
  - **內容**:
    ```json
    [
      {
        "id": "number",
        "name": "string",
        "createdAt": "string"
      }
    ]
    ```

---

### 2. 查詢單一使用者
**描述**: 根據使用者 ID 獲取使用者的詳細資訊。

- **方法**: `GET`
- **路徑**: `/api/user/:id`
- **請求參數**:
  - `id` (路徑參數): 使用者的唯一識別碼
- **回應**:
  - **狀態碼**: `200 OK`
  - **內容**:
    ```json
    {
      "id": "number",
      "name": "string",
      "createdAt": "string"
    }
    ```
  - **錯誤**:
    - **狀態碼**: `404 Not Found`
    - **內容**:
      ```json
      { "error": "User not found" }
      ```

---

### 3. 新增使用者
**描述**: 新增一位使用者。

- **方法**: `POST`
- **路徑**: `/api/user`
- **請求 Body**:
  ```json
  {
    "name": "string"
  }
  ```
- **回應**:
  - **狀態碼**: `201 Created`
  - **內容**:
    ```json
    {
      "id": "number",
      "name": "string",
      "createdAt": "string"
    }
    ```
  - **錯誤**:
    - **狀態碼**: `400 Bad Request`
    - **內容**:
      ```json
      { "error": "Invalid input data" }
      ```

---

### 4. 修改使用者
**描述**: 修改一位使用者的資訊。

- **方法**: `PUT`
- **路徑**: `/api/user/:id`
- **請求參數**:
  - `id` (路徑參數): 使用者的唯一識別碼
- **請求 Body**:
  ```json
  {
    "name": "string"
  }
  ```
- **回應**:
  - **狀態碼**: `200 OK`
  - **內容**:
    ```json
    {
      "id": "number",
      "name": "string",
      "createdAt": "string"
    }
    ```
  - **錯誤**:
    - **狀態碼**: `404 Not Found`
    - **內容**:
      ```json
      { "error": "User not found" }
      ```
    - **狀態碼**: `400 Bad Request`
    - **內容**:
      ```json
      { "error": "Invalid input data" }
      ```

---

### 5. 刪除使用者
**描述**: 刪除一位使用者。

- **方法**: `DELETE`
- **路徑**: `/api/user/:id`
- **請求參數**:
  - `id` (路徑參數): 使用者的唯一識別碼
- **回應**:
  - **狀態碼**: `204 No Content`
  - **錯誤**:
    - **狀態碼**: `404 Not Found`
    - **內容**:
      ```json
      { "error": "User not found" }
      ```

---

## 錯誤處理
- **400 Bad Request**: 用於無效的輸入資料。
- **404 Not Found**: 用於找不到指定的資源。
- **500 Internal Server Error**: 用於伺服器內部錯誤。

---

## 開發技術要求
- 使用 Node.js 和 Express 框架，使用 TypeScript 開發，在 /src 目錄下建立一個專案目錄。
- 專案目錄名稱為 `user-web-api`。
- 使用 tsyringe 套件執行依賴注入 (DI) 管理使用者資料。
- 使用者資料儲存在記憶體中的 JSON 檔案中。
- 嚴格遵循 RESTful API 設計原則。
