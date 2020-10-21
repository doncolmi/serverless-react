import React, { FC } from "react";
import "./InfoBox.css";

interface Props {
  text: string;
}

const InfoContents: FC<Props> = ({ text }: Props) => {
  return <div className="contents">{text}</div>;
};

export default InfoContents;
