import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Button.css";

interface Props {
  text: string;
  func?: Function;
  href?: string;
}

const HeaderButton: FC<Props> = ({ text, func, href }: Props) => {
  if (href) {
    return (
      <Link to={href} className="LoginButton hideHrefw">
        <span>{text}</span>
      </Link>
    );
  }
  if (func) {
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
  }
  return <></>;
};

export default HeaderButton;
