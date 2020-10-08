import React, { FC, useState } from "react";
import "./NewsReply.css";

import Reply from "../../common/Reply/Reply";

const NewsReplyTitle: FC = () => {
  const [item, setItem] = useState("");
  const [value, setValue] = useState("");

  const placeholder = "건의할 제목을 적어주세요.";

  const itemHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        className="NewsReplyTitleInput"
        placeholder={placeholder}
        onChange={itemHandleChange}
      />
      <Reply
        setValue={setValue}
        submit={() => {}}
        activate={item.length > 0 && value.length > 0}
      />
    </>
  );
};

export default NewsReplyTitle;
