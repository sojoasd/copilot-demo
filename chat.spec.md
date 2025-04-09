# 聊天室管理 API 規格書

## 簡介
聊天室管理系統是一個基於 Node.js 和 Express 框架的 RESTful API，使用 TypeScript 開發，提供聊天室的查詢、新增、刪除和修改功能。聊天室資料將儲存在記憶體中的 JSON 檔案中，並使用依賴注入 (DI) 進行管理。

---

## API 路由
所有 API 路徑的基礎路徑為 `/api/chat`.

---

## 資料結構
### 聊天室物件
```json
{
  "id": "number",          // 聊天室唯一識別碼 (自動生成)
  "name": "string",        // 聊天室名稱 (必填)
  "createdAt": "string"    // 建立日期 (格式: YYYY-MM-DD, 自動生成)
}
```

---

## API 詳細規格

### 1. 查詢聊天室列表
**描述**: 獲取所有聊天室的列表。

- **方法**: `GET`
- **路徑**: `/api/chat`
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

### 2. 查詢單一聊天室
**描述**: 根據聊天室 ID 獲取聊天室的詳細資訊。

- **方法**: `GET`
- **路徑**: `/api/chat/:id`
- **請求參數**:
  - `id` (路徑參數): 聊天室的唯一識別碼
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
      { "error": "Chat not found" }
      ```

---

### 3. 新增聊天室
**描述**: 新增一個聊天室。

- **方法**: `POST`
- **路徑**: `/api/chat`
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

### 4. 修改聊天室
**描述**: 修改一個聊天室的資訊。

- **方法**: `PUT`
- **路徑**: `/api/chat/:id`
- **請求參數**:
  - `id` (路徑參數): 聊天室的唯一識別碼
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
      { "error": "Chat not found" }
      ```
    - **狀態碼**: `400 Bad Request`
    - **內容**:
      ```json
      { "error": "Invalid input data" }
      ```

---

### 5. 刪除聊天室
**描述**: 刪除一個聊天室。

- **方法**: `DELETE`
- **路徑**: `/api/chat/:id`
- **請求參數**:
  - `id` (路徑參數): 聊天室的唯一識別碼
- **回應**:
  - **狀態碼**: `204 No Content`
  - **錯誤**:
    - **狀態碼**: `404 Not Found`
    - **內容**:
      ```json
      { "error": "Chat not found" }
      ```

---

## 錯誤處理
- **400 Bad Request**: 用於無效的輸入資料。
- **404 Not Found**: 用於找不到指定的資源。
- **500 Internal Server Error**: 用於伺服器內部錯誤。

---

## 開發技術要求
- 使用 Node.js 和 Express 框架，使用 TypeScript 開發，在 /src 目錄下建立一個專案目錄。
- 專案目錄名稱為 `chat-web-api`。
- 使用 tsyringe 套件執行依賴注入 (DI) 管理聊天室資料。
- 聊天室資料儲存在記憶體中的 JSON 檔案中。
- 嚴格遵循 RESTful API 設計原則。