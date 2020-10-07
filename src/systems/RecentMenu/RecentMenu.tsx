import React, { FC } from "react";

import { useGetRequest } from "../../hooks/useGetRequest";

import MenuBox from "../../components/constants/MenuBox/MenuBox";

const RecentMenu: FC = () => {
  const [response, loading, error] = useGetRequest(
    `${process.env["REACT_APP_API_SERVER"]}/v1/news/recent`
  );

  if (loading) return <></>;
  if (error) return <div>error!</div>;

  if (!response) return <></>;

  return <MenuBox data={response.data} />;
};

export default RecentMenu;
