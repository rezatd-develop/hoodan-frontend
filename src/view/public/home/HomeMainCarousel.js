'use client'

import HoCarousel from '../../../components/carousel/HoCarousel';
import HomeMainCarouselSlide from './HomeMainCarouselSlide';
import examplecarouselimage from '../../../media/images/carousel/examplecarouselimage.jpg';
import { useState } from 'react';
import clsx from 'clsx';

export default function HomeMainCarousel() {
    const [activeSlideIndex, setActiveSlideIndex] = useState();

    const slidesData = [
        {
            id: 1,
            carouselimage: examplecarouselimage,
            title: 'Choice Works Benefit Auction',
            description: 'Support Planned Parenthood in protecting reproductive healthcare',
            buttonLabel: 'Browse Lots'
        },
        {
            id: 2,
            carouselimage: examplecarouselimage,
            title: 'Choice Works Benefit Auction',
            description: 'Support Planned Parenthood in protecting reproductive healthcare',
            buttonLabel: 'Browse Lots'
        },
        {
            id: 3,
            carouselimage: examplecarouselimage,
            title: 'Choice Works Benefit Auction',
            description: 'Support Planned Parenthood in protecting reproductive healthcare',
            buttonLabel: 'Browse Lots'
        },
    ];

    const onSlideChange = (data) => { setActiveSlideIndex(data?.activeIndex) }
    console.log('***activeSlideIndex', activeSlideIndex);

    return <>
        <HoCarousel
            onSlideChange={onSlideChange}
            slides={slidesData?.map((item) => (
                <HomeMainCarouselSlide key={item?.id}
                    carouselimage={item?.carouselimage}
                    title={item?.title}
                    description={item?.description}
                    buttonLabel={item?.buttonLabel} />
            ))} />
        <div className='d-flex row mt-4 px-5 mx-0 gap-2'>
            <div className={clsx(activeSlideIndex === 0 ? 'active-slider-progress-line' : 'slider-progress-line', 'col')}></div>
            <div className={clsx(activeSlideIndex === 1 ? 'active-slider-progress-line' : 'slider-progress-line', 'col')}></div>
            <div className={clsx(activeSlideIndex === 2 ? 'active-slider-progress-line' : 'slider-progress-line', 'col')}></div>
        </div>
    </>
}