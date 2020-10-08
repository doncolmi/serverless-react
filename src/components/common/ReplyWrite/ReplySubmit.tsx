import React, { FC } from "react";
import "./ReplyWrite.css";

interface Props {
  active: boolean;
  clickFunc: Function;
}

const ReplySubmit: FC<Props> = ({ active, clickFunc }: Props) => {
  if (active) {
    return (
      <div className="ReplySubmit" onClick={() => clickFunc()}>
        <span className="LightText">
          <i className="fas fa-pen-square"></i> 댓글 작성
        </span>
      </div>
    );
  } else {
    return (
      <div className="ReplySubmit disabledSubmit">
        <span className="LightText">
          <i className="fas fa-pen-square"></i> 댓글 작성
        </span>
      </div>
    );
  }
};

export default ReplySubmit;
