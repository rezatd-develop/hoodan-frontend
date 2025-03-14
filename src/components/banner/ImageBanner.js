'use client'

import { useIsMobile } from "@/utilities/CommonHelper";
import bannerSample from '../../media/images/samples/banner_sample.webp';
import clsx from "clsx";
import Image from "next/image";
import HoSecondaryButton from "../button/HoSecondaryButton";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function ImageBanner() {
    const isMobile = useIsMobile();
    const t = useSelector((state) => state.dictionary.t);

    return (
        <div className="px-lg-5 px-md-5 px-sm-4 px-4">
            <div className="row mx-0">
                <div className={clsx(isMobile ? 'col-12' : 'col-4', 'background-light-gray d-flex flex-column justify-content-center align-items-center')}>
                    <div className={clsx(isMobile ? 'font-size-26' : 'font-size-40', 'text-center p-4')}>{t?.home?.meetYourNewArtAdvisor}</div>
                    <div className="col-lg-6 col-md-6 col-sm-10 mt-3">
                        <Link href='/'>
                            <HoSecondaryButton className='w-100 py-3 mb-4'>{t?.common?.clickHere}</HoSecondaryButton>
                        </Link>
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
        </div >

    );
}
