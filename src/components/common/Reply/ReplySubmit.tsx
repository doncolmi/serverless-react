import React, { FC } from "react";
import "./Reply.css";

import NormalText from "../../common/Text/NormalText";

interface Props {
  onClick: Function;
}

const ReplySubmit: FC<Props> = ({ onClick }: Props) => {
  return (
    <div className="ReplySubmit" onClick={() => onClick()}>
      <span className="LightText">
        <i className="fas fa-pen-square"></i> 댓글 작성
      </span>
    </div>
  );
};

export default ReplySubmit;
