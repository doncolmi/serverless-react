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
        { href.length > 50 ? `${href.slice(0, 50)}...` : href}
      </a>
    </div>
  );
};

export default DetailLink;
