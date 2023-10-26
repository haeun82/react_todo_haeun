import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import MainPage from './components/page/MainPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
