import React, { FC } from "react";
import "./Reply.css";

import ReplyForm from "./ReplyForm";
import ReplySubmit from "./ReplySubmit";

interface Props {
  setValue: Function;
  submit: Function;
  activate: boolean;
}

const Reply: FC<Props> = ({ setValue, submit, activate }: Props) => {
  return (
    <div className="Reply">
      <ReplyForm placeholder="댓글 테스트" setValue={setValue} rows={4} />
      <ReplySubmit onClick={submit} active={activate} />
    </div>
  );
};

export default Reply;
