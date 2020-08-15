import React, { FC, useEffect, useState } from "react";
import "./NewsBox.css";

import NormalText from "../../common/Text/NormalText";
import LightText from "../../common/Text/LightText";

import MenuTag, { Types } from "../MenuBox/MenuTag";

import { simpleDate } from "../../../util/Date/simpleDate";

interface Props {
  tag: string;
  topic: string;
  title: string;
  reply: string;
  date: string;
  translatedTitle: string;
  view: number;
}

const NewsBoxItem: FC<Props> = (Props) => {
  const { tag, topic, title, translatedTitle, reply, date, view } = Props;

  const [tags, setTags] = useState<any>([]);

  useEffect(() => {
    const tagSplit = tag.split("|");
    let i = 0;
    const tagMap = tagSplit.map((element: string) => {
      i++;
      if (i === 1) {
        return {
          type: Types.PRESS,
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
    <div className="NewsBoxItem">
      <div className="contents">
        <div className="title">
          <LightText text={topic} />
          <br />
          <NormalText text={translatedTitle ? translatedTitle : title} />
        </div>
        <div className="tag">
          {tags.map((element: any) => (
            <MenuTag type={element.type} text={element.text} />
          ))}
          <span className="date">
            <i className="fas fa-eye"></i> {view}&nbsp;
            <i className="far fa-clock"></i> {simpleDate(date)}
          </span>
        </div>
      </div>
      <div className="reply">
        <LightText text="댓글" />
        <NormalText text={reply} />
      </div>
    </div>
  );
};

export default NewsBoxItem;
