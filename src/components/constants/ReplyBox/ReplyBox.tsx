import React, { FC, useEffect, useState } from "react";
import "./ReplyBox.css";

import axios from "axios";

import Reply from "../../common/Reply/Reply";

interface Props {
  newsId: string;
  reply: number;
}

const ReplyBox: FC<Props> = ({ newsId, reply }: Props) => {
  const [tog, setTog] = useState(true);
  const [parentsReply, setParentsReply] = useState<any[]>();
  const [childrenReply, setChildrenReply] = useState<any[]>();
  const [error, setError] = useState(false);

  async function getReply(newsId: string) {
    const url = `${process.env["REACT_APP_API_SERVER"]}/v1/news/${newsId}/reply`;
    const replyList = await axios.get(url).catch((error) => setError(true));
    if (replyList) {
      const data = replyList.data!;
      const parents = data.filter((element: any) => element.parents === null);
      const children = data.filter((element: any) => element.parents !== null);
      await setParentsReply(parents);
      await setChildrenReply(children);
    }
  }

  async function toggle() {
    await setTog(!tog);
  }

  function getChild(parentId: any) {
    if (childrenReply) {
      const childrens = childrenReply.filter((element: any) => {
        return element.parents === parentId;
      });
      return childrens;
    } else return [];
  }

  useEffect(() => {
    getReply(newsId);
  }, [newsId, tog, reply]);

  if (error) return <>error!</>;
  if (parentsReply) {
    return (
      <div className="test">
        {parentsReply.map((reply: any) => (
          <Reply reply={reply} rChildren={getChild(reply.id)} tog={toggle} />
        ))}
      </div>
    );
  }
  return <></>;
};

export default ReplyBox;
