import React, { FC } from "react";
import "./Text.css";

interface Props {
  text: string;
}

const BoldText: FC<Props> = ({ text }: Props) => {
  return <span className="BoldText">{text}</span>;
};

export default BoldText;
