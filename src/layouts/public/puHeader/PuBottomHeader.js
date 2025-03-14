'use client'

import Link from "next/link";
import { useSelector } from "react-redux";

export default function PuBottomHeader() {
    const t = useSelector((state) => state.dictionary.t);

    const navLinks = [
        { id: 4, label: t?.hedaer?.classes, href: '/classes' },
        { id: 5, label: t?.hedaer?.books, href: '/books' },
        { id: 6, label: t?.hedaer?.artItems, href: '/artItems' },
        { id: 7, label: t?.hedaer?.articles, href: '/articles' },
    ]

    return <div className="container-fluid px-5 py-3 line-height-1">
        {navLinks?.map(item =>
            <Link
                className="text-decoration-none me-4 blue-hover black-text"
                key={item?.id}
                href={item.href}>
                {item?.label}
            </Link>
        )}
    </div>
}