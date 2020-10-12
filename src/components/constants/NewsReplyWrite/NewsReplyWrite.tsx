import React, { FC, useState } from "react";
import "./NewsReply.css";

import axios from "axios";

import { useSelector } from "react-redux";
import { RootState } from "../../../modules";

import NewsReplySelect from "./NewsReplySelect";
import NewsReplyTitle from "./NewsReplyTitle";
import NewsReplyLink from "./NewsReplyLink";
import Reply from "../../common/ReplyWrite/ReplyWrite";

export enum Types {
  DEFAULT = "default",
  TITLE = "title",
  LINK = "link",
}

interface DefaultReply {
  userUuid: string;
  type: Types;
  contents: string;
  newsId: string;
  name: string;
}

interface Props {
  newsId: string;
  setReply: Function;
  reply: number;
}

const NewsReplyWrite: FC<Props> = ({ newsId, reply, setReply }: Props) => {
  const [value, setValue] = useState("");
  const [type, setType] = useState<Types>(Types.DEFAULT);

  const { uuid, name } = useSelector((state: RootState) => state.user);

  async function saveReply() {
    const replyData: DefaultReply = {
      userUuid: uuid,
      type: Types.DEFAULT,
      contents: value,
      newsId: newsId,
      name: name,
    };
    const url = `${process.env["REACT_APP_API_SERVER"]}/v1/news/reply`;
    await setValue("");
    await axios.post(url, JSON.stringify(replyData));
    await setType(Types.DEFAULT);
    await setReply(reply + 1);
  }

  return (
    <div className="NewsReply">
      <span className="title">댓글 작성</span>
      <NewsReplySelect setType={setType} />
      {type === Types.DEFAULT && (
        <Reply
          setValue={setValue}
          clickFunc={saveReply}
          value={value}
          activate={value.length > 0}
        />
      )}
      {type === Types.TITLE && (
        <NewsReplyTitle
          uuid={uuid}
          newsId={newsId}
          setType={setType}
          setReply={setReply}
          reply={reply}
          name={name}
        />
      )}
      {type === Types.LINK && (
        <NewsReplyLink
          uuid={uuid}
          newsId={newsId}
          setType={setType}
          setReply={setReply}
          reply={reply}
          name={name}
        />
      )}
    </div>
  );
};

export default NewsReplyWrite;
