import React, { FC } from "react";
import "./IconButton.css";

interface Props {
  icon: string;
  text: string;
}

const IconButton: FC<Props> = ({ icon, text }: Props) => {
  return (
    <div className="IconButton" onClick={() => {}}>
      <div className="Icon">
        <span>
          <i className={icon}></i>
        </span>
      </div>
      <div className="Text">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default IconButton;
