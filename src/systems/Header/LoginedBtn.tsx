import React, { FC } from "react";
import "./Header.css";

import HeaderButton from "../../components/constants/Button/HeaderButton";

import { useCookies } from "react-cookie";

import { useDispatch } from "react-redux";
import { setUserInfo } from "../../modules/user";
import { iUser } from "../../modules/interfaces/iUser";

interface Props {
  name: string;
}

const LoginedBtn: FC<Props> = ({ name }: Props) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    `${process.env["REACT_APP_COOKIE_NAME"]}`,
  ]);

  const dispatch = useDispatch();

  const doSetUserInfo = (user: iUser) => {
    dispatch(setUserInfo(user));
  };

  const logoutData: iUser = {
    isLogin: false,
    uuid: "",
    name: "",
    createdDate: new Date(),
    isChangeName: false,
    isViewReply: false,
  };

  async function logout() {
    await removeCookie(`${process.env["REACT_APP_COOKIE_NAME"]}`, {
      path: "/",
    });
    await doSetUserInfo(logoutData);
    window.location.reload();
  }

  return (
    <>
      <span className="nickName">
        <span>{name}</span> 님, 반갑습니다!
      </span>
      <HeaderButton
        text="로그아웃"
        func={() => {
          logout();
        }}
      />
    </>
  );
};

export default LoginedBtn;
