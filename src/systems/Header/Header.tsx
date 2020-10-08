import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import { useSelector } from "react-redux";
import { RootState } from "../../modules";

import LoginedBtn from "./LoginedBtn";
import LoginBtn from "./LoginBtn";

const Header: FC = () => {
  const state = useSelector((state: RootState) => state.user);

  return (
    <div className="Header">
      <Link to="/" className="hideHref linkFlex">
        <div className="HeaderTitle">사이트이름</div>
      </Link>
      <div className="HeaderBar">
        {state.isLogin ? <LoginedBtn name={state.name} /> : <LoginBtn />}
      </div>
    </div>
  );
};

export default Header;
