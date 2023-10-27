import React, { useState } from 'react';
import styled from 'styled-components';
import swal from 'sweetalert';
import TodoList from './TodoList';

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

function TodoInput({ onAdd }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
		setValue(e.target.value);
	};

  const hanldeSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      swal('일정을 입력해야 등록이 가능합니다. 일정을 등록해주세요!');
      return
    }

    onAdd(value);
    setValue('');
  };

	return (
		<InputWarrper onSubmit={hanldeSubmit}>
			<InputText
        placeholder='일정을 입력해주세요'
        value={value}
        onChange={handleChange}
      ></InputText>
      <InputTextButton type='submit' >저장</InputTextButton>
		</InputWarrper>
	);
}

export default TodoInput;