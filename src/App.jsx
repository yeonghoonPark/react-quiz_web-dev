import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Notice from "./components/Notice";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notice' element={<Notice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
