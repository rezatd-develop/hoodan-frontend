'use client'

import clsx from 'clsx';
import { useIsMobile } from '@/utilities/CommonHelper';
import HoContentCard from '../../../components/card/HoContentCard';

export default function HomeContentRow(props) {
    const isMobile = useIsMobile();

    return (
        <div className={clsx(props?.className || "px-lg-5 px-md-5 px-sm-4 px-4")}>
            <div className="font-size-26">{props?.title}</div>
            <div className="font-size-26 mb-4 text-secondary">{props?.description}</div>
            <div className='d-flex row flex-nowrap overflow-auto'>

                {props?.contents?.length > 0 && props?.contents?.map((content) => (
                    <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-3','mb-5')}
                        key={content?.id}
                        img={content?.img}
                        description={content?.description}
                        title={content?.title}
                        secondDescription={content?.secondDescription}
                        price={content?.price}
                    />
                ))}
            </div>
        </div>)
}