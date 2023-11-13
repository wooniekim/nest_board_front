import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main_screen";
import Login from "./pages/login_screen";
import Register from "./pages/register_screen";
import ViewPost from "./pages/view_post_screen";
import WritePost from "./pages/write_post";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/viewpost/:id" element={<ViewPost />} />
      <Route path="/writepost" element={<WritePost />} />
    </Routes>
  );
}

export default App;
