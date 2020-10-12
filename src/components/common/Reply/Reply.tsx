import React, { FC, useState } from "react";
import "./Reply.css";

import ReplyWriterInfo from "./components/ReplyWriterInfo";
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
  const { name, createdDate, contents, score, id, newsId } = reply;

  return (
    <div className="Reply">
      <ReplyWriterInfo
        id={id}
        date={createdDate}
        name={name}
        rir={replyInReply}
        setRir={setReplyInReply}
      />
      <ReplyContents
        id={id}
        contents={contents}
        score={score}
        newsId={newsId}
      />
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
