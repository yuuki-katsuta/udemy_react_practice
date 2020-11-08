import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  //inputの入力値
  const [todoText, setTodoText] = useState("");

  //未完了
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  //console.log(incompleteTodos); //["あああ", "いいい"]
  //incompleteTodosの初期値を配列で表した

  //完了
  const [completeTodos, setCompleteTodos] = useState(["ううう"]);

  const onChangeTodoText = (e) => {
    //eはイベントオブジェクト
    setTodoText(e.target.value);
    //e.target.valueで入力内容を取得できる
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText]; //配列のマージ
    //現在の未完了todoの配列を展開し、入力値のtodoTextとマージさせた
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  //削除ボタン
  const onClickDelete = (index) => {
    //削除するときは何番目の（どの）要素を削除するのかがわからなくてはならない
    //そのためにindexを引数に渡す
    const newTodos = [...incompleteTodos];
    //...で参照を引き継がない形で展開させた
    newTodos.splice(index, 1);
    //undexが０なら配列の０番目から一つ削除するということ
    setIncompleteTodos(newTodos);
  };

  //完了ボタン
  const onClickComplete = (index) => {
    //削除と同じく配列からその要素を消す
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    //未完了のリストへ追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    //削除された要素はincompleteTodos[index]で表せる
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <div>
      <div className="input-area">
        <input
          placeholder="todoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            //indexで何番目が押されたかを判定
            return (
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
