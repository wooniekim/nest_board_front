import React from "react";

import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>MAIN</h1>
      <p>메인스크린입니다.</p>
      <Link to="/login">Login</Link>
    </div>
  );
};
export default Main;
