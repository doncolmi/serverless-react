import React, { FC, useState } from "react";
import "./Reply.css";

import ReplyWriterInfo from "./components/ReplyWriterInfo";
import ReplyItem from "./components/ReplyItem";
import ReplyContents from "./components/ReplyContents";
import ReplyInReplyWrite from "./components/ReplyInReplyWrite";

import ReplyInReplyReq from "./ReplyInReplyReq";


interface Props {
  reply: any;
  rChildren: any;
  tog: Function;
}

const Reply: FC<Props> = ({ reply, rChildren, tog }: Props) => {
  const [isView, setIsView] = useState(false);
  const [replyInReply, setReplyInReply] = useState(false);
  const {id, newsId, isSelection} = reply;

  return (
    <div className={`Reply ${isSelection && "selected"}`} id={id}>
      <ReplyWriterInfo
        reply={reply}
        rir={replyInReply}
        setRir={setReplyInReply}
      />
      <ReplyContents reply={reply} />
      {replyInReply && (
        <ReplyInReplyWrite
          id={id}
          newsId={newsId}
          setRir={setReplyInReply}
          tog={tog}
        />
      )}
      <ReplyInReplyReq
        is={rChildren.length < 1}
        replys={rChildren}
        isView={isView}
        setIsView={setIsView}
      />
    </div>
  );
};

export default Reply;
