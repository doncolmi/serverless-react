import React, {FC} from "react";

import { Types } from "../../../constants/NewsReplyWrite/NewsReplyWrite"


interface Props {
    type: string;
    item: string;
}

const ReplyItem: FC<Props> = ({ type, item }: Props) => {

    function go(link: string) {
        const caution = window.confirm("이동하려는 링크는 안전하지 않은 사이트 일 수 있습니다.");
        if (caution) {
            window.open(link);
        }
    }

    if (type === Types.DEFAULT) return <div className="ReplyItem"></div>;

    if (type === Types.TITLE) {
        return <div className="ReplyItem">
        <span>제목 수정 요청</span>
        <span>{item}</span>
    </div>;
    }
    return <div className="ReplyItem">
        <span>링크 추가 요청</span>
        <span className="link" onClick={() => go(item)}>{item.slice(0, 30)}</span>
    </div>;
}


export default ReplyItem;