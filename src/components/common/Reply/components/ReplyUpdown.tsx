import React, { FC, useEffect, useState } from "react";

import axios from "axios";

import { useSelector } from "react-redux";
import { RootState } from "../../../../modules";

interface Props {
  id: string;
  score: number;
  userId: string;
}

const ReplyUpdown: FC<Props> = ({ id, score, userId }: Props) => {
  const [replyScore, setReplyScore] = useState<number>(score);
  const [isSecond, setIsSecond] = useState(false);

  const { uuid, isLogin } = useSelector((state: RootState) => state.user);

  async function doScore(type: boolean) {
    if (!isLogin) {
      alert("로그인 이후 추천/비추천이 가능합니다.");
      return;
    }
    if (userId === uuid) {
      alert("자신이 쓴 댓글엔 추천/비추천이 불가능합니다.");
      return;
    }
    const url = `${process.env["REACT_APP_API_SERVER"]}/v1/news/reply/score`;
    const data = {
      createdUuid: uuid,
      newsReplyId: id,
      type: type,
    };
    try {
      const { status } = await axios.post(url, JSON.stringify(data));
      if (type) {
        await setReplyScore(replyScore + 1);
        alert("댓글을 추천했습니다!");
      } else {
        await setReplyScore(replyScore - 1);
        alert("댓글을 비추천했습니다!");
      }
      await setIsSecond(true);
    } catch (e) {
      alert("이미 추천 또는 비추천을 누른 댓글입니다.");
    }
  }

  async function getScore() {
    const url = `${process.env["REACT_APP_API_SERVER"]}/v1/reply/${id}/score`;
    const { data } = await axios.get(url);
    await setReplyScore(data.score);
  }

  useEffect(() => {
    if (isSecond) {
      getScore();
    }
  }, [isSecond, replyScore]);

  return (
    <div className="updown">
      <span onClick={() => doScore(true)}>
        <i className="fas fa-caret-square-up"></i>
      </span>
      <span className="score">{replyScore}</span>
      <span onClick={() => doScore(false)}>
        <i className="fas fa-caret-square-down"></i>
      </span>
    </div>
  );
};

export default ReplyUpdown;
