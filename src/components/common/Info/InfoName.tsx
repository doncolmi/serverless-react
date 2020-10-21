import React, { FC } from "react";
import "./InfoBox.css";

interface Props {
  text: string;
}

const InfoName: FC<Props> = ({ text }: Props) => {
  return <div className="name">{text}</div>;
};

export default InfoName;
