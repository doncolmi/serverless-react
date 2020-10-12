import React, { FC } from "react";

interface Props {
  rir: boolean;
  setRir: Function;
}

const ReplyInReplyBtn: FC<Props> = ({ rir, setRir }: Props) => {
  return (
    <span className="ReplyInReplyBtn" onClick={() => setRir(!rir)}>
      <i className="fas fa-reply"></i>
    </span>
  );
};

export default ReplyInReplyBtn;
