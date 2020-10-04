import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import "./MenuBox.css";

import NormalText from "../../common/Text/NormalText";
import LightText from "../../common/Text/LightText";

interface Props {
  icon: string;
  title: string;
}

const MenuBoxTitle: FC<Props> = ({ title, icon }: Props) => {
  return (
    <div className="MenuBoxTitle">
      <div className="Name">
        <span>
          <i className={icon}></i>
        </span>
        <NormalText text={title} />
      </div>
      <Router>
        <div className="More">
          <Link to="/">
            <LightText text="더보기" />
          </Link>
        </div>
      </Router>
    </div>
  );
};

export default MenuBoxTitle;
