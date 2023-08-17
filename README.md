# ultra-button

## 🎨1.
这个库的名字叫做ultra-button，本意是希望提供一些有意思的按钮样式。
<br>
The name of this project is ultra button, and the original intention is to provide some interesting button styles.
<br>
<br>
这个库创建于2023年8月17日晚。
当时的目的是练习，如何打包发布到npm。
目前短期内没有维护的计划，不过欢迎交流，右上角是GitHub仓库链接。
<br>
This project was created on the evening of August 17, 2023.
The purpose at that time was to practice how to package and publish to NPM.
There are currently no plans to continue maintenance in the short term, 
but welcome to communicate. The GitHub warehouse link is located in the upper right corner.

## 💡2.docs 
[https://ultra-button-docs.pages.dev](https://ultra-button-docs.pages.dev)

## 🛠️3.How To Start

### 3.1. Installation

```shell
npm i ultra-button
```

### 3.2. Import

```js
import { createApp } from 'vue'
import UltraButton from 'ultra-button'
import '../node_modules/ultra-button/ultra-button.css'
import App from './App.vue'

const app = createApp(App)
app.use(UltraButton);
app.mount('#app')
```
