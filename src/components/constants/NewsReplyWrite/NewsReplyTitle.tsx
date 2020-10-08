import React, { FC, useState } from "react";
import "./NewsReply.css";

import axios from "axios";

import Reply from "../../common/ReplyWrite/ReplyWrite";

import { Types } from "./NewsReplyWrite";

interface NewsReply {
  userUuid: string;
  type: Types;
  contents: string;
  newsId: string;
  item: string;
}
interface Props {
  uuid: string;
  newsId: string;
  setType: Function;
  setReply: Function;
  reply: number;
}

const NewsReplyTitle: FC<Props> = ({
  uuid,
  newsId,
  setType,
  setReply,
  reply,
}: Props) => {
  const [item, setItem] = useState("");
  const [value, setValue] = useState("");

  const placeholder = "건의할 제목을 적어주세요.";

  const itemHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem(event.target.value);
  };

  async function saveReply() {
    const replyData: NewsReply = {
      userUuid: uuid,
      type: Types.TITLE,
      contents: value,
      newsId: newsId,
      item: item,
    };
    const url = `${process.env["REACT_APP_API_SERVER"]}/v1/news/reply`;
    await setValue("");
    await axios.post(url, JSON.stringify(replyData));
    await setType(Types.DEFAULT);
    await setReply(reply + 1);
  }

  return (
    <>
      <input
        type="text"
        className="NewsReplyTitleInput"
        placeholder={placeholder}
        onChange={itemHandleChange}
      />
      <Reply
        setValue={setValue}
        clickFunc={saveReply}
        value={value}
        activate={item.length > 0 && value.length > 0}
      />
    </>
  );
};

export default NewsReplyTitle;
