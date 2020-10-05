import React, { FC } from "react";
import "./Button.css";

interface Props {
  text: string;
  func: Function;
}

const HeaderButton: FC<Props> = ({ text, func }: Props) => {
  return (
    <span
      className="LoginButton"
      onClick={() => {
        func();
      }}
    >
      {text}
    </span>
  );
};

export default HeaderButton;
