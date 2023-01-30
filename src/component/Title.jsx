import React, { Fragment } from "react";

function Title({ todos }) {
  return (
    <Fragment>
      <h1>todo app ({todos.length})</h1>
    </Fragment>
  );
}

export default Title;
