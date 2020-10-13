import React, {FC} from "react";
import "../../common/Details/Detail.css";

import DetailLink from "../../common/Details/DetailLink";

import { useGetRequest } from "../../../hooks/useGetRequest";

interface Props {
    newsId: string;
}

const NewsUserLink: FC<Props> = ({ newsId }: Props) => {
    const [response, loading, error] = useGetRequest(
        `${process.env["REACT_APP_API_SERVER"]}/v1/news/${newsId}/link`
    );

    
    if (loading) return <></>;
    if (error) return <div>error!</div>;

    if (!response) return <></>;
    const { data } = response;
    if (!data || data.length < 1) return <></>
    
    return <div className="NewsUserLink">
            <span className="NewsUserLinkSpan">아래는 유저들의 투표로 추가된 참고 링크입니다.</span> 
            {data.map((element: any) => <DetailLink href={element.item}/>)}
        </div>;
}


export default NewsUserLink;