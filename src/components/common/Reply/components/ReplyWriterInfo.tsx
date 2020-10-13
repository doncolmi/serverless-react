import React, { FC } from "react";
import "../Reply.css";

import { simpleDate } from "../../../../util/Date/simpleDate";

import { useSelector } from "react-redux";
import { RootState } from "../../../../modules";

import ReplyInReplyBtn from "./ReplyInReplyBtn";

interface Props {
  reply: any;
  rir: boolean;
  setRir: Function;
}

const ReplyWriterInfo: FC<Props> = ({ reply, rir, setRir }: Props) => {
  const { isLogin } = useSelector((state: RootState) => state.user);
  const { name, createdDate, id, isSelection } = reply
  return (
    <div className="WriterInfo">
      {isSelection && <span><i className="fas fa-medal"></i>&nbsp;</span>}
      <span className="WriterName">{name}</span>
      <span className="WriteTime"> · {simpleDate(createdDate)}</span> 
      {isLogin && <div className="replyBtns">
        <span className="WriterReport">
          <i className="fas fa-bullhorn"></i>
        </span>
        <ReplyInReplyBtn rir={rir} setRir={setRir} />
      </div>}
      
    </div>
  );
};

export default ReplyWriterInfo;
