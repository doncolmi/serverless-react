import React, { FC } from "react";
import "./NewsDetail.css";

import IconButton from "../../common/Button/IconButton";

const NewsReqBtn: FC = () => {
  return (
    <div className="NewsReqBtn">
      <span className="LightText">
        앞으로 <b>13</b>명이 추천하면 기사 내용을 가져옵니다.
      </span>
      <IconButton icon="fas fa-hand-holding" text="기사 내용을 가져와주세요!" />
    </div>
  );
};

export default NewsReqBtn;
