'use client'

import Image from "next/image";
import HoSecondaryButton from "@/components/button/HoSecondaryButton";
import clsx from "clsx";
import { useIsMobile } from "@/utilities/CommonHelper";
import Link from "next/link";

export default function HomeMainCarouselSlide(props) {
    const isMobile = useIsMobile();

    return <div className="row w-100">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-0 HomeMainCarouselSlide-image">
            <Image
                width={300}
                height={300}
                src={props?.image}
                alt="carousel image"
            />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center row text-start background-light-gray p-5">
            <div className="col-lg-8 col-md-8 col-sm-12 col-12 row">
                <p className={clsx(isMobile ? "font-size-26" : "font-size-40", "mb-3")}>{props?.title}</p>
                <p className={clsx(isMobile ? "font-size-15" : "font-size-26", "text-secondary mb-4")}>{props?.description}</p>
                <Link href={props?.buttonAction} className="col-lg-6 col-md-6 col-sm-10">
                    <HoSecondaryButton className='w-100'>{props?.buttonLabel}</HoSecondaryButton>
                </Link>
            </div>
        </div>
    </div >
}