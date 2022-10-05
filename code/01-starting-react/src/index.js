import React from "react";
import ReactDOM from "react-dom/client";

/* 
원래 css파일은 js파일에 불러와 사용할 수 없지만, 처음 react를 소개한 내용처럼 
react는 html, css, js를 모아서 하나의 컴포넌트를 만들기 때문에 js파일에 css를 불러올 수 있는 기능이 있는 것이다.

index.js가 처음 실행되는 파일인 만큼 전역적으로 적용할 css파일은 index.css에 저장하여 index.js로 불러와 사용해야한다. (reset, font-family, body style 등등..)
*/
import "./index.css";

// .js는 생략하는 것이 맞다.(붙혀도 된다.)
import App from "./App";

// createRoot => 메인 React Application을 index.html의 root id와 맵핑하여 어디에 react 웹페이지를 렌더링할지 결정하는 Hook
// 즉, index.html과 index.js를 맵핑시켜서 root 객체를 생성한다.
const root = ReactDOM.createRoot(document.getElementById("root"));

// root 객체에 render 메서드를 사용하여 index.html에 직접 렌더링할 컴포넌트를 추가한다.
// 직접 렌더링 되는 것은 App.js의 컴포넌트 뿐이다.
root.render(<App />);

// react를 실행시 가장 처음 변환되어 실행되는 코드 => index.js
//
