import React, { FC } from "react";
import "./NewsDetail.css";

interface Props {
  contents: string;
}

const NewsDetailContents: FC<Props> = ({ contents }: Props) => {
  console.log(contents);
  return (
    <div
      className="NewsDetailContents"
      dangerouslySetInnerHTML={{ __html: contents }}
    ></div>
  );
};

export default NewsDetailContents;
