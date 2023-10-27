import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

// const ListTop = styled.div`
//   width: 100%;
//   height: 50%;
//   border-radius: 10px;
//   background: #eee;
// `;

function TodoList(props) {
  const { todoLists, onRemove, onCheck } = props;
  console.log(todoLists);
  return (
    <TodoListWrapper>
      {todoLists.map((todoList, index) => {
        return <TodoListItem key={todoList.id} todoList={todoList} onRemove={onRemove} onCheck={onCheck} />
      })}
    </TodoListWrapper>
  );
}

export default TodoList;