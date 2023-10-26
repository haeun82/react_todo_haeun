import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
function TodoList(props) {
  const { todos } = props;
  console.log(todos);
  return (
    <TodoListWrapper>
      {todos.map((todo, index) => {
        return <TodoListItem key={todo.id} todo={todo} />
      })}
    </TodoListWrapper>
  );
}

export default TodoList;