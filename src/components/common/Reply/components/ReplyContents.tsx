import React, { FC } from "react";

import ReplyUpdown from "./ReplyUpdown";

interface Props {
  id: string;
  contents: string;
  score: number;
  newsId: string;
}

const ReplyContents: FC<Props> = ({ id, contents, score, newsId }: Props) => {
  return (
    <div className="ReplyContents">
      <div className="contents">{contents}</div>
      <ReplyUpdown id={id} score={score} newsId={newsId} />
    </div>
  );
};

export default ReplyContents;
