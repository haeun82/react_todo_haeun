import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset, { Reset } from "styled-reset";
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import MainPage from './components/MainPage';
import { useEffect, useRef, useState } from 'react';

const GlobalStyle = createGlobalStyle`
  /* reset css */
  ${reset}

  /* 글로벌(공통) 스타일 */
  body {
    background: #eeeeee;
  }
`;

const MainTitleText = styled.p`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 20px;
`;


function App() {
  const today = new Date();
  const nowYear = today.getFullYear();
  const nowMonth = today.getMonth(); 
  const nowDate = today.getDate();
  const date = `${nowYear}-${(nowMonth + 1)}-${nowDate}`;

  const [todoLists, setTodoLists] = useState([
    {
      id: 1,
      text: 'todolist 완성하기',
      date,
      checked: false
    },
    {
      id: 2,
      text: '강의 듣기',
      date,
      checked: true
    },
    {
      id: 3,
      text: 'router 연습',
      date,
      checked: false
    }
  ]);

  useEffect(() => {
    localStorage.getItem('todoLists', JSON.stringify(todoLists));
  }, [todoLists]);

  // 추가
  const nextId = useRef(4);
  const handleAdd = (text) => {
    const todoList = {
      id: uuidv4(),
      text,
      date,
      checked: false
    }

    setTodoLists([...todoLists,todoList]);
    nextId.current += 1; 
  };

  // 삭제
  const handleRemove = (id) => {
    setTodoLists(todoLists.filter(todoList => todoList.id !== id));
  };

  // 체크박스 
  const handleCheckBox = (id) => {
    setTodoLists(todoLists.map(todoList => todoList.id === id ? { ...todoList, checked: !todoList.checked } : todoList));
  };

  // 수정버튼
  const [ modal, setModal ] = useState('');
  const handleAmend = (id) => {
    setModal(todoLists.filter(todoList => todoList.id === id));
    console.log(setModal);
  };

  return (
    <>
      <GlobalStyle />
      <MainTitleText>TODO LIST📌</MainTitleText>
      <MainPage 
        todoLists={todoLists} 
        onAdd={handleAdd} 
        onRemove={handleRemove} 
        onCheck={handleCheckBox} 
        onAmend={handleAmend}
        modal={modal}
      />
    </>
    
  );
}

export default App;
