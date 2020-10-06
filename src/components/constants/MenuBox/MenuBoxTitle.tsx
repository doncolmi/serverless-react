import React, { FC } from "react";
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
      <div className="More">
        <Link to="/news">
          <LightText text="더보기" />
        </Link>
      </div>
    </div>
  );
};

export default MenuBoxTitle;
