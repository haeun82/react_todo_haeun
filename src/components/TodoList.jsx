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
  const { todoLists, onRemove, onCheck,  onAdd, modal, onEdit, onClick, editTodo, onModal } = props;

  // const activeTodoList = todoLists.filter(todoList => todoList.checked === false);
  // const DoneTodoList = todoLists.filter(todoList => todoList.checked === true );

  return (
    <TodoListWrapper>
      {todoLists.map((todoList) => {
        return <TodoListItem 
        key={todoList.id} 
        todoList={todoList} 
        onRemove={onRemove} 
        onCheck={onCheck} 
        onAdd={onAdd}
        modal={modal}
        onEdit={onEdit}
        editTodo={editTodo}
        onModal={onModal}
        />
      })}
      {/* {activeTodoList.map(() => {
        return <TodoListItem />
      })} */}
    </TodoListWrapper>
  );
}

export default TodoList;