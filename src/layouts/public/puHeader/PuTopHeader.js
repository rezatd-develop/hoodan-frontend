'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import HoTextInput from "../../../components/input/HoTextInput";
import logo from "../../../media/images/company/logo.png";
import HoPrimaryButton from '../../../components/button/HoPrimaryButton';
import HoSecondaryButton from '../../../components/button/HoSecondaryButton';
import { useIsMobile } from '../../../utilities/CommonHelper';
// import './PuTopHeader.css';

export default function PuTopHeader() {
    const t = useSelector((state) => state.dictionary.t);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const isMobile = useIsMobile();


    const handleMenuNavigation = (menu) => {
        if (!menu) return;
        setActiveMenu(menu); // Set new active menu
    };

    const mobileNavLinks = [
        {
            id: 1,
            label: t?.bottomHeader?.whatsnew,
            href: '/',
            children: [
                { id: 11, label: t?.bottomHeader?.whatsnew, href: '/' }
            ]
        },
        {
            id: 2,
            label: t?.bottomHeader?.artists,
            href: '/',
            children: [
                { id: 22, label: t?.bottomHeader?.whatsnew, href: '/' }
            ]
        },
        {
            id: 3,
            label: t?.bottomHeader?.artworks,
            href: '/',
            children: [
                { id: 33, label: t?.bottomHeader?.whatsnew, href: '/' }
            ]
        },
        { id: 4, label: t?.bottomHeader?.auctions, href: '/' },
        { id: 5, label: t?.bottomHeader?.viewingRooms, href: '/' },
        { id: 6, label: t?.bottomHeader?.galleries, href: '/' },
        { id: 7, label: t?.bottomHeader?.fairsAndEvents, href: '/' },
        { id: 8, label: t?.bottomHeader?.shows, href: '/' },
        { id: 9, label: t?.bottomHeader?.museums, href: '/' },
    ];

    const navLinks = [
        { id: 1, label: t?.common?.buy, href: '/' },
        { id: 2, label: t?.common?.priceDatabase, href: '/' },
        { id: 3, label: t?.common?.editorial, href: '/' },
        ...(isMobile ? mobileNavLinks : []),
    ];

    const renderMenu = (menuItems, isSubmenu = false) => (
        <div className={`menu-panel ${isSubmenu ? 'submenu active' : ''}`}>

            {isSubmenu && (
                <button className="back-button" onClick={handleBack}>
                    ← Back
                </button>
            )}

            {menuItems.map(item => (
                <div key={item.id} className="menu-item">
                    {item.children ? (
                        <div className="parent-item" onClick={() => handleMenuNavigation(item.children)}>
                            {item.label}
                            <span className="arrow">→</span>
                        </div>
                    ) : (
                        <Link
                            className="mobile-menu-item"
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    )}
                </div>
            ))}

            {!isSubmenu && (
                <div className="auth-buttons">
                    <HoSecondaryButton className='w-100 mt-3'>{t?.common?.login}</HoSecondaryButton>
                    <HoPrimaryButton className='w-100 mt-2'>{t?.common?.signUp}</HoPrimaryButton>
                </div>
            )}
        </div>
    );

    return (
        <div className="container-fluid d-flex align-items-center px-lg-4 px-md-4 px-sm-3 px-3 py-0">
            <Link className="navbar-brand" href="/">
                <Image src={logo} alt="hoodan logo" width={40} height={40} />
            </Link>

            <HoTextInput
                placeholder={isMobile ? t?.hedaer?.searchBarPlaceholderMobile : t?.hedaer?.searchBarPlaceholder}
                className='w-100 me-3 search-icon'
            />

            {!isMobile ? (
                <div className="me-auto mb-2 mb-lg-0 d-flex align-items-center flex-nowrap">
                    {navLinks.map(item => (
                        <Link
                            className="white-space active blue-hover black-text text-decoration-none mx-2"
                            href={item.href}
                            key={item.id}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <HoSecondaryButton className='ms-2'>{t?.common?.login}</HoSecondaryButton>
                    <HoPrimaryButton className='ms-2'>{t?.common?.signUp}</HoPrimaryButton>
                </div>
            ) : (
                <>
                    <i className="bi bi-person h1 mb-0 pt-2 me-2 text-secondary"></i>
                    <i className="bi bi-list h1 mb-0 pt-2 text-secondary" onClick={() => setMenuOpen(true)}></i>

                    {/* Mobile Slide-In Menu */}
                    <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                        <button className="close-btn" onClick={() => {
                            setMenuOpen(false);
                            setActiveMenu(null);
                        }}>&times;</button>

                        <div className="menu-container">
                            {renderMenu(navLinks)}
                            {activeMenu && renderMenu(activeMenu, true)}
                        </div>
                    </div>

                    {/* Overlay */}
                    {menuOpen && <div className="mobile-menu-overlay" onClick={() => {
                        setMenuOpen(false);
                        setActiveMenu(null);
                    }}></div>}
                </>
            )}
        </div>
    );
}