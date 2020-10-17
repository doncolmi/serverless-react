import React, { FC, useEffect, useState } from "react";

interface Props {
  thumbnail: string | null;
  description: string;
  tag: string;
}

const NewsDetailPicture: FC<Props> = ({
  thumbnail,
  description,
  tag,
}: Props) => {
  const [desc, setDesc] = useState(description);

  useEffect(() => {
    if (tag.includes("본문등재")) {
      setDesc("");
    }
  }, []);

  return (
    <div className="newsPic">
      {thumbnail && (
        <img
          src={`${process.env["REACT_APP_S3_SERVER"]}/${thumbnail}`}
          alt="pic"
        />
      )}

      <span>{desc}</span>
    </div>
  );
};

export default NewsDetailPicture;
