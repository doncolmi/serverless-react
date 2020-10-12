import React, { FC } from "react";
import "../Reply.css";

import { simpleDate } from "../../../../util/Date/simpleDate";

import ReplyInReplyBtn from "./ReplyInReplyBtn";

interface Props {
  id: string;
  name: string;
  date: string;
  rir: boolean;
  setRir: Function;
}

const ReplyWriterInfo: FC<Props> = ({ name, date, id, rir, setRir }: Props) => {
  console.log(id);
  console.log(date);
  return (
    <div className="WriterInfo">
      <span className="WriterName">{name}</span>
      <span className="WriteTime"> · {simpleDate(date)}</span>
      <div className="replyBtns">
        <span className="WriterReport">
          <i className="fas fa-bullhorn"></i>
        </span>
        <ReplyInReplyBtn rir={rir} setRir={setRir} />
      </div>
    </div>
  );
};

export default ReplyWriterInfo;
