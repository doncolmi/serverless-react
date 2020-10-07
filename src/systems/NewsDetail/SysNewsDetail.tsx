import React, { FC } from "react";

import { useGetRequest } from "../../hooks/useGetRequest";
import NewsDetail from "../../components/constants/NewsDetail/NewsDetail";
interface Props {
  newsId: string;
}

const SysNewsDetail: FC<Props> = ({ newsId }: Props) => {
  const [response, loading, error] = useGetRequest(
    `${process.env["REACT_APP_API_SERVER"]}/v1/news/${newsId}`
  );

  if (loading) return <></>;
  if (error) return <div>error!</div>;

  if (!response) return <></>;

  return <NewsDetail news={response.data} />;
};

export default SysNewsDetail;
