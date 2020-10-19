import axios from "axios";
import React, { FC, useState } from "react";

import ReplyUpdown from "./ReplyUpdown";
import ReplyItem from "./ReplyItem";

import { useSelector } from "react-redux";
import { RootState } from "../../../../modules";

import ReplyWrite from "../../../common/ReplyWrite/ReplyWrite";

interface ModifyReply {
  userUuid: string;
  contents: string;
  replyId: string;
}

interface Props {
  reply: any;
  isModify: boolean;
  setIsModify: Function;
  tog: Function;
}

const ReplyContents: FC<Props> = ({
  reply,
  isModify,
  setIsModify,
  tog,
}: Props) => {
  const { id, contents, score, type, item, userUuid } = reply;
  const { uuid } = useSelector((state: RootState) => state.user);
  const [value, setValue] = useState(contents);

  async function modifyReply() {
    const replyData: ModifyReply = {
      userUuid: uuid,
      contents: value,
      replyId: id,
    };
    const url = `${process.env["REACT_APP_API_SERVER"]}/v1/news/reply`;
    try {
      const { data } = await axios.patch(url, JSON.stringify(replyData));
      await setValue(contents);
      alert(data);
      await setIsModify(!isModify);
    } catch (e) {
      await setValue(contents);
      alert("댓글 수정 실패!");
    }

    await tog();
  }

  return (
    <div className="ReplyContents">
      <ReplyItem type={type} item={item} />
      {isModify ? (
        <ReplyWrite
          setValue={setValue}
          clickFunc={modifyReply}
          value={value}
          activate={value.length > 0}
        />
      ) : (
        <div className="contents">{contents}</div>
      )}
      <ReplyUpdown id={id} score={score} userId={userUuid} />
    </div>
  );
};

export default ReplyContents;
