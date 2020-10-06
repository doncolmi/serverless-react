import React, { FC } from "react";
import "./NewsBox.css";

import NewsBoxItem from "./NewsBoxItem";

interface Props {
  data: Array<any>;
}

const NewsBox: FC<Props> = ({ data }: Props) => {
  return (
    <div className="NewsBox">
      {data.map((element) => (
        <NewsBoxItem
          tag={element.tag}
          topic={element.topic}
          reply={element.reply}
          view={element.view}
          date={element.date}
          title={element.title}
          translatedTitle={element.translatedTitle}
        />
      ))}
    </div>
  );
};

export default NewsBox;
