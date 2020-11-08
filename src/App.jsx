import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  //未完了
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  //console.log(incompleteTodos); //["あああ", "いいい"]
  //incompleteTodosの初期値を配列で表した

  //完了
  const [completeTodo, setCompleteTodos] = useState(["ううう"]);

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
            return (
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodo.map((todo, index) => {
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
