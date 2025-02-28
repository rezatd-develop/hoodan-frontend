'use client'

import HoCarousel from "@/components/carousel/HoCarousel";
import Image from "next/image";
import classSample from '../../../media/images/samples/class_sample.png'
import HoSecondaryButton from "@/components/button/HoSecondaryButton";
import HoPrimaryButton from "@/components/button/HoPrimaryButton";
import { useState } from "react";
import { useIsMobile } from "@/utilities/CommonHelper";
import HomeContentRow from "../home/HomeContentRow";
import blogSample from '../../../media/images/samples/blog_sample.webp'


export default function ClassPage() {
    const isMobile = useIsMobile();
    const [showCollapseOne, setShowCollapseOne] = useState(false);
    const [showCollapseTwo, setShowCollapseTwo] = useState(false);
    const [showCollapseThree, setShowCollapseThree] = useState(false);
    const [showCollapseFour, setShowCollapseFour] = useState(false);
    const contents = [
        {
            id: 1,
            img: blogSample,
            description: 'Hoodan editorial',
            title: '11 Must-See Shows during Frieze Los Angeles',
            secondDescription: 'this is second description',
            price: '$124.00',
        },
        {
            id: 2,
            img: blogSample,
            description: 'Hoodan editorial',
            title: '11 Must-See Shows during Frieze Los Angeles',
            secondDescription: 'this is second description',
            price: '$124.00',
        },
        {
            id: 3,
            img: blogSample,
            description: 'Hoodan editorial',
            title: '11 Must-See Shows during Frieze Los Angeles',
            secondDescription: 'this is second description',
            price: '$124.00',
        },
        {
            id: 4,
            img: blogSample,
            description: 'Hoodan editorial',
            title: '11 Must-See Shows during Frieze Los Angeles',
            secondDescription: 'this is second description',
            price: '$124.00',
        },
    ]

    const slides = [
        <Image src={classSample} className="w-auto" style={{ height: isMobile ? '375px' : '800px' }} />,
        <Image src={classSample} className="w-auto" style={{ height: isMobile ? '375px' : '800px' }} />,
        <Image src={classSample} className="w-auto" style={{ height: isMobile ? '375px' : '800px' }} />,
    ]

    return <div className="px-lg-5 px-md-5 px-sm-4 px-4">
        <div className="row justify-content-between py-4">
            <div className="col-12 col-lg-7 col-md-7 col-sm-12 d-flex justify-content-center">
                <HoCarousel
                    onSlideChange={onSlideChange}
                    slides={slides}>

                </HoCarousel>
            </div>
            <div className="col-12 col-lg-4 col-md-4 col-sm-12 mt-3 mt-lg-0 mt-md-0 mt-sm-3">
                <div className="mb-4">
                    <div className="font-size-26">Katia Lifshin</div>
                    <div className="text-secondary fst-italic">Cargo, 2024</div>
                </div>
                <div className="mb-5">
                    <div className="text-secondary mb-1">description one</div>
                    <div className="text-secondary mb-1">description two</div>
                    <div className="text-secondary mb-1">description three</div>
                </div>
                <div className="mt-5 mb-5">
                    <div className="font-size-26 mb-2">$92.00</div>
                    <HoPrimaryButton className='w-100 py-3'>purchase</HoPrimaryButton>
                </div>
                <div className="border-top py-4">
                    <div className="d-flex justify-content-between align-items-center" onClick={() => setShowCollapseOne(!showCollapseOne)}>
                        <div>Shipping and Taxes</div>
                        <i class="bi bi-chevron-expand"></i>
                    </div>
                    {showCollapseOne &&
                        <div className="text-secondary py-2">
                            some textst
                        </div>
                    }
                </div>
                <div className="border-top py-4">
                    <div className="d-flex justify-content-between align-items-center" onClick={() => setShowCollapseTwo(!showCollapseTwo)}>
                        <div>Shipping and Taxes</div>
                        <i class="bi bi-chevron-expand"></i>
                    </div>
                    {showCollapseTwo &&
                        <div className="text-secondary py-2">
                            some textst
                        </div>
                    }
                </div>
                <div className="border-top py-4">
                    <div className="d-flex justify-content-between align-items-center" onClick={() => setShowCollapseThree(!showCollapseThree)}>
                        <div>Shipping and Taxes</div>
                        <i class="bi bi-chevron-expand"></i>
                    </div>
                    {showCollapseThree &&
                        <div className="text-secondary py-2">
                            some textst
                        </div>
                    }
                </div>
                <div className="border-top py-4">
                    <div className="d-flex justify-content-between align-items-center" onClick={() => setShowCollapseFour(!showCollapseFour)}>
                        <div>Shipping and Taxes</div>
                        <i class="bi bi-chevron-expand"></i>
                    </div>
                    {showCollapseFour &&
                        <div className="text-secondary py-2">
                            some textst
                        </div>
                    }
                </div>
            </div>
        </div>
        <div className="row mx-0">
            <div className="p-3 border col-12 col-lg-7 col-md-7 col-sm-12 mb-3">
                <div className="d-flex justify-content-between align-items-center py-1">
                    <div>Materials</div>
                    <div className="text-secondary">Oil on linen</div>
                </div>
                <div className="d-flex justify-content-between align-items-center py-1">
                    <div>Size</div>
                    <div className="text-secondary">39 2/5 × 31 1/2 in | 100 × 80 cm</div>
                </div>
                <div className="d-flex justify-content-between align-items-center py-1">
                    <div>Rarity</div>
                    <div className="text-secondary">Unique</div>
                </div>
                <div className="d-flex justify-content-between align-items-center py-1">
                    <div>Medium</div>
                    <div className="text-secondary">Painting</div>
                </div>
            </div>
            <div className="p-3 border col-12 col-lg-7 col-md-7 col-sm-12">
                some description some description some description some description some description some description
                some description some description some description some description some description some description
                some description some description some description some description some description some description
                some description some description some description some description some description some description

            </div>
        </div>
        <div className="mt-5">

        <HomeContentRow title='simmilar products' description='' contents={contents} className='px-0' />
        </div>

    </div>
}