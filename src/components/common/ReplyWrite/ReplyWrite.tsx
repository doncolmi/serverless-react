import React, { FC } from "react";
import "./ReplyWrite.css";

import ReplyForm from "./ReplyForm";
import ReplySubmit from "./ReplySubmit";

interface Props {
  setValue: Function;
  clickFunc: Function;
  activate: boolean;
  value: any;
}

const Reply: FC<Props> = ({ setValue, value, clickFunc, activate }: Props) => {
  return (
    <div className="ReplyWrite">
      <ReplyForm
        placeholder="악성코드나 광고를 포함한 댓글은 통보없이 삭제됩니다."
        value={value}
        setValue={setValue}
        rows={4}
      />
      <ReplySubmit clickFunc={clickFunc} active={activate} />
    </div>
  );
};

export default Reply;
