import React, { FC, useEffect, useState } from "react";
import "./NewsDetail.css";

import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../modules";

import IconButton from "../../common/Button/IconButton";

interface Props {
  newsId: string;
}

const NewsReqBtn: FC<Props> = ({ newsId }: Props) => {
  const [score, setScore] = useState<number>(0);
  const [contents, setContents] = useState<string>();
  const { uuid } = useSelector((state: RootState) => state.user);

  async function getContents(newsId: string) {
    const { data } = await axios.get(
      `${process.env["REACT_APP_API_SERVER"]}/v1/news/${newsId}/score`
    );
    await setScore(data.score);
    await setContents(data.contents);
  }

  async function postScore(newsId: string) {
    try {
      const {
        data,
        status,
      } = await axios.post(
        `${process.env["REACT_APP_API_SERVER"]}/v1/news/${newsId}/score`,
        { uuid: uuid }
      );
      setScore(score + 1);
      alert(data);
    } catch ({ response }) {
      if (response.status === 409) {
        alert("이미 투표한 글입니다.");
      } else if (response.status === 403) {
        alert("로그인 후에 투표가 가능합니다.");
      } else if (response.status === 406) {
        alert("이미 종료된 투표입니다.");
      } else {
        alert("서버 오류입니다.");
      }
    }
  }

  useEffect(() => {
    getContents(newsId);
  }, [score, contents]);

  return (
    <div className="NewsReqBtn">
      <span className="LightText">
        앞으로 <b>{30 - score}</b>명이 추천하면 기사 내용을 가져옵니다.
      </span>
      <div className="NewsReqBtns" onClick={() => postScore(newsId)}>
        <IconButton
          icon="fas fa-hand-holding"
          text="기사 내용을 가져와주세요!"
        />
      </div>
    </div>
  );
};

export default NewsReqBtn;
