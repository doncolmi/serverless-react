import React, { FC } from "react";
import "./Detail.css";

import BoldText from "../Text/BoldText";
import LightText from "../Text/LightText";
import NormalText from "../Text/NormalText";

interface Props {
  topic: string;
  title: string;
  engTitle: string;
}

const DetailTitle: FC<Props> = ({ topic, title, engTitle }: Props) => {
  return (
    <div className="DetailTitle">
      <LightText text={topic} />
      <NormalText text={title} />
      <LightText text={engTitle} />
    </div>
  );
};

export default DetailTitle;
