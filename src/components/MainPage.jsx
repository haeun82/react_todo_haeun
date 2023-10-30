import React from 'react';
import styled from 'styled-components';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoMainWrapper = styled.div`
	width: 500px;
	margin: 0 auto;
	background: #fff;
  box-shadow: 5px 5px 5px #b9b5bd;
  min-height: 700px;
	max-height: 1000px;
	overflow-y: auto;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
`;


function MainPage(props) {
  const { todoLists, onAdd, onRemove, onCheck, onAmend, modal } = props;
	return (
		<TodoMainWrapper>
			<TodoInput onAdd={onAdd}></TodoInput>
      <TodoList 
				todoLists={todoLists} 
				onRemove={onRemove} 
				onCheck={onCheck}
				onAmend={onAmend}
				onAdd={onAdd}
				modal={modal}
		></TodoList>
		</TodoMainWrapper>
	);
}

export default MainPage;