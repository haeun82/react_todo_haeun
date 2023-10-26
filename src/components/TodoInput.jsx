import React from 'react';
import styled from 'styled-components';

const InputWarrper = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const InputText = styled.input`
  width: 70%;
  outline: none;
  border: none;
  font-size: 20px;
  padding-left: 10px;
  background-color: transparent;
  border-bottom: 2px solid transparent;
  transition: 0.3s; 

  &:focus {
    background-color: transparent;
    border-bottom: 2px solid #fdaaaa;
  }
`;

const InputTextButton = styled.button`
  width: 20%;
  outline: none;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: bold;
  background: #fdaaaa;
  padding: 5px 0;
  color: #fff;
  cursor: pointer;
`;

function TodoInput(props) {
	return (
		<InputWarrper>
			<InputText
        placeholder='일정을 입력해주세요'
      ></InputText>
      <InputTextButton>저장</InputTextButton>
		</InputWarrper>
	);
}

export default TodoInput;