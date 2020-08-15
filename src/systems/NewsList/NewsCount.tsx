import React, { FC } from "react";

import { useGetRequest } from "../../hooks/useGetRequest";
import NewsCountBox from "../../components/constants/NewsBox/NewsCountBox";

const NewsMenu: FC = () => {
  const [response, loading, error] = useGetRequest(
    `${process.env["REACT_APP_API_SERVER"]}/dev/v1/news/cnt`
  );

  if (loading) return <></>;
  if (error) return <div>error!</div>;

  if (!response) return <></>;

  return <NewsCountBox count={response.data} />;
};

export default NewsMenu;
