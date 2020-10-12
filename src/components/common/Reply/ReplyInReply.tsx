import React, { FC } from "react";
import "./Reply.css";

import { simpleDate } from "../../../util/Date/simpleDate";

interface Props {
  reply: any;
}

const ReplyInReply: FC<Props> = ({ reply }: Props) => {
  return (
    <div className="ReplyInReply">
      <div className="WriterInfo">
        <span className="RIRIcon">
          <i className="fas fa-reply"></i>
        </span>
        <span className="WriterName">{reply.name}</span>
        <span className="WriteTime"> · {simpleDate(reply.createdDate)} </span>
      </div>
      <div className="contents">{reply.contents}</div>
    </div>
  );
};

export default ReplyInReply;
