'use client'

import { GetPublicBlogDetailService } from "@/services/Api's/public/articles/publicArticlesApiRoutes";
import { convertDateToDayMonth, htmlToPlainText } from "@/utilities/CommonHelper";
import { useEffect, useState } from "react";

export default function ArticlePage() {
    const [blogDetail, setBlogDetail] = useState(null);
    const articleId = window?.location?.pathname?.split("/")?.pop();

    useEffect(() => {
        let params = {
            id: articleId
        };
        GetPublicBlogDetailService(params, getPublicBlogDetailCallback)
    }, [articleId]);

    const getPublicBlogDetailCallback = (data) => {
        if (data?.hasError) return;
        setBlogDetail(data?.data);
    }


    return <div className="p-lg-5 p-md-4 p-sm-3 p-3">
        <div className="font-size-26">{blogDetail?.title}</div>
        <div className="my-1 text-secondary">{blogDetail?.author}</div>
        <div className="my-1 text-secondary">{convertDateToDayMonth(blogDetail?.publishDate)}</div>
        <div className="mt-4 line-height-1-6">{htmlToPlainText(blogDetail?.content)}</div>
    </div>
}