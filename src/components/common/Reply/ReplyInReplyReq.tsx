import React, { FC, useEffect } from "react";
import "./Reply.css";

import ReplyInReply from "./ReplyInReply";

interface Props {
  is: boolean;
  replys: any;
  isView: boolean;
  setIsView: Function;
}

const ReplyInReplyReq: FC<Props> = ({
  is,
  replys,
  isView,
  setIsView,
}: Props) => {
  useEffect(() => {}, [isView]);
  if (is) {
    return <div className="isEmpty"></div>;
  }
  if (isView) {
    return (
      <>
        <div className="isViewCheck" onClick={() => setIsView(false)}>
          ▲ 답글 감추기
        </div>
        {replys.map((reply: any) => (
          <ReplyInReply reply={reply} />
        ))}
      </>
    );
  } else {
    return (
      <div className="isViewCheck" onClick={() => setIsView(true)}>
        ▼ {replys.length}개의 답글 확인하기
      </div>
    );
  }
};

export default ReplyInReplyReq;
