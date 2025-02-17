import HoCarousel from '../../../components/carousel/HoCarousel';
import HomeMainCarouselSlide from './HomeMainCarouselSlide';
import examplecarouselimage from '../../../media/images/carousel/examplecarouselimage.jpg';

export default function HomeMainCarousel() {
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
    ]

    return <HoCarousel slides={slidesData?.map((item) => (

        <HomeMainCarouselSlide key={item?.id}
        carouselimage={item?.carouselimage}
            title={item?.title}
            description={item?.description}
            buttonLabel={item?.buttonLabel} />
    ))} />
}