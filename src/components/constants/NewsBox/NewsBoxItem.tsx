import React, { FC, useEffect, useState } from "react";
import "./NewsBox.css";

import NormalText from "../../common/Text/NormalText";
import LightText from "../../common/Text/LightText";

import MenuTag, { Types } from "../MenuBox/MenuTag";

import { simpleDate } from "../../../util/Date/simpleDate";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

interface Props {
  id: number;
  tag: string;
  topic: string;
  title: string;
  reply: string;
  date: string;
  translatedTitle: string;
  view: number;
  page: string;
}

const NewsBoxItem: FC<Props> = (Props) => {
  let { newsId } = useParams();
  if (!newsId) newsId = -1;
  const {
    id,
    tag,
    topic,
    title,
    translatedTitle,
    reply,
    date,
    view,
    page,
  } = Props;

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
    <Link to={`/news/${id}?page=${page}`} className="hideHref NewsLink">
      <div
        className={`NewsBoxItem ${
          id === parseInt(newsId) ? "watchingNews" : ""
        }`}
      >
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
    </Link>
  );
};

export default NewsBoxItem;
