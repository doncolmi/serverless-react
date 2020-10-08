import React, { FC } from "react";
import "./NewsDetail.css";

import DetailTitle from "../../common/Details/DetailTitle";
import DetailInfo from "../../common/Details/DetailInfo";
import DetailLink from "../../common/Details/DetailLink";
import NewsReqBtn from "./NewsReqBtn";
import NewsDetailReply from "./NewsDetailReply";

interface Props {
  news: any;
}

const NewsDetail: FC<Props> = ({ news }: Props) => {
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
      <NewsDetailReply newsId={news.id} />
      <div className="marginDiv" />
    </>
  );
};

export default NewsDetail;
