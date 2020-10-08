import React, { FC, useState } from "react";
import "./NewsReply.css";

import axios from "axios";

import { useSelector } from "react-redux";
import { RootState } from "../../../modules";

import NewsReplySelect from "./NewsReplySelect";
import NewsReplyTitle from "./NewsReplyTitle";
import Reply from "../../common/Reply/Reply";

export enum Types {
  DEFAULT = "default",
  TITLE = "title",
  LINK = "link",
  FAKE = "fake",
}

interface DefaultReply {
  userUuid: string;
  type: Types;
  contents: string;
  newsId: string;
}

interface Props {
  newsId: string;
}
const NewsReply: FC<Props> = ({ newsId }: Props) => {
  const [value, setValue] = useState("");
  const [type, setType] = useState<Types>(Types.DEFAULT);

  const { uuid } = useSelector((state: RootState) => state.user);

  async function saveReply() {
    console.log("클릭클릭");
    const replyData: DefaultReply = {
      userUuid: uuid,
      type: Types.DEFAULT,
      contents: value,
      newsId: newsId,
    };
    const url = `${process.env["REACT_APP_API_SERVER"]}/v1/news/reply`;
    const save = await axios.post(url, JSON.stringify(replyData));
    console.log(save);
  }

  return (
    <div className="NewsReply">
      <NewsReplySelect setType={setType} />
      {type === Types.DEFAULT && (
        <Reply
          setValue={setValue}
          submit={saveReply}
          activate={value.length > 0}
        />
      )}
      {type === Types.TITLE && <NewsReplyTitle />}
      {type === Types.LINK && <></>}
      {type === Types.FAKE && <></>}
    </div>
  );
};

export default NewsReply;
