import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import "./styles.css";

export const App = () => {
  //inputの入力値
  const [todoText, setTodoText] = useState("");

  //未完了
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  //console.log(incompleteTodos); //["あああ", "いいい"]
  //incompleteTodosの初期値を配列で表した

  //完了
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => {
    //eはイベントオブジェクト
    setTodoText(e.target.value);
    //e.target.valueで入力内容を取得できる
  };

  //追加
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

  const onClickReturn = (index) => {
    //削除と同じく配列からその要素を消す
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
    //未完了へ戻す
    const newTodos = [...incompleteTodos, completeTodos[index]];
    //戻されたtodoはcompleteTodos[index]で表せる
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 10}
        //incompleteTodos.length >= 5 でtrueかfalseを渡せる
      />
      {incompleteTodos.length >= 5 && (
        //左側がtrueなら右を返す
        <p style={{ color: "red" }}>todoがたまってきたね〜</p>
      )}
      {incompleteTodos.length >= 10 && (
        //左側がtrueなら右を返す
        <p style={{ color: "red" }}>登録できるtodoは10個までだよ〜</p>
      )}
      <IncompleteTodos
        Todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
      />
    </>
  );
};
