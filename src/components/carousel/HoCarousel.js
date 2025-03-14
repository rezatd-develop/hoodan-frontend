'use client'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import '../../styles/components/carousel/carousel.css';

export default function HoCarousel(props) {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: props?.clickable,
            }}
            navigation={props?.navigation}
            modules={
                [Autoplay,
                    !!props?.pagination && Pagination,
                    !!props?.navigation && Navigation]
                    .filter(item => item)
            }
            className="mySwiper"
            onSlideChange={props?.onSlideChange}
        >
            {props?.slides?.length > 0 &&
                props?.slides?.map((item, index) => (
                    <SwiperSlide key={index}>{item}</SwiperSlide>
                ))}
        </Swiper >
    )
}