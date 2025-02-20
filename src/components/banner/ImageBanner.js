'use client'

import { useIsMobile } from "@/utilities/CommonHelper";
import bannerSample from '../../media/images/samples/banner_sample.webp';
import clsx from "clsx";
import Image from "next/image";
import HoSecondaryButton from "../button/HoSecondaryButton";

export default function ImageBanner() {
    const isMobile = useIsMobile();

    return (
        <div className="row mx-0 flex-nowrap px-lg-5 px-md-5 px-sm-4 px-4">
            <div className={clsx(isMobile ? 'col-12' : 'col-4', 'background-light-gray d-flex flex-column justify-content-center align-items-center')}>
                <div className="font-size-40 text-center">Meet your new art advisor</div>
                <div className="col-lg-6 col-md-6 col-sm-10 mt-3">
                    <HoSecondaryButton className='w-100 py-3'>click here</HoSecondaryButton>
                </div>
            </div>
            <div className={clsx(isMobile ? 'col-12' : 'col-8')} style={{ height: '350px', position: 'relative' }}>
                <Image
                    src={bannerSample}
                    alt="Banner"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
}
