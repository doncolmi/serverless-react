import React, { FC, useEffect } from "react";
import { parse } from "query-string";
import { useLocation } from "react-router";

import { useGetRequest } from "../hooks/useGetRequest";

import PageHeader from "../systems/Header/PageHeader";
import NewsList from "../systems/NewsList/NewsList";
import NewsPaging from "../systems/NewsList/NewsPaging";

const News: FC = () => {
  let { page } = parse(useLocation().search);
  useEffect(() => {}, [page]);
  const [response, loading, error] = useGetRequest(
    `${process.env["REACT_APP_API_SERVER"]}/dev/v1/news/cnt`
  );
  console.log(response);

  if (loading) return <></>;
  if (error) return <div>error!</div>;

  if (!response) return <></>;

  if (typeof page === "string") {
    const maxPage: number = response.data / 10;
    const intPage = parseInt(page);
    if (!intPage) page = "0";
    if (intPage >= maxPage) page = `${maxPage}`;
  } else {
    page = "0";
  }

  return (
    <>
      <PageHeader
        title="전체 뉴스 게시판"
        subtitle="유저는 게시물 작성이 불가능한 게시판입니다."
      />
      <NewsList page={page} />
      <NewsPaging page={page} maxPage={response.data / 10} />
    </>
  );
};

export default News;
