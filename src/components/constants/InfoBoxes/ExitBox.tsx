import React, { FC } from "react";
import "./InfoBoxes.css";

import axios from "axios";

import { useCookies } from "react-cookie";

import { useDispatch } from "react-redux";
import { logoutUser } from "../../../modules/user";

const ExitBox: FC = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    `${process.env["REACT_APP_COOKIE_NAME"]}`,
  ]);

  const dispatch = useDispatch();

  const doLogoutUser = () => {
    dispatch(logoutUser());
  };

  async function exit() {
    if (window.confirm("정말로 탈퇴하시겠습니까?")) {
      const url = `${process.env["REACT_APP_API_SERVER"]}/v1/auth`;
      const { data, status } = await axios.delete(url);
      alert(data);
      console.log(status);
      if (status === 200) {
        await removeCookie(`${process.env["REACT_APP_COOKIE_NAME"]}`, {
          path: "/",
        });
        axios.defaults.headers.common["Authorization"] = null;
        await doLogoutUser();
        window.location.reload();
      }
    }
  }

  return (
    <div className="TextBox">
      <div className="ExitBox" onClick={() => exit()}>
        탈퇴하기
      </div>
    </div>
  );
};

export default ExitBox;
