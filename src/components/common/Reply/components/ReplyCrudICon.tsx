import React, { FC } from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import { RootState } from "../../../../modules";

interface DeleteReply {
  userUuid: string;
  replyId: string;
}

interface Props {
  isModify: boolean;
  id: string;
  setIsModify: Function;
  tog: Function;
}

const ReplyCrudICon: FC<Props> = (Props) => {
  const { uuid } = useSelector((state: RootState) => state.user);

  const { isModify, setIsModify, tog, id } = Props;
  async function deleteReply() {
    if (window.confirm("정말 댓글을 삭제하시겠습니까?")) {
      const url = `${process.env["REACT_APP_API_SERVER"]}/v1/news/reply/${id}`;
      try {
        const { data } = await axios.delete(url);
        alert(data);
      } catch (e) {
        alert("삭제 실패!");
      }
      await tog();
    }
  }
  return (
    <>
      <span className="modifyIcon" onClick={() => setIsModify(!isModify)}>
        <i className="fas fa-pen"></i>
      </span>
      <span onClick={() => deleteReply()}>
        <i className="fas fa-trash"></i>
      </span>
    </>
  );
};

export default ReplyCrudICon;
