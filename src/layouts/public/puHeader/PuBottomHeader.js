'use client'

import Link from "next/link";
import { useSelector } from "react-redux";

export default function PuBottomHeader() {
    const t = useSelector((state) => state.dictionary.t);

    const navLinks = [
        { id: 1, label: t?.bottomHeader?.whatsnew, href: '/' },
        { id: 2, label: t?.bottomHeader?.artists, href: '/' },
        { id: 3, label: t?.bottomHeader?.artworks, href: '/' },
        { id: 4, label: t?.bottomHeader?.auctions, href: '/' },
        { id: 5, label: t?.bottomHeader?.viewingRooms, href: '/' },
        { id: 6, label: t?.bottomHeader?.galleries, href: '/' },
        { id: 7, label: t?.bottomHeader?.fairsAndEvents, href: '/' },
        { id: 8, label: t?.bottomHeader?.shows, href: '/' },
        { id: 9, label: t?.bottomHeader?.museums, href: '/' },
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