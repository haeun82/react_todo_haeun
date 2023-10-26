import React from 'react';
import { AiOutlineCheckCircle, BsFillCheckCircleFill, MdCheckCircle, MdCheckCircleOutline, MdCreate, MdRemoveCircleOutline } from "react-icons/md";
import styled, { css } from 'styled-components';

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

	/* 체크됐을 때 보여줄 스타일 */
	${props => props.checked &&
		css`
			color: #adb5bd;
			text-decoration: line-through;
		`
	}
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
  const {todo:{id, text, date, checked}} = props;
  return (
    <TodoListItemWrapper>
      <CheckBox checked={checked} >
        {checked ? <MdCheckCircle /> : <MdCheckCircleOutline />}
      </CheckBox>
      <Text checked={checked}>{text}</Text>
      <ChangeContent>
        <MdCreate />
      </ChangeContent>
      <Remove>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListItemWrapper>  
  );
}

export default TodoListItem;