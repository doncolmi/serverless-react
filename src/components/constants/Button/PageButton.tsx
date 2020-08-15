import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Button.css";

interface Props {
  num: number;
  isNow: boolean;
  href: string;
}

const PageButton: FC<Props> = ({ num, isNow, href }: Props) => {
  return (
    <Link to={`${href}?page=${num - 1}`} className="PageButtonLink hideHref">
      <div className={`PageButton ${isNow ? "activePage" : ""}`}>{num}</div>
    </Link>
  );
};

export default PageButton;
