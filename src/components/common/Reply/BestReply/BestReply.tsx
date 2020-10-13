import React, {FC} from "react";
import "./BestReply.css";

import ReplyUpdown from "../components/ReplyUpdown"

interface Props {
    reply: any;
}

const BestReply: FC<Props> = ({ reply }: Props) => {
    const { name, contents, id, score, userUuid} = reply
    return <div className="BestReply" onClick={() => window.location.href=`#${id}`}>
        <div className="WriterInfo">
            <span><i className="fas fa-medal"></i></span>
            <span className="WriterName">{name}</span>
        </div>
        <div className="ReplyContents">
            <div className="contents">{contents}</div>
            <ReplyUpdown id={id} score={score} userId={userUuid} />
        </div>
    </div>;
}


export default BestReply;