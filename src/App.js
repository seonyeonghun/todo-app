import React, { useState } from "react"; // useState 모듈 불러오기

import "./App.css";

function App() {
  const [todo, setTodo] = useState([]); // todo 라는 state, setTodo라는 modifiter 함수
  const [todos, setTodos] = useState([]); //todos 라는 state(=할일모음), setTodos라는 modifier 함수
  const onChange = (e) => setTodo(e.target.value); // 입력폼 데이터를 state에 등록
  const onSubmit = (e) => {
    e.preventDefault(); // form 새로고침 방지
    setTodo(""); // 할일 입력폼 초기화
    setTodos(todos => [...todos, todo]); // state는 새로운 값으로만 변경 가능, ES6 구조분해할당 문법
  };
  const removeTodo = (id) => setTodos(todos.filter((todo, i) => i !== id));
  return (
    <div className='App'>
      <h1>todo app</h1>

      <div className='input-field'>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='오늘의 할일을 등록해보세요'
            onChange={onChange}
            value={todo}
            autoFocus
          />

          <button>등록</button>
        </form>
      </div>

      <div className='output-field'>
        <ul>
        {todos.map((todo, i) => <li key={i}>{todo} <button onClick={() => removeTodo(i)}>&times;</button></li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
