import React, { FC } from "react";

import ReplyUpdown from "./ReplyUpdown";
import ReplyItem from "./ReplyItem";



interface Props {
  reply: any;
}

const ReplyContents: FC<Props> = ({ reply }: Props) => {
  const { id, contents, score, newsId, type, item, userUuid } = reply;
  return (
    <div className="ReplyContents">
        <ReplyItem type={type} item={item}/>
        <div className="contents">{contents}</div>
      <ReplyUpdown id={id} score={score} userId={userUuid}/>
    </div>
  );
};

export default ReplyContents;
