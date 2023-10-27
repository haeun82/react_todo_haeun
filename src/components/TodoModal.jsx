import React from 'react';
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

`;

function TodoModal(props) {
  console.log(props); 

  const { todoList:{id, text, date, checked}, setOnModal, onModal } = props;

  return (
    <TodoModalWrapper>
      <TodoModalTop>
        <p className='top-title'>내용 수정하기</p>
      </TodoModalTop>
      <TodoModalTitle>{text}</TodoModalTitle>
    </TodoModalWrapper>
  );
}

export default TodoModal;