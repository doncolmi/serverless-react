import React, { FC } from "react";
import { parse } from "query-string";
import { useLocation } from "react-router";

import PageHeader from "../systems/Header/PageHeader";
import NewsList from "../systems/NewsList/NewsList";

const News: FC = () => {
  let { page } = parse(useLocation().search);
  if (!page) page = "0";

  return (
    <>
      <PageHeader
        title="전체 뉴스 게시판"
        subtitle="유저는 게시물 작성이 불가능한 게시판입니다."
      />
      <NewsList page={page} />
    </>
  );
};

export default News;
