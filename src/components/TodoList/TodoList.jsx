import React from 'react';

import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">

      {todos.map(todo => (
        <TodoInfo todo={todo} key={todo.id} />
      ))}

    </section>
  );
};
