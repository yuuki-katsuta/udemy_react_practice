import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  //cssを適用させるときは、オブジェクト形式で記述してjsxで呼ぶ
  //jsx内に直接記述もできる(オブジェクト形式で)
  //変数名はキャメルケース、プロパティの値は文字列で記述

  //コンポーネントに状態をもたせたいときは、stateを定義
  //setNumはnumを変化させるための関数
  //0はnumの初期値
  //関数コンポーネントでstateを使うときはHooksを利用する
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
    //!で逆の意味になる
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setfaceShowFlag(true);
      //faceShowFlagがfalseのとき右側が実行される
    } else {
      faceShowFlag && setfaceShowFlag(false);
      //faceShowFlagがtrueのとき右側が実行される
    }
    //faceShowFlagがtrueのとき<p>タグ内が表示される
  }, [num]);
  console.log(faceShowFlag);
  //numをもたせることで、numの値が変化したときだけ処理を走らせることができる
  //よって、onClickSwitchShowFlagメソッドを走らせても、useEffect内には干渉しないので正常に動く
  //空の配列を渡すことで、最初の一回のみ実行される

  return (
    <>
      <h1 style={{ color: "red" }}>おはよう</h1>
      <ColorfulMessage color="blue" message="はなはなマロン" />
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlag}>表示・非表示</button>
      <button onClick={onClickCountUp}>カウントアップ</button>
      {faceShowFlag && <p>(´・ω・`)</p>}
    </>
  );
};
//faceShowFlagがtrueのとき<p>タグ内が表示される

//コンポーネントはタグで囲って、その中身を記述して表すこともできる
//その中身を表示したいときは、子のコンポーネント側でprops.childrenを使用

export default App;
