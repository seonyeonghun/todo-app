import React, { Fragment } from "react";

function Input({ onSubmit, onChange, todo }) {
  return (
    <Fragment>
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
    </Fragment>
  );
}
export default Input;
