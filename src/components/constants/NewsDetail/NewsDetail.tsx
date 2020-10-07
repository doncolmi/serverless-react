import React, { FC, useState } from "react";
import "./NewsDetail.css";

import DetailTitle from "../../common/Details/DetailTitle";
import DetailInfo from "../../common/Details/DetailInfo";
import DetailLink from "../../common/Details/DetailLink";
import NewsDetailReplyReq from "./NewsDetailReplyReq";
import NewsReqBtn from "./NewsReqBtn";

import Reply from "../../common/Reply/Reply";

interface Props {
  news: any;
}

const NewsDetail: FC<Props> = ({ news }: Props) => {
  const [isView, setIsView] = useState(false);
  console.log(isView);

  return (
    <>
      <DetailTitle
        topic={news.topic}
        title={news.translatedTitle ? news.translatedTitle : news.title}
        engTitle={news.translatedTitle ? news.title : ""}
      />
      <DetailInfo view={news.view} date={news.date} />
      <DetailLink href={news.href} />
      <NewsReqBtn />
      {isView ? (
        "hi"
      ) : (
        <NewsDetailReplyReq reply={news.reply} setIsView={setIsView} />
      )}
      <Reply />
      <div className="marginDiv" />
    </>
  );
};

export default NewsDetail;
