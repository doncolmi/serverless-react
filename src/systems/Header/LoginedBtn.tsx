import React, { FC } from "react";
import "./Header.css";

import axios from "axios";

import HeaderButton from "../../components/constants/Button/HeaderButton";

import { useCookies } from "react-cookie";

import { useDispatch } from "react-redux";
import { logoutUser } from "../../modules/user";

interface Props {
  name: string;
}

const LoginedBtn: FC<Props> = ({ name }: Props) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    `${process.env["REACT_APP_COOKIE_NAME"]}`,
  ]);

  const dispatch = useDispatch();

  const doLogoutUser = () => {
    dispatch(logoutUser());
  };

  async function logout() {
    await removeCookie(`${process.env["REACT_APP_COOKIE_NAME"]}`, {
      path: "/",
    });
    axios.defaults.headers.common["Authorization"] = null;
    await doLogoutUser();
    window.location.reload();
  }

  return (
    <>
      <span className="nickName">
        <span>{name}</span> 님, 반갑습니다!
      </span>
      <div className="leftBox">
        <HeaderButton text="내 정보" href="/info" />
        <HeaderButton text="로그아웃" func={() => logout()} />
      </div>
    </>
  );
};

export default LoginedBtn;
