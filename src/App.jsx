import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./layouts/Home";
import Quiz from "./layouts/Quiz";
import Ranking from "./layouts/Ranking";
import Notice from "./layouts/notice/Notice";
import NoticeWrite from "./layouts/notice/NoticeWrite";
import Login from "./layouts/Logins";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/ranking' element={<Ranking />} />
          <Route path='/notice' element={<Notice />} />
          <Route path='/notice/write' element={<NoticeWrite />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
