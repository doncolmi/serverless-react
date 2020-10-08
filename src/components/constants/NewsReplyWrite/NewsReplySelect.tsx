import React, { FC } from "react";
import "./NewsReply.css";
import { Types } from "./NewsReplyWrite";

interface Props {
  setType: Function;
}

const NewsReplySelect: FC<Props> = ({ setType }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };
  return (
    <select onChange={handleChange} className="NewsReplySelect">
      <option value={Types.DEFAULT} selected>
        일반
      </option>
      <option value={Types.TITLE}>제목 수정 건의</option>
      <option value={Types.LINK}>관련 링크 추가</option>
    </select>
  );
};

export default NewsReplySelect;
