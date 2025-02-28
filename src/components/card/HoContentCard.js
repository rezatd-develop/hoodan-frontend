import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { convertDateToDayMonth } from "@/utilities/CommonHelper";

export default function HoContentCard(props) {
    return <Link className={clsx(props?.containerClassName, 'text-decoration-none text-dark')} href={props?.href || '/'}>
        <Image width={300} height={300} src={props?.img} alt="blog image" className="w-100 h-auto" />
        {!props?.isArticle &&
            <div className="font-size-15 my-1">{props?.description}</div>
        }
        {props?.isArticle &&
            <div className="font-size-15 my-2 text-secondary d-flex justify-content-between align-items-center">
                <div>{convertDateToDayMonth(props?.publishDate)}</div>
                <div className="text-truncate max-width-150">{props?.categories?.map(item => `${item}, `)}</div>
            </div>
        }
        <div className="font-size-26 my-2">{props?.title}</div>
        {props?.isArticle &&
            <div className="font-size-15 my-2 text-secondary">{props?.description}</div>
        }
        <div className="font-size-15 my-1 text-secondary mb-4">{props?.secondDescription}</div>
        <div className="font-size-26">{props?.price}</div>
        {props?.isArticle &&
            <div className="font-size-15 mt-5">Read</div>
        }
    </Link>
}