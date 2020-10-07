import React, { FC } from "react";
import "./Detail.css";

import LightText from "../../common/Text/LightText";

interface Props {
  reply: number;
}

const DetailReplyReq: FC<Props> = ({ reply }: Props) => {
  return (
    <div className="DetailReplyReq">
      <span className="icon">
        <i className="fas fa-comment-dots"></i>
      </span>
      {reply > 0 ? (
        <LightText text={`${reply}개의 댓글을 확인하시려면 눌러주세요!`} />
      ) : (
        <LightText text={`댓글이 없습니다!`} />
      )}
    </div>
  );
};

export default DetailReplyReq;
