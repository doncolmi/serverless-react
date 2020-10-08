import React, { FC, useState } from "react";
import Modal from "react-modal";

import HeaderButton from "../../components/constants/Button/HeaderButton";

import KakaoLogin from "react-kakao-login";
import axios from "axios";

import { useCookies } from "react-cookie";

import { useDispatch } from "react-redux";
import { setUserInfo } from "../../modules/user";
import { iUser } from "../../modules/interfaces/iUser";

import Swal from "sweetalert2";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "20%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const LoginBtn: FC = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    `${process.env["REACT_APP_COOKIE_NAME"]}`,
  ]);

  const dispatch = useDispatch();

  const doSetUserInfo = (user: iUser) => {
    dispatch(setUserInfo(user));
  };

  const subtitle = {
    style: {
      color: "rgba(0,0,0,0.8)",
    },
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpen = () => {
    subtitle.style.color = "rgba(0,0,0,0.8)";
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSuccess = async (result: any) => {
    try {
      const url = `${process.env["REACT_APP_API_SERVER"]}/v1/auth/login`;
      const { access_token, refresh_token } = result.response;
      axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
      const response = await axios.get(url);
      const { status, data } = response;
      if (status === 201) {
        Swal.fire({
          icon: "success",
          title: "환영합니다!",
          text: `${data.name}님 반갑습니다. 닉네임은 가입 후 3일이 지나야 가능합니다!`,
        });
      }
      if (status === 201 || status === 200) {
        setCookie(`${process.env["REACT_APP_COOKIE_NAME"]}`, refresh_token, {
          path: "/",
        });
      }
      const userData: iUser = {
        isLogin: true,
        uuid: data.uuid,
        name: data.name,
        createdDate: new Date(data.createdDate),
        isChangeName: data.isChangeName,
        isViewReply: data.isViewReply,
      };
      await doSetUserInfo(userData);
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "로그인 실패",
        text: `서버에 문제가 있는거 같아요...`,
      });
    }
  };

  return (
    <>
      <HeaderButton text="로그인" func={openModal} />
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login Modal"
      >
        <KakaoLogin
          jsKey="78e803b681072f1e2ddb92d5853fe088"
          onSuccess={onSuccess}
          onFailure={(result) => console.log(result)}
          useDefaultStyle={true}
          getProfile={false}
        />
      </Modal>
    </>
  );
};

export default LoginBtn;
