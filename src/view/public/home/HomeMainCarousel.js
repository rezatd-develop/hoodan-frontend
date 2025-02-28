'use client'

import HoCarousel from '../../../components/carousel/HoCarousel';
import HomeMainCarouselSlide from './HomeMainCarouselSlide';
import { GetPublicAllSlidersService } from "../../../services/Api's/public/sliders/publicSlidersApiRoutes";
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function HomeMainCarousel() {
    const [activeSlideIndex, setActiveSlideIndex] = useState();
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        GetPublicAllSlidersService(getPublicAllSlidersCallback)
    }, [])

    const getPublicAllSlidersCallback = (data) => {
        if (data?.hasError) return;
        setSliders(data?.data[0]?.slides);
    }

    const onSlideChange = (data) => { setActiveSlideIndex(data?.activeIndex) }

    return <div className='mb-5'>
        <HoCarousel
            onSlideChange={onSlideChange}
            slides={sliders?.map((item) => (
                <HomeMainCarouselSlide key={item?.id}
                    image={item?.image}
                    title={item?.title}
                    description={item?.description}
                    buttonLabel={item?.buttonLabel}
                    buttonAction={item?.buttonAction} />
            ))} />
        <div className='d-flex row mt-4 px-5 mx-0 gap-2'>
            <div className={clsx(activeSlideIndex === 0 ? 'active-slider-progress-line' : 'slider-progress-line', 'col')}></div>
            <div className={clsx(activeSlideIndex === 1 ? 'active-slider-progress-line' : 'slider-progress-line', 'col')}></div>
            <div className={clsx(activeSlideIndex === 2 ? 'active-slider-progress-line' : 'slider-progress-line', 'col')}></div>
        </div>
    </div>
}