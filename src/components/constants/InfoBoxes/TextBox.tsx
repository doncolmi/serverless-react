import React, { FC } from "react";
import "./InfoBoxes.css";

import InfoName from "../../common/Info/InfoName";
import InfoContents from "../../common/Info/InfoContents";

interface Props {
  name: string;
  contents: string;
  func?: Function;
}

const TextBox: FC<Props> = ({ name, contents, func }: Props) => {
  return (
    <div className="TextBox">
      <InfoName text={name} />
      <InfoContents text={contents} />
    </div>
  );
};

export default TextBox;
