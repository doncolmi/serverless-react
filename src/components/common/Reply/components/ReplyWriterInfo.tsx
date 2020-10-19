import React, { FC } from "react";
import "../Reply.css";

import { simpleDate } from "../../../../util/Date/simpleDate";

import { useSelector } from "react-redux";
import { RootState } from "../../../../modules";

import ReplyInReplyBtn from "./ReplyInReplyBtn";
import ReplyCrudIcon from "./ReplyCrudICon";

interface Props {
  reply: any;
  rir: boolean;
  setRir: Function;
  tog: Function;
  isModify: boolean;
  setIsModify: Function;
}

const ReplyWriterInfo: FC<Props> = (Props) => {
  const { reply, rir, setRir, tog, setIsModify, isModify } = Props;
  const { isLogin, uuid } = useSelector((state: RootState) => state.user);
  const { name, createdDate, id, isSelection, userUuid } = reply;
  return (
    <div className="WriterInfo">
      {isSelection ? (
        <span>
          <i className="fas fa-medal"></i>&nbsp;
        </span>
      ) : (
        <></>
      )}
      <span className="WriterName">{name}</span>
      <span className="WriteTime"> · {simpleDate(createdDate)}</span>
      {userUuid === uuid && (
        <div className="replyBtns">
          <ReplyCrudIcon
            isModify={isModify}
            setIsModify={setIsModify}
            id={id}
            tog={tog}
          />
        </div>
      )}
      {isLogin && (
        <div className="replyBtns">
          <span className="WriterReport">
            <i className="fas fa-bullhorn"></i>
          </span>
          <ReplyInReplyBtn rir={rir} setRir={setRir} />
        </div>
      )}
    </div>
  );
};

export default ReplyWriterInfo;
