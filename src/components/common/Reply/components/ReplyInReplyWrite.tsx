import React, { FC, useState } from "react";

import axios from "axios";

import ReplyWrite from "../../../common/ReplyWrite/ReplyWrite";

import { useSelector } from "react-redux";
import { RootState } from "../../../../modules";

interface ReplyInReply {
  userUuid: string;
  type: string;
  contents: string;
  newsId: string;
  parents: string;
}

interface Props {
  id: string;
  newsId: string;
  setRir: Function;
  tog: Function;
}
const ReplyInReplyWrite: FC<Props> = ({ id, setRir, newsId, tog }: Props) => {
  const [value, setValue] = useState("");
  const { uuid } = useSelector((state: RootState) => state.user);

  async function saveReply() {
    const replyData: ReplyInReply = {
      userUuid: uuid,
      type: "default",
      contents: value,
      newsId: newsId,
      parents: id,
    };
    const url = `${process.env["REACT_APP_API_SERVER"]}/v1/news/reply`;
    await setValue("");
    await axios.post(url, JSON.stringify(replyData));
    await setRir(false);
    await tog();
  }
  return (
    <div className="ReplyInReplyWrite">
      <ReplyWrite
        setValue={setValue}
        clickFunc={saveReply}
        value={value}
        activate={value.length > 0}
      />
    </div>
  );
};

export default ReplyInReplyWrite;
