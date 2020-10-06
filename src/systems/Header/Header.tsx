import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import LoginBtn from "./LoginBtn";

const Header: FC = () => {
  return (
    <div className="Header">
      <Link to="/" className="hideHref linkFlex">
        <div className="HeaderTitle">사이트이름</div>
      </Link>
      <div className="HeaderBar">
        <LoginBtn />
      </div>
    </div>
  );
};

export default Header;
