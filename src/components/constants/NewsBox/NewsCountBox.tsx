import React, { FC } from "react";
import "./NewsBox.css";

import LightText from "../../common/Text/LightText";

interface Props {
  count: number;
}

const NewsCountBox: FC<Props> = ({ count }: Props) => {
  return (
    <div className="NewsCountBox">
      <LightText text={`총 ${count}개의 기사`} />
    </div>
  );
};

export default NewsCountBox;
