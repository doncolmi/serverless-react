import React, { FC, useState, useEffect } from "react";
import "./NewsBox.css";

import PageButton from "../../constants/Button/PageButton";

interface Props {
  page: number;
  maxPage: number;
}

const NewsPagination: FC<Props> = ({ page, maxPage }: Props) => {
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(10);
  console.log("maxPage : ", maxPage);

  function getArray(start: number, end: number): Array<number> {
    const array: Array<number> = [];
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
    return array;
  }

  async function setStartEnd(page: number, maxPage: number) {
    if (maxPage < 8) {
      await setStart(1);
      await setEnd(maxPage);
    } else {
      if (page < 4) {
        await setStart(1);
        await setEnd(7);
      } else if (page > maxPage - 3) {
        await setStart(maxPage - 5);
        await setEnd(maxPage + 1);
      } else {
        await setStart(page - 3);
        await setEnd(page + 3);
      }
    }
  }

  useEffect(() => {
    setStartEnd(page, maxPage);
  }, [page, maxPage]);

  return (
    <div className="NewsPagination">
      {getArray(start, end).map((element: any) => (
        <PageButton num={element} isNow={element === page} href="/news" />
      ))}
    </div>
  );
};

export default NewsPagination;
