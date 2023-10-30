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
  top: 250px;
  left: 21%;
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

`;

function TodoModal(props) {

  const { id, text, date, checked, onAmend, modal, handleModal, onModal } = props;
  const [amendText, setAmendText] = useState('');

  useEffect(() => {
    setAmendText( modal && modal[0].text);
  }, [modal]);

  // const handleChange = () => {
  //   setAmendText( modal && modal[0].text);
  // };

  // const [ onModal, setOnModal] = useState(true);

	// const handleModal = () => {
	// 	setOnModal(false);
	// };

  const handleSubmit = (e) => {
    e.prventDefault();
  };



  return (
    <TodoModalWrapper onSubmit={handleSubmit}>
      <TodoModalTop>
        <p className='top-title'>수정하기</p>
      </TodoModalTop>
      <TodoModalContent>
        <TodoModalTitle value={amendText} />
      </TodoModalContent>
      <CloseButton type='submit' onClick={handleModal}>저장</CloseButton>
    </TodoModalWrapper>
  );
}

export default TodoModal;