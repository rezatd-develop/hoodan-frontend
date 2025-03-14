'use client'

import HomeContentRow from "./HomeContentRow";
import { useEffect, useState } from "react";
import { GetPublicAllProductsService } from "../../../services/Api's/public/products/publicProductApiRoutes";
import { useSelector } from "react-redux";

export default function HomeBooksRow() {
    const t = useSelector((state) => state.dictionary.t);
    const [contents, setContents] = useState([]);
    const productTypeLabel = 'books';

    useEffect(() => {
        let params = {
            limit: 4,
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
            <HomeContentRow scrollView
                title={t?.home?.mostRecentTranslatedBooks}
                description=''
                contents={contents}
                productTypeLabel={productTypeLabel} />
        </div>
    )
}