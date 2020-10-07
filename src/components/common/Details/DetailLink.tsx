import React, { FC } from "react";
import "./Detail.css";

interface Props {
  href: string;
}

const DetailLink: FC<Props> = ({ href }: Props) => {
  return (
    <div className="DetailLink">
      <i className="fas fa-link"></i> :{" "}
      <a className="href hideHref" href={href}>
        {href.slice(0, 35)}...(원본링크)
      </a>
    </div>
  );
};

export default DetailLink;
