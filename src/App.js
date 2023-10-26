import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset, { Reset } from "styled-reset";
import styled from 'styled-components';

import MainPage from './components/MainPage';
import { useState } from 'react';

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
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'todolist 완성하기',
      date: new Date(),
      checked: false
    },
    {
      id: 2,
      text: '강의 듣기',
      checked: true
    },
    {
      id: 3,
      text: 'router 연습',
      checked: false
    }
  ]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <MainTitleText>TODO LIST📌</MainTitleText>
      <Routes>
        <Route path='/' element={<MainPage todos={todos} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
