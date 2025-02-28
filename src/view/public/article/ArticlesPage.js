'use client'

import HomeContentRow from "../home/HomeContentRow";
import { useEffect, useState } from "react";
import { GetPublicAllBlogsService } from "../../../services/Api's/public/articles/publicArticlesApiRoutes";

export default function ArticlesPage() {
    const [contents, setContents] = useState([]);
    const productTypeLabel = 'articles'

    useEffect(() => {
        GetPublicAllBlogsService({}, getPublicAllBlogsCallback)
    }, []);

    const getPublicAllBlogsCallback = (data) => {
        if (data?.hasError) return;
        setContents(data?.data)
    }

    return (
        <div className="mb-5 mt-5">
            <HomeContentRow productTypeLabel={productTypeLabel} isArticle title='' description='' contents={contents} />
        </div>
    )
}