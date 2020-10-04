import React, { FC } from "react";
import "./Text.css";

interface Props {
  text: string;
}

const NormalText: FC<Props> = ({ text }: Props) => {
  return <span className="NormalText">{text}</span>;
};

export default NormalText;
