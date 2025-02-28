import Image from "next/image";

export default function HoContentCard(props) {
    return <div className={props?.containerClassName}>
        <Image width={300} height={300} src={props?.img} alt="blog image" className="w-100 h-auto" />
        <div className="font-size-15 my-1">{props?.description}</div>
        <div className="font-size-26">{props?.title}</div>
        <div className="font-size-15 my-1 text-secondary mb-4">{props?.secondDescription}</div>
        <div className="font-size-26">{props?.price}</div>
    </div>
}