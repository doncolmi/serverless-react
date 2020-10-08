import React, { FC } from "react";
import "./Reply.css";

interface Props {
  active: boolean;
  onClick: Function;
}

const ReplySubmit: FC<Props> = ({ active, onClick }: Props) => {
  if (active) {
    return (
      <div className="ReplySubmit" onClick={onClick()}>
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
