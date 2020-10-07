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
        <NewsBoxItem
          id={element.id}
          tag={element.tag}
          topic={element.topic}
          reply={element.reply}
          view={element.view}
          date={element.date}
          title={element.title}
          translatedTitle={element.translatedTitle}
          page={page}
        />
      ))}
    </div>
  );
};

export default NewsBox;
