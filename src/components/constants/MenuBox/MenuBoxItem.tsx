import React, { FC, useEffect, useState } from "react";
import "./MenuBox.css";

import NormalText from "../../common/Text/NormalText";
import LightText from "../../common/Text/LightText";

import MenuTag, { Types } from "./MenuTag";

interface Props {
  tag: string;
  topic: string;
  title: string;
  reply: string;
  date: string;
  translatedTitle: string;
}

const MenuBoxItem: FC<Props> = (Props) => {
  const { tag, topic, title, translatedTitle, reply, date } = Props;

  const [tags, setTags] = useState<any>([]);

  function simpleDate(createdDate: string): any {
    const now: number = new Date().getTime();
    const date: number = new Date(createdDate).getTime();
    let diff: number = (now - date) / 1000;

    if (diff < 0) diff = 0;
    let day_diff: number = Math.floor(diff / 86400);
    if (isNaN(day_diff) || day_diff < 0) return;

    return (
      (day_diff === 0 &&
        ((diff < 60 && "방금전") ||
          (diff < 120 && "1 분전") ||
          (diff < 3600 && Math.floor(diff / 60) + " 분전") ||
          (diff < 7200 && "1 시간전") ||
          (diff < 86400 && Math.floor(diff / 3600) + " 시간전"))) ||
      (day_diff === 1 && "어제") ||
      (day_diff < 7 && day_diff + " 일전") ||
      (day_diff < 31 && Math.floor(day_diff / 7) + " 주전") ||
      (day_diff < 360 && Math.floor(day_diff / 30) + " 개월전") ||
      (day_diff >= 360 &&
        (Math.floor(day_diff / 360) === 0 ? 1 : Math.floor(day_diff / 360)) +
          " 년전")
    );
  }

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
    <div className="MenuBoxItem">
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

export default MenuBoxItem;
