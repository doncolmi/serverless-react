import React, { FC, useEffect, useState } from "react";
import "./Reply.css";

import ReplyForm from "./ReplyForm";
import ReplySubmit from "./ReplySubmit";

const Reply: FC = () => {
  const [value, setValue] = useState("");

  return (
    <div className="Reply">
      <ReplyForm placeholder="댓글 테스트" setValue={setValue} rows={4} />
      <ReplySubmit
        onClick={() => {
          console.log("하이");
        }}
      />
    </div>
  );
};

export default Reply;
