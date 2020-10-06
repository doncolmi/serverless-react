import React, { FC } from "react";

import { useGetRequest } from "../../hooks/useGetRequest";

import NewsBox from "../../components/constants/NewsBox/NewsBox";

interface Props {
  page: string | string[];
}
const NewsMenu: FC<Props> = ({ page }: Props) => {
  const [response, loading, error] = useGetRequest(
    `${process.env["REACT_APP_API_SERVER"]}/dev/v1/news?page=${page}`
  );

  if (loading) return <></>;
  if (error) return <div>error!</div>;

  if (!response) return <></>;

  return <NewsBox data={response.data} />;
};

export default NewsMenu;
