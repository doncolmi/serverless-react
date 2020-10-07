import React, { FC } from "react";

import NewsPagination from "../../components/constants/NewsBox/NewsPagination";

interface Props {
  page: string | string[];
  maxPage: number;
}

const NewsPaging: FC<Props> = ({ page, maxPage }: Props) => {
  let pageNum: number;

  pageNum = +page;
  pageNum++;

  return <NewsPagination page={pageNum} maxPage={parseInt("" + maxPage)} />;
};

export default NewsPaging;
