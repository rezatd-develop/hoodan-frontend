import Image from "next/image";
import HoSecondaryButton from "@/components/button/HoSecondaryButton";

export default function HomeMainCarouselSlide(props) {
    return <div className="row w-100">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-0 HomeMainCarouselSlide-image">
            <Image
                src={props?.carouselimage}
                alt="carousel image"
            />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center row text-start">
            <div className="col-8 row">
                <p className="font-size-40 mb-3">{props?.title}</p>
                <p className="font-size-23 text-secondary mb-4">{props?.description}</p>
                <div className="col-6">
                    <HoSecondaryButton className='w-100'>{props?.buttonLabel}</HoSecondaryButton>
                </div>
            </div>
        </div>
    </div>
}