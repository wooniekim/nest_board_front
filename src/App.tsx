import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main_screen";
import Login from "./pages/login_screen";
import Register from "./pages/register_screen";
import ViewPost from "./pages/view_post_screen";
import WritePost from "./pages/write_post";
import UpdatePost from "./pages/update_post_screen";
import Game from "./pages/game_screen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/viewpost/:id" element={<ViewPost />} />
      <Route path="/writepost" element={<WritePost />} />
      <Route path="/updatepost/:id" element={<UpdatePost />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
