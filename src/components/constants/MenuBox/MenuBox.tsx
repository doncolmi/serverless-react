import React, { FC } from "react";
import "./MenuBox.css";

import MenuBoxTitle from "./MenuBoxTitle";
import MenuBoxItem from "./MenuBoxItem";

interface Props {
  data: Array<any>;
}

const MenuBox: FC<Props> = ({ data }: Props) => {
  return (
    <div className="MenuBox">
      <MenuBoxTitle icon="fas fa-globe-europe" title="전체 해외 뉴스" />
      {data.map((element) => (
        <MenuBoxItem
          tag={element.tag}
          topic={element.topic}
          reply={element.reply}
          date={element.date}
          title={element.title}
          translatedTitle={element.translatedTitle}
        />
      ))}
    </div>
  );
};

export default MenuBox;
