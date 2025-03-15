'use client'

import HoContentCard from "@/components/card/HoContentCard";
import { useIsMobile } from "@/utilities/CommonHelper";
import blogSample from '../../../media/images/samples/blog_sample.webp'
import clsx from "clsx";
import { useEffect, useState } from "react";
import { GetPublicAllProductsService } from "@/services/Api's/public/products/publicProductApiRoutes";
import { useSelector } from "react-redux";

export default function HomeArtItemsGrid() {
    const t = useSelector((state) => state.dictionary.t);
    const isMobile = useIsMobile();
    const [contents, setContents] = useState([]);
    const productTypeLabel = 'artItems';

    useEffect(() => {
        let params = {
            limit: 5,
            productType: 2,
        }
        GetPublicAllProductsService(params, getPublicAllProductsCallback)
    }, []);

    const getPublicAllProductsCallback = (data) => {
        if (data?.hasError) return;
        setContents(data?.data)
    }

    return <div className="px-lg-5 px-md-5 px-sm-4 px-4">
        <div className="font-size-26">{t?.home?.artPicks}</div>
        <div className="font-size-26 mb-4 text-secondary">{t?.home?.recentArtPicks}</div>
        <div className="row mx-0">
            {(isMobile && contents?.length > 0) ?
                <div className="d-flex flex-nowrap row gap-4 overflow-hidden">
                    <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5 px-0')}
                        key={contents[0]?.id}
                        img={contents[0]?.images[0]}
                        description={contents[0]?.description}
                        title={contents[0]?.title}
                        secondDescription={contents[0]?.secondDescription}
                        price={contents[0]?.price}
                        href={`${productTypeLabel || ""}/${String(contents[0]?.productId)}`}
                    />
                    {contents?.length > 1 &&
                        <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5 px-0')}
                            key={contents[1]?.id}
                            img={contents[1]?.images[0]}
                            description={contents[1]?.description}
                            title={contents[1]?.title}
                            secondDescription={contents[1]?.secondDescription}
                            price={contents[1]?.price}
                            href={`${productTypeLabel || ""}/${String(contents[1]?.productId)}`}
                        />
                    }
                    {contents?.length > 2 &&
                        <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5 px-0')}
                            key={contents[2]?.id}
                            img={contents[2]?.images[0]}
                            description={contents[2]?.description}
                            title={contents[2]?.title}
                            secondDescription={contents[2]?.secondDescription}
                            price={contents[2]?.price}
                            href={`${productTypeLabel || ""}/${String(contents[2]?.productId)}`}
                        />
                    }
                    {contents?.length > 3 &&
                        <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5 px-0')}
                            key={contents[3]?.id}
                            img={contents[3]?.images[0]}
                            description={contents[3]?.description}
                            title={contents[3]?.title}
                            secondDescription={contents[3]?.secondDescription}
                            price={contents[3]?.price}
                            href={`${productTypeLabel || ""}/${String(contents[3]?.productId)}`}
                        />
                    }
                    {contents?.length > 4 &&
                        <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5 px-0')}
                            key={contents[4]?.id}
                            img={contents[4]?.images[0]}
                            description={contents[4]?.description}
                            title={contents[4]?.title}
                            secondDescription={contents[4]?.secondDescription}
                            price={contents[4]?.price}
                            href={`${productTypeLabel || ""}/${String(contents[4]?.productId)}`}
                        />
                    }
                </div>
                : contents?.length > 0 && <div className="row">
                    <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5')}
                        key={contents[0]?.id}
                        img={contents[0]?.images[0]}
                        description={contents[0]?.description}
                        title={contents[0]?.title}
                        secondDescription={contents[0]?.secondDescription}
                        price={contents[0]?.price}
                        href={`${productTypeLabel || ""}/${String(contents[0]?.productId)}`}
                    />
                    <div className="col-6 row">
                        {contents?.length > 1 &&
                            <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5')}
                                key={contents[1]?.id}
                                img={contents[1]?.images[0]}
                                description={contents[1]?.description}
                                title={contents[1]?.title}
                                secondDescription={contents[1]?.secondDescription}
                                price={contents[1]?.price}
                                href={`${productTypeLabel || ""}/${String(contents[1]?.productId)}`}
                            />
                        }
                        {contents?.length > 2 &&
                            <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5')}
                                key={contents[2]?.id}
                                img={contents[2]?.images[0]}
                                description={contents[2]?.description}
                                title={contents[2]?.title}
                                secondDescription={contents[2]?.secondDescription}
                                price={contents[2]?.price}
                                href={`${productTypeLabel || ""}/${String(contents[2]?.productId)}`}
                            />
                        }
                        {contents?.length > 3 &&
                            <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5')}
                                key={contents[3]?.id}
                                img={contents[3]?.images[0]}
                                description={contents[3]?.description}
                                title={contents[3]?.title}
                                secondDescription={contents[3]?.secondDescription}
                                price={contents[3]?.price}
                                href={`${productTypeLabel || ""}/${String(contents[3]?.productId)}`}
                            />
                        }
                        {contents?.length > 4 &&
                            <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5')}
                                key={contents[4]?.id}
                                img={contents[4]?.images[0]}
                                description={contents[4]?.description}
                                title={contents[4]?.title}
                                secondDescription={contents[4]?.secondDescription}
                                price={contents[4]?.price}
                                href={`${productTypeLabel || ""}/${String(contents[4]?.productId)}`}
                            />
                        }
                    </div>
                </div>
            }
        </div>
    </div>

}