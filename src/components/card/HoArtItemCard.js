import Image from "next/image";
import blogSample from '../../media/images/samples/blog_sample.webp';

export default function HoArtItemCard(props) {
    return <div className={props?.containerClassName}>
        <Image src={blogSample} alt="blog image" className="w-100 h-auto" />
        <div className="font-size-15 my-1">{props?.description}</div>
        <div className="font-size-26">{props?.title}</div>
    </div>
}