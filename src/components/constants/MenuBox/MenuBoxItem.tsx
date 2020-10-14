import React, { FC, useEffect, useState } from "react";
import "./MenuBox.css";

import NormalText from "../../common/Text/NormalText";
import LightText from "../../common/Text/LightText";

import MenuTag, { Types } from "./MenuTag";

import { simpleDate } from "../../../util/Date/simpleDate";
import { Link } from "react-router-dom";

interface Props {
  item: any;
}

const MenuBoxItem: FC<Props> = ({ item }: Props) => {
  const {
    tag,
    topic,
    title,
    translatedTitle,
    reply,
    date,
    id,
    thumbnail,
  } = item;

  const [tags, setTags] = useState<any>([]);

  useEffect(() => {
    const tagSplit = tag.split("|");
    let i = 0;
    const tagMap = tagSplit.map((element: string) => {
      i++;
      if (i === 1) {
        let type;
        if (element === "BBC") type = Types.BBC;
        else if (element === "Sky") type = Types.SKY;
        else if (element === "Goal") type = Types.GOAL;
        else type = Types.PRESS;
        return {
          type: type,
          text: element,
        };
      } else if (i === 2) {
        return {
          type: Types.STATUS,
          text: element,
        };
      } else {
        return {
          type: Types.ETC,
          text: element,
        };
      }
    });
    setTags(tagMap);
  }, [tag]);
  return (
    <Link to={`/news/${id}`} className="hideHref NewsLink">
      <div className="MenuBoxItem">
        <div className="contents">
          <div className="title">
            <LightText text={topic} />
            <br />
            <NormalText text={translatedTitle ? translatedTitle : title} />
          </div>
          <div className="tag">
            {tags.map((element: any) => (
              <MenuTag
                type={element.type}
                text={element.text}
                key={Math.random()}
              />
            ))}
            <span className="date">
              <i className="far fa-clock"></i> {simpleDate(date)}
            </span>
          </div>
        </div>
        <div className="reply">
          <LightText text="댓글" />
          <NormalText text={reply} />
        </div>
      </div>
    </Link>
  );
};

export default MenuBoxItem;
