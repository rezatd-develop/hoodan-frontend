'use client'

import HomeContentRow from "../home/HomeContentRow";
import { useEffect, useState } from "react";
import { GetPublicAllProductsService } from "../../../services/Api's/public/products/publicProductApiRoutes";

export default function BooksPage() {
    const [contents, setContents] = useState([]);
    const productTypeLabel = 'articles'

    useEffect(() => {
        let params = {
            productType: 2,
        }
        GetPublicAllProductsService(params, getPublicAllProductsCallback)
    }, []);

    const getPublicAllProductsCallback = (data) => {
        if (data?.hasError) return;
        setContents(data?.data)
    }

    return (
        <div className="mb-5 mt-5">
            <HomeContentRow productTypeLabel={productTypeLabel} title='' description='' contents={contents} />
        </div>
    )
}