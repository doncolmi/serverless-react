import React, { FC, useState } from "react";

import axios from "axios";

import TextBox from "../../components/constants/InfoBoxes/TextBox";
import ChangeBox from "../../components/constants/InfoBoxes/ChangeBox";
import ExitBox from "../../components/constants/InfoBoxes/ExitBox";

import { useCookies } from "react-cookie";

import { useSelector } from "react-redux";
import { RootState } from "../../modules";

import { useDispatch } from "react-redux";
import { logoutUser } from "../../modules/user";

const SysInfo: FC = () => {
  const [value, setValue] = useState("");
  const { name, createdDate, modifiedDate, isChangeName } = useSelector(
    (state: RootState) => state.user
  );

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

  async function isChange(value: string) {
    if (
      window.confirm(`
        현재 닉네임 : ${name}
        변경될 닉네임 : ${value}
        위 사항을 확인하셨습니까?
        `)
    ) {
      await changeName(value);
    }
  }

  async function changeName(value: string) {
    try {
      const regExp = /^[가-힣a-zA-Z0-9]{2,8}$/;
      if (regExp.test(value)) {
        const getUrl = `${process.env["REACT_APP_API_SERVER"]}/v1/auth/name?name=${value}`;
        const { data } = await axios.get(getUrl);
        if (data) {
          const patchUrl = `${process.env["REACT_APP_API_SERVER"]}/v1/auth/name`;
          const updateName = await axios.patch(
            patchUrl,
            JSON.stringify({ name: value })
          );
          alert(updateName.data);
          logout();
        } else {
          alert(`중복된 닉네임입니다. `);
        }
      } else {
        alert(`닉네임은 2~8자 사이의 한글,영어,숫자만 사용하실 수 있습니다.`);
      }
    } catch ({ response }) {
      if (response.status === 406) {
        alert("닉네임 변경은 3개월 마다 가능합니다.");
      } else {
        alert("잘못된 접근입니다.");
      }
    }
  }
  return (
    <>
      <TextBox name="닉네임" contents={name} />
      <ChangeBox
        value={value}
        setValue={setValue}
        modifiedDate={modifiedDate}
        isChangeName={isChangeName}
        func={() => isChange(value)}
      />
      <TextBox name="가입 날짜" contents={createdDate.toLocaleString()} />
      <ExitBox />
    </>
  );
};

export default SysInfo;
