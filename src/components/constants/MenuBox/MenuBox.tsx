import React, { FC } from "react";
import "./MenuBox.css";

import MenuBoxTitle from "./MenuBoxTitle";
import MenuBoxItem from "./MenuBoxItem";
import { Link } from "react-router-dom";

interface Props {
  data: Array<any>;
}

const MenuBox: FC<Props> = ({ data }: Props) => {
  return (
    <div className="MenuBox">
      <Link to="/news" className="hideHref">
        <MenuBoxTitle icon="fas fa-globe-europe" title="전체 해외 뉴스" />
      </Link>
      {data.map((element) => (
        <MenuBoxItem
          tag={element.tag}
          topic={element.topic}
          reply={element.reply}
          date={element.date}
          title={element.title}
          translatedTitle={element.translatedTitle}
          key={Math.random()}
        />
      ))}
    </div>
  );
};

export default MenuBox;
