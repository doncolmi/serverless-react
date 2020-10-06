import React, { FC } from "react";
import "./MenuBox.css";

export enum Types {
  GOAL = "goal",
  SKY = "sky",
  BBC = "bbc",
  PRESS = "press",
  STATUS = "status",
  ETC = "etc",
}

interface Props {
  type: Types;
  text: string;
}
const MenuTag: FC<Props> = ({ type, text }: Props) => {
  return <div className={`${type} tagItem`}>{text}</div>;
};

export default MenuTag;
