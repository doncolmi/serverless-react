import React, { FC } from "react";
import "./Detail.css";

import LightText from "../Text/LightText";

interface Props {
  view: number;
  date: string;
}

const DetailInfo: FC<Props> = ({ view, date }: Props) => {
  function prettyDate(dateString: string) {
    const date: Date = new Date(dateString);
    return `${date.toLocaleString()}`;
  }

  return (
    <div className="DetailInfo">
      <div className="left">
        <LightText text="조회" /> <LightText text={view + ""} />
      </div>
      <div className="right">
        <LightText text={prettyDate(date)} />
      </div>
    </div>
  );
};

export default DetailInfo;
