import React, { FC } from "react";

interface Props {
  thumbnail: string | null;
  description: string;
}

const NewsDetailPicture: FC<Props> = ({ thumbnail, description }: Props) => {
  return (
    <div className="newsPic">
      {thumbnail && (
        <img
          src={`${process.env["REACT_APP_S3_SERVER"]}/${thumbnail}`}
          alt="pic"
        />
      )}

      <span>{description && description}</span>
    </div>
  );
};

export default NewsDetailPicture;
