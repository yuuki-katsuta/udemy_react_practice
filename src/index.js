import React from "react";
import ReactDom from "react-dom";
import App from "./App";

//return内が複数行のときは（）で囲う
//不要なタグがレンダリングされるのでReact.Fragmentで囲うとエラー回避できる

ReactDom.render(<App />, document.getElementById("root"));
//root配下にAppコンポーネントを表示するという意味
