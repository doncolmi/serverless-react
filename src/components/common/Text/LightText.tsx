import React, { FC } from "react";
import "./Text.css";

interface Props {
  text: string;
}

const LightText: FC<Props> = ({ text }: Props) => {
  return <span className="LightText">{text}</span>;
};

export default LightText;
