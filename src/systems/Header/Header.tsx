import React, { FC } from "react";
import "./Header.css";

import LoginBtn from "./LoginBtn";

const Header: FC = () => {
  return (
    <div className="Header">
      <div className="HeaderTitle">사이트이름</div>
      <div className="HeaderBar">
        <LoginBtn />
      </div>
    </div>
  );
};

export default Header;
