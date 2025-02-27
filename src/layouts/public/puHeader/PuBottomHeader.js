'use client'

import Link from "next/link";
import { useSelector } from "react-redux";

export default function PuBottomHeader() {
    const t = useSelector((state) => state.dictionary.t);

    const navLinks = [
        { id: 4, label: 'Classes', href: '/classes' },
        { id: 5, label: 'Books', href: '/books' },
        { id: 6, label: 'Art Items', href: '/artItems' },
        { id: 7, label: 'Articles', href: '/articles' },
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