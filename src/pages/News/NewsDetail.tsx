import React, { FC, useEffect } from "react";

import { useParams } from "react-router";

import SysNewsDetail from "../../systems/NewsDetail/SysNewsDetail";
import News from "./NewsList";

const NewsDetail: FC = () => {
  const { newsId } = useParams();

  useEffect(() => {
    window.scroll(0, 0);
  }, [newsId]);

  return (
    <>
      <SysNewsDetail newsId={newsId} />
      <News />
    </>
  );
};

export default NewsDetail;
