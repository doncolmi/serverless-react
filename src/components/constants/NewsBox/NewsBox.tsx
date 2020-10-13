import React, { FC } from "react";
import "./NewsBox.css";

import NewsBoxItem from "./NewsBoxItem";

interface Props {
  data: Array<any>;
  page: string;
}

const NewsBox: FC<Props> = ({ data, page }: Props) => {
  return (
    <div className="NewsBox">
      {data.map((element) => (
        <NewsBoxItem item={element} page={page} key={Math.random()}
        />
      ))}
    </div>
  );
};

export default NewsBox;
