import React, { Fragment } from "react";

function Output({ todos, removeTodo }) {
  return (
    <Fragment>
      <div className='output-field'>
        <ul className='lists'>
          {todos.map((todo, i) => (
            <li key={i}>
              {todo} <button onClick={() => removeTodo(i)}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default Output;
