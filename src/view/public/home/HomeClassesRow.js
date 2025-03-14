'use client'

import HomeContentRow from "./HomeContentRow";
import { useEffect, useState } from "react";
import { GetPublicAllProductsService } from "../../../services/Api's/public/products/publicProductApiRoutes";
import { useSelector } from "react-redux";

export default function HomeClassesRow() {
    const t = useSelector((state) => state.dictionary.t);
    const [contents, setContents] = useState([]);
    const productTypeLabel = 'classes';

    useEffect(() => {
        let params = {
            limit: 4,
            productType: 1,
        }
        GetPublicAllProductsService(params, getPublicAllProductsCallback)
    }, []);

    const getPublicAllProductsCallback = (data) => {
        if (data?.hasError) return;
        setContents(data?.data)
    }

    return (<div className="mb-5">
        <HomeContentRow scrollView
            productTypeLabel={productTypeLabel}
            title={t?.home?.mostRecentClasses}
            description={t?.home?.findMostRecentClassesHere}
            contents={contents} />
    </div>
    )
}