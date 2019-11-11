# Avengers Assemble!

Hahow Frontend Engineer 徵才小專案

Get started: https://marvel-hero-list.firebaseapp.com

![](https://i.imgur.com/WRu8POf.jpg)

## 技術列表

- React
- React Router
- Redux
- Styled Component
- Firebase Hosting
- RWD
- Webpack
- Babel

## 主要畫面

**1. Home Page**

![](https://i.imgur.com/kGKdLKS.jpg)

**2. Hero List Page**

![](https://i.imgur.com/PX2smb1.jpg)

**3. Hero Profile Page**

![](https://i.imgur.com/WRu8POf.jpg)

**4. Not Found Page**

![](https://i.imgur.com/BXowf4N.jpg)

## 更多說明

**1. 我們該如何執行完成的 package**

1. 在專案開始前，會先在專案資料夾中，初始化 package，進而新增「package.json」與「package-lock.json」兩個儲存所有 Dependencies 的空間，並且會將專案的 name、version、main 等等資訊記錄下來。

```
npm init
```

2. 專案執行時，可以使用 install 的指令，將需要的 Dependencies 下載，並記錄在「package.json」與「package-lock.json」檔案 。

```
npm install
```

2. 專案執行過程中，可在「package.json」中的 script 寫下不同命令，定義專案的程式會如何執行。如：可以在 script 中加入「start」屬性，後面若放入「"webpack-dev-server --open"」，就可以在 command line 中，透過下 `npm run start`指令，用 local server 將專案 run 起來，其他的 watch、build 也可以自行彈性定義。

```
npm run start
npm run watch
npm run build
```

**2. 專案的架構，Web 的架構邏輯**

- 專案架構
  ![](https://i.imgur.com/bDhA1fw.jpg)

- 在 src 下，會將各程式內容歸納清楚於不同的資料夾，而在 component 中又可以細分為「頁面規模」的 component 與「物件規模」的 componen，如此一來便能方便找尋，也可以將 component 達到最小模組化。

- Web 架構
  ![](https://i.imgur.com/dPfCCmz.png)

- 使用者進入網站時，會先看見 Home Page，按下 start the game 按鈕後，則會自動導向到網址 /heroes，進入 HeroList 分頁。
- 點擊任一 Hero Card 後會導到 /heroes/:heroId 的分頁，此時畫面中會顯示出 HeroList 與該專屬的 HeroProfile。
- 若途中有任何一次更改 URL，自行定義 URL 後方的 query string，則會顯示出 NotFound Page。

**3. 你對於所有使用到的第三方 library 的理解，以及他們的功能簡介**

- Dependencies

  - react
    提供 react 的 API 供專案使用
    前端框架之一，強調邏輯、資料（state）與使用者介面（UI）互相影響的關係，與其將技術拆開，把標籤語法跟邏輯拆放於不同檔案之中，React 關注點是將其拆分為很多同時包含 UI 與邏輯的 component，而彼此之間很少互相依賴。
  - react-router-dom
    react-router-dom 提供了 BrowserRouter, Route, Link 等 API，讓我們可以通過 DOM 事件控制 router，並呈現出 URL 對應的 UI。
  - react-redux
    Golbal State 的管理工具，可以有效解決 React component 中，上下傳遞 state 的複雜流程，將資訊存在 store 中，搭配 action、reducer 等概念做使用。
  - axios
    Axios 是一個以 Promise 為基礎的 AJAX 套件，用於瀏覽器及 node.js 的 HTTP Client.

- DevDependencies
  - webpack
    一個「打包工具」，將眾多模組與資源打包成一包檔案，並編譯我們需要預先處理的內容，變成瀏覽器看得懂的東西，讓我們可以上傳到伺服器。
  - babel
    JacaScript 編譯器，可幫我們把較新版本的 JavaScript （如 ES6）轉譯成瀏覽器可讀懂、兼容的版本，用在 react 中主要可以轉譯 JSX。
  - eslint
    一種 lint tool，提示開發者撰寫程式碼的風格維持一致、提升品質，也可以讓開發者自行定義程式碼的撰寫規則。
  - css-loader、file-loader、style-loader
    css-loader 是用來把 css 語法轉成 webpack 看的懂的 javascript 語法，而 style-loader 是用來把 webpack 處理好的 css 樣式注入在 style tag 裡，最後達成 css 樣式附加到 DOM 上。

**4. 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解**

- 當邏輯比較複雜，或是解法較不常見，但可以有效減少程式量時，就會寫上註解，幫助自己與 code reviewer 能更快了解某片段程式碼的意義。
- 使用 styled-component 時，因為與 component 開頭相近（const...），因此會在上面標明「// Styled-components」與「XXX Component」，讓閱讀 code 的人可以更快了解到其內容是什麼。

**5. 在這份專案中你遇到的困難、問題，以及解決的方法**

- "Hero Card" 連結會連到單一 Hero 的 "Hero Profile Page" ，"Hero List" 依然在相同位置，並且不因切換連結重新 render。
  - 問題：因為之前的專案經驗都是換一個 router，全部 UI 直接換成其他 component，沒有做過切割畫面的概念，因此不知道該如何著手。
  - 解決的方法：上網查詢官方文件、研究網路上的 source code 與影片。
