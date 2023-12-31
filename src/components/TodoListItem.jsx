import React, { useState } from 'react';
import { MdCheckCircle, MdCheckCircleOutline, MdCreate, MdRemoveCircleOutline } from "react-icons/md";
import styled, { css } from 'styled-components';
import TodoModal from './TodoModal';

const TodoListItemWrapper = styled.div`
	padding: 1rem;
	display: flex;
	align-items: center;
`;

const CheckBox = styled.div`
  display: flex;
	align-items: center;
	cursor: pointer;

	svg {
		/* 아이콘 스타일링 */
		font-size: 1.5rem;

		/* 체크됐을 때 보여질 스타일 */
		color: ${props => props.checked && '#fdaaaa'};
  }
`;

const Text = styled.div`
	margin-left: 0.5rem;
	flex: 1; 
	display: flex;
	justify-content: space-between;

	/* 체크됐을 때 보여줄 스타일 */
	${props => props.checked &&
		css`
			color: #adb5bd;
			text-decoration: line-through;
		`
	}
`;

const DateText = styled.span`
	font-size: 14px;
	margin-right: 10px;
`;

const ChangeContent = styled.div`
  display: flex;
	align-items: center;
	font-size: 1.5rem;
  color: #777;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    color: #313131;
  }
`;

const Remove = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	color: #ff1d1d;
	cursor: pointer;

	&:hover {
		color: #e70000;
	}
`;

function TodoListItem(props) {

  const { todoList:{id, text, date, checked}, onRemove, onCheck,  onAdd, modal, onClick, onEdit, editTodo, onModal } = props;
const [ showModal, setShowModal] = useState(false);

const handleModal = () => {
    setShowModal(!showModal);
    onEdit(editTodo.text);
	};

  return (
    <TodoListItemWrapper>
      <CheckBox checked={checked} onClick={() => { onCheck(id) }} >
        {checked ? <MdCheckCircle /> : <MdCheckCircleOutline />}
      </CheckBox>
      <Text checked={checked}>
				{text}
				<DateText>{date}</DateText>
			</Text>
      <ChangeContent>
        <MdCreate  onClick={() => { onModal(id); }}/>
      </ChangeContent>
      <Remove onClick={() => { onRemove(id) }}>
        <MdRemoveCircleOutline />
      </Remove>

			{/* {onModal && 
			<TodoModal 
				onAdd={onAdd} 
				// onAmend={onAmend} 
				id={id} 
				text={text} 
				date={date} 
				checked={checked} 
				modal={modal} 
				handleModal={handleModal}
				onModal={onModal}
				setOnModal={setOnModal}
				onEdit={onEdit}
				// onClick={onClick}
        editTodo={editTodo}

				/>} */}
    </TodoListItemWrapper>
  );
}

export default TodoListItem;