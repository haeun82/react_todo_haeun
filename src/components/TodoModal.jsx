import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TodoModalWrapper = styled.div`
  width: 500px;
	margin: 0 auto;
	background: #fff;
  box-shadow: 5px 5px 5px #b9b5bd;
  min-height: 500px;
	max-height: 700px;
	overflow-y: auto;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TodoModalTop = styled.div`
  width: 100%;
  height: 30px;
  background: #fdaaaa;

  .top-title {
    font-size: 25px;
    color: #fff;
    text-align: center;
  }
`;

const TodoModalContent = styled.div`
  width: 100%;
  height: 100%;
`;

const TodoModalTitle = styled.input`
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

const CloseButton = styled.button`
  cursor: pointer;
`;

function TodoModal(props) {

  const { id, text, date, checked, onAmend, modal, handleModal, onEdit, onChange } = props;
  const [amendText, setAmendText] = useState(text);


  const handleChange = (e) => {
    setAmendText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.prventDefault();
    
  };


  // const handleSaveText = (e) => {
  // };


  return (
    <TodoModalWrapper onSubmit={handleSubmit}>
      <TodoModalTop>
        <p className='top-title'>수정하기</p>
      </TodoModalTop>
      <TodoModalContent>
        <TodoModalTitle 
          type='text'
          value={amendText} 
          onChange={handleChange}
        />
      </TodoModalContent>
      <CloseButton 
        type='submit' 
        onClick={handleModal}
      >저장</CloseButton>
    </TodoModalWrapper>
  );
}

export default TodoModal;