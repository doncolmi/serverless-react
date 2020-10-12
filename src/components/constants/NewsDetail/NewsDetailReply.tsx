import React, { FC, useEffect, useState } from "react";
import "./NewsDetail.css";

import axios from "axios";

import { useSelector } from "react-redux";
import { RootState } from "../../../modules";

import NewsDetailReplyReq from "./NewsDetailReplyReq";
import NewsReplyWrite from "../NewsReplyWrite/NewsReplyWrite";

import ReplyBox from "../../constants/ReplyBox/ReplyBox";

interface Props {
  newsId: string;
}

const NewsDetailReply: FC<Props> = ({ newsId }: Props) => {
  const [reply, setReply] = useState(0);
  const [isView, setIsView] = useState(false);

  const state = useSelector((state: RootState) => state.user);

  function getReply() {
    axios
      .get(`${process.env["REACT_APP_API_SERVER"]}/v1/news/${newsId}/reply/cnt`)
      .then(({ data }) => {
        setReply(data);
      });
  }

  useEffect(() => {
    setIsView(state.isViewReply);
    getReply();
  }, [reply, isView, state.isViewReply]);
  return (
    <>
      <div className="NewsDetailReplyTitle">
        댓글 <span>· {reply}개</span>
      </div>
      {isView && reply > 0 ? (
        <ReplyBox newsId={newsId} reply={reply} />
      ) : (
        <NewsDetailReplyReq reply={reply} setIsView={setIsView} />
      )}
      {state.isLogin ? (
        <NewsReplyWrite newsId={newsId} reply={reply} setReply={setReply} />
      ) : (
        <></>
      )}
    </>
  );
};

export default NewsDetailReply;
