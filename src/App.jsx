import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./layouts/Home";
import Quiz from "./layouts/Quiz";
import Rank from "./layouts/Rank";
import Notice from "./layouts/notice/Notice";
import NoticeDetail from "./layouts/notice/NoticeDetail";
import NoticeEdit from "./layouts/notice/NoticeEdit";
import NoticeWrite from "./layouts/notice/NoticeWrite";
import Login from "./layouts/Login";

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/ranking' element={<Rank />} />
          <Route path='/notice' element={<Notice />} />
          <Route path='/notice/write' element={<NoticeWrite />} />
          <Route path='/notice/detail/:uniqNo' element={<NoticeDetail />} />
          <Route path='/notice/detail/edit/:uniqNo' element={<NoticeEdit />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
