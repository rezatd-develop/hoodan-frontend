'use client'

import HoContentCard from "@/components/card/HoContentCard";
import { useIsMobile } from "@/utilities/CommonHelper";
import blogSample from '../../../media/images/samples/blog_sample.webp'
import clsx from "clsx";

export default function HomeArtItemsGrid() {
    const isMobile = useIsMobile();
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
        {
            id: 5,
            img: blogSample,
            description: 'Hoodan editorial',
            title: '11 Must-See Shows during Frieze Los Angeles',
            secondDescription: 'this is second description',
            price: '$124.00',
        },
    ]

    return <div className="px-lg-5 px-md-5 px-sm-4 px-4">
        <div className="font-size-26">Art Picks</div>
        <div className="font-size-26 mb-4 text-secondary">Recent Art Pics</div>
        <div className="row mx-0">
            {isMobile ?
                <div className="d-flex flex-nowrap row gap-4 overflow-hidden">
                    <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5 px-0')}
                        key={contents[0]?.id}
                        img={contents[0]?.img}
                        description={contents[0]?.description}
                        title={contents[0]?.title}
                        secondDescription={contents[0]?.secondDescription}
                        price={contents[0]?.price}
                    />
                    <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5 px-0')}
                        key={contents[1]?.id}
                        img={contents[1]?.img}
                        description={contents[1]?.description}
                        title={contents[1]?.title}
                        secondDescription={contents[1]?.secondDescription}
                        price={contents[1]?.price}
                    />
                    <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5 px-0')}
                        key={contents[2]?.id}
                        img={contents[2]?.img}
                        description={contents[2]?.description}
                        title={contents[2]?.title}
                        secondDescription={contents[2]?.secondDescription}
                        price={contents[2]?.price}
                    />
                    <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5 px-0')}
                        key={contents[3]?.id}
                        img={contents[3]?.img}
                        description={contents[3]?.description}
                        title={contents[3]?.title}
                        secondDescription={contents[3]?.secondDescription}
                        price={contents[3]?.price}
                    />
                    <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5 px-0')}
                        key={contents[4]?.id}
                        img={contents[4]?.img}
                        description={contents[4]?.description}
                        title={contents[4]?.title}
                        secondDescription={contents[4]?.secondDescription}
                        price={contents[4]?.price}
                    />
                </div>
                : <div className="row">
                    <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5')}
                        key={contents[0]?.id}
                        img={contents[0]?.img}
                        description={contents[0]?.description}
                        title={contents[0]?.title}
                        secondDescription={contents[0]?.secondDescription}
                        price={contents[0]?.price}
                    />
                    <div className="col-6 row">
                        <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5')}
                            key={contents[1]?.id}
                            img={contents[1]?.img}
                            description={contents[1]?.description}
                            title={contents[1]?.title}
                            secondDescription={contents[1]?.secondDescription}
                            price={contents[1]?.price}
                        />
                        <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5')}
                            key={contents[2]?.id}
                            img={contents[2]?.img}
                            description={contents[2]?.description}
                            title={contents[2]?.title}
                            secondDescription={contents[2]?.secondDescription}
                            price={contents[2]?.price}
                        />
                        <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5')}
                            key={contents[3]?.id}
                            img={contents[3]?.img}
                            description={contents[3]?.description}
                            title={contents[3]?.title}
                            secondDescription={contents[3]?.secondDescription}
                            price={contents[3]?.price}
                        />
                        <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-6', 'mb-5')}
                            key={contents[4]?.id}
                            img={contents[4]?.img}
                            description={contents[4]?.description}
                            title={contents[4]?.title}
                            secondDescription={contents[4]?.secondDescription}
                            price={contents[4]?.price}
                        />
                    </div>
                </div>
            }

        </div>
    </div>

}