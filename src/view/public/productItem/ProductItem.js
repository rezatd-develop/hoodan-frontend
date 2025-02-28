'use client'

import HoCarousel from "@/components/carousel/HoCarousel";
import Image from "next/image";
import classSample from '../../../media/images/samples/class_sample.png'
import HoSecondaryButton from "@/components/button/HoSecondaryButton";
import HoPrimaryButton from "@/components/button/HoPrimaryButton";
import { useEffect, useState } from "react";
import { convertDateToDayMonth, useIsMobile } from "@/utilities/CommonHelper";
import HomeContentRow from "../home/HomeContentRow";
import blogSample from '../../../media/images/samples/blog_sample.webp'
import { GetPublicProductDetailService } from "@/services/Api's/public/products/publicProductApiRoutes";
import { GetPublicAllProductsService } from "../../../services/Api's/public/products/publicProductApiRoutes";


export default function ProductItem(props) {
    const isMobile = useIsMobile();
    const [showCollapseOne, setShowCollapseOne] = useState(false);
    const [showCollapseTwo, setShowCollapseTwo] = useState(false);
    const [showCollapseThree, setShowCollapseThree] = useState(false);
    const [showCollapseFour, setShowCollapseFour] = useState(false);
    const [productDetail, setProductDetail] = useState(null);
    const [orderQuantity, setOrderQuantity] = useState(0);
    const productId = window?.location?.pathname?.split("/")?.pop();
    const [contents, setContents] = useState([]);

    useEffect(() => {
        let params = {
            productType: props?.productType,
        }
        GetPublicAllProductsService(params, getPublicAllProductsCallback);
    }, []);

    const getPublicAllProductsCallback = (data) => {
        if (data?.hasError) return;
        setContents(data?.data)
    }

    useEffect(() => {
        let params = {
            id: productId
        }
        GetPublicProductDetailService(params, getPublicProductDetailCallback)
    })

    const getPublicProductDetailCallback = (data) => {
        if (data?.hasError) return;
        setProductDetail(data?.data)
    }

    const createProductImages = () => {
        if (productDetail?.images?.length > 0) {
            return productDetail?.images?.map((item, index) => (
                <Image
                    key={index}
                    src={item}
                    alt={`Product Image ${index + 1}`}
                    className="w-auto"
                    style={{ height: isMobile ? '375px' : '800px' }}
                    width={800}
                    height={800}
                />
            ));
        } else {
            return [<div key="no-image">Product Image Not Available</div>];
        }
    };


    return <div className="px-lg-5 px-md-5 px-sm-4 px-4">
        <div className="row justify-content-between py-4">
            <div className="col-12 col-lg-7 col-md-7 col-sm-12 d-flex justify-content-center">
                <HoCarousel
                    // onSlideChange={onSlideChange}
                    slides={createProductImages()}>

                </HoCarousel>
            </div>
            <div className="col-12 col-lg-4 col-md-4 col-sm-12 mt-3 mt-lg-0 mt-md-0 mt-sm-3">
                <div className="mb-4">
                    <div className="font-size-26">{productDetail?.title}</div>
                    <div className="text-secondary fst-italic">{productDetail?.classSeries}</div>
                </div>
                <div className="mb-5">
                    <div className="text-secondary mb-1">{productDetail?.primaryDescription}</div>
                    <div className="text-secondary mb-1">{productDetail?.secondDescription}</div>
                    <div className="text-secondary mb-1">{productDetail?.thirdDescription}</div>
                </div>
                <div className="mt-5 mb-5">
                    <div className="font-size-26 mb-2">{productDetail?.price}</div>
                    {orderQuantity > 0
                        ? <HoProductQuantityManager />
                        : <HoPrimaryButton className='w-100 py-3'>purchase</HoPrimaryButton>}
                </div>
                {!!productDetail?.FaqOneKey &&
                    <div className="border-top py-4">
                        <div className="d-flex justify-content-between align-items-center" onClick={() => setShowCollapseOne(!showCollapseOne)}>
                            <div>{productDetail?.FaqOneKey}</div>
                            <i class="bi bi-chevron-expand"></i>
                        </div>
                        {showCollapseOne &&
                            <div className="text-secondary py-2">
                                {productDetail?.FaqOneValue}
                            </div>
                        }
                    </div>
                }
                {!!productDetail?.FaqTwoKey &&
                    <div className="border-top py-4">
                        <div className="d-flex justify-content-between align-items-center" onClick={() => setShowCollapseTwo(!showCollapseTwo)}>
                            <div>{productDetail?.FaqTwoKey}</div>
                            <i class="bi bi-chevron-expand"></i>
                        </div>
                        {showCollapseTwo &&
                            <div className="text-secondary py-2">
                                {productDetail?.FaqTwoValue}
                            </div>
                        }
                    </div>
                }
                {!!productDetail?.FaqThreeKey &&
                    <div className="border-top py-4">
                        <div className="d-flex justify-content-between align-items-center" onClick={() => setShowCollapseThree(!showCollapseThree)}>
                            <div>{productDetail?.FaqThreeKey}</div>
                            <i class="bi bi-chevron-expand"></i>
                        </div>
                        {showCollapseThree &&
                            <div className="text-secondary py-2">
                                {productDetail?.FaqThreeValue}
                            </div>
                        }
                    </div>
                }
                {!!productDetail?.FaqFourKey &&
                    <div className="border-top py-4">
                        <div className="d-flex justify-content-between align-items-center" onClick={() => setShowCollapseFour(!showCollapseFour)}>
                            <div>{productDetail?.FaqFourKey}</div>
                            <i class="bi bi-chevron-expand"></i>
                        </div>
                        {showCollapseFour &&
                            <div className="text-secondary py-2">
                                {productDetail?.FaqFourValue}
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
        <div className="row mx-0">
            <div className="p-3 border col-12 col-lg-7 col-md-7 col-sm-12 mb-3">
                {productDetail?.detailOneKey &&
                    <div className="d-flex justify-content-between align-items-center py-1">
                        <div>{productDetail?.detailOneKey}</div>
                        <div className="text-secondary">{productDetail?.detailOneValue}</div>
                    </div>
                }
                {productDetail?.detailTwoKey &&
                    <div className="d-flex justify-content-between align-items-center py-1">
                        <div>{productDetail?.detailTwoKey}</div>
                        <div className="text-secondary">{productDetail?.detailTwoValue}</div>
                    </div>
                }
                {productDetail?.detailThreeKey &&
                    <div className="d-flex justify-content-between align-items-center py-1">
                        <div>{productDetail?.detailThreeKey}</div>
                        <div className="text-secondary">{productDetail?.detailThreeValue}</div>
                    </div>
                }
            </div>
            <div className="p-3 border col-12 col-lg-7 col-md-7 col-sm-12">
                {productDetail?.mainDescription}
            </div>
        </div>
        <div className="mt-5">

            <HomeContentRow title='simmilar products' description='' contents={contents} className='px-0' />
        </div>

    </div>
}