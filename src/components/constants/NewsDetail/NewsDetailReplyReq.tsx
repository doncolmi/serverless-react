import React, { FC } from "react";
import "./NewsDetail.css";

import LightText from "../../common/Text/LightText";

interface Props {
  reply: number;
  setIsView: Function;
}

const DetailReplyReq: FC<Props> = ({ reply, setIsView }: Props) => {
  async function showReply() {
    await setIsView(true);
  }

  if (reply > 0) {
    return (
      <div onClick={showReply} className="DetailReplyReq">
        <span className="icon">
          <i className="fas fa-comment-dots"></i>
        </span>
        <LightText text={`${reply}개의 댓글을 확인하시려면 눌러주세요!`} />
      </div>
    );
  } else {
    return (
      <div className="DetailReplyReq">
        <span className="icon">
          <i className="fas fa-comment-dots"></i>
        </span>
        <LightText text={`댓글이 없습니다!`} />
      </div>
    );
  }
};

export default DetailReplyReq;
