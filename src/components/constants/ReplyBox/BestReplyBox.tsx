import React, {FC} from "react";
import "./ReplyBox.css";

import BestReply from "../../common/Reply/BestReply/BestReply";

interface Props {
    replys: any[];
}

const BestReplyBox: FC<Props> = ({ replys }: Props) => {
    function sortBestReply(): any[] {
        const best = replys.filter((element: any) => element.isSelection && element.type === "default");
        const sortFunc = (a: any, b: any) => (a.score < b.score ? 1 : a.score > b.score ? -1 : 0);
        return [...best.sort(sortFunc).slice(0,3)];
      }
    return <>
        {sortBestReply().map((element: any) => <BestReply reply={element} />)}
    </>;
}


export default BestReplyBox;