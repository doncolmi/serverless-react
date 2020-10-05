import React, { FC, useState } from "react";
import Modal from "react-modal";
import HeaderButton from "../../components/constants/Button/HeaderButton";

import KakaoLogin from "react-kakao-login";

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
          onSuccess={(result) => console.log(result)}
          onFailure={(result) => console.log(result)}
          useDefaultStyle={true}
          getProfile={false}
        />
      </Modal>
    </>
  );
};

export default LoginBtn;
