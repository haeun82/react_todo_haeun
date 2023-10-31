import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import swal from 'sweetalert';


// const TodoModalWrapper = styled.div`
//   width: 500px;
// 	margin: 0 auto;
// 	background: #fff;
//   box-shadow: 5px 5px 5px #b9b5bd;
//   min-height: 500px;
// 	max-height: 700px;
// 	overflow-y: auto;
//   border-radius: 10px;
//   padding: 10px;
//   box-sizing: border-box;
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

// const TodoModalTop = styled.div`
//   width: 100%;
//   height: 30px;
//   background: #fdaaaa;

//   .top-title {
//     font-size: 25px;
//     color: #fff;
//     text-align: center;
//   }
// `;

// const TodoModalContent = styled.div`
//   width: 100%;
//   height: 100%;
// `;

// const TodoModalTitle = styled.input`
//   width: 70%;
//   outline: none;
//   border: none;
//   font-size: 20px;
//   padding-left: 10px;
//   background-color: transparent;
//   border-bottom: 2px solid transparent;
//   transition: 0.3s; 

//   &:focus {
//     background-color: transparent;
//     border-bottom: 2px solid #fdaaaa;
//   }
// `;

// const CloseButton = styled.button`
//   cursor: pointer;
// `;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;

const ModalContainer = styled.div`
  width: 30rem;
  background: #fff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  overflow-y: overlay;

  svg {
    cursor: pointer;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    background: #fdaaaa;
  }
    .modal-title {
      font-weight: bold;
      text-align: center;
      color: #fff;
    }

  .body {
    padding: 1.25rem;
    font-size: 1rem;
    line-height: 1.125rem;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 20px;
  }
    button {
      font-size: 18px;
      padding: 3px 10px;
      background: #fdaaaa;
      outline: none;
      cursor: pointer;
      border: none;
      border-radius: 10px;
      color: #fff;
      /* font-weight: bold; */
    }
`;


function TodoModal(props) {

  const { id, text, date, checked, handleModal, onEdit, onClick, title, children, onCloseModal } = props;
  // const [amendText, setAmendText] = useState(text);
  

  // const handleChange = (e) => {
  //   setAmendText({
  //     ...amendText,
  //     text: e.target.value
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.prventDefault();
    
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!children) {
      swal('수정 내용 필요');
      return
    }
  };

  return (
    // <TodoModalWrapper onSubmit={handleSubmit} >
    //   <TodoModalTop>
    //     <p className='top-title'>수정하기</p>
    //   </TodoModalTop>
    //   <TodoModalContent>
    //     <TodoModalTitle 
    //       type='text'
    //       value={amendText.text} 
    //       onChange={handleChange}
    //       // onClick={onClick}
          
    //     />
    //   </TodoModalContent>
    //   <CloseButton 
    //     type='submit' 
    //     onClick={handleModal}
    //     onEdit={onEdit}
    //   >저장</CloseButton>
    // </TodoModalWrapper>


    <Background>
      <ModalContainer onChange={handleSubmit}>
        <div className="header">
          <span className="modal-title">일정 수정하기</span>
          <MdClose onClick={onCloseModal} />
        </div>
        {/* <hr /> */}
        <div className="body">{children}</div>
        <div className="footer">
          <button onClick={onEdit} type='submint'>확인</button>
        </div>
      </ModalContainer>
    </Background>
  );
}

export default TodoModal;