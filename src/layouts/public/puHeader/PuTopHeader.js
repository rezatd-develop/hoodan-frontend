'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HoTextInput from "../../../components/input/HoTextInput";
import logo from "../../../media/images/company/logo.png";
import HoPrimaryButton from '../../../components/button/HoPrimaryButton';
import HoSecondaryButton from '../../../components/button/HoSecondaryButton';
import { useIsMobile } from '../../../utilities/CommonHelper';
import SigningModal from '../../../view/auth/signUp/SigningModal';
import { useRouter } from "next/navigation";


export default function PuTopHeader(props) {
    const t = useSelector((state) => state.dictionary.t);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const isMobile = useIsMobile();
    const [showSigningModal, setShowSigningModal] = useState(false);
    const [searchText, setSearchText] = useState('')
    const isSignedIn = localStorage.getItem('token')
    const router = useRouter();

    useEffect(() => {
        const needAuthenticationInUrlParams = location?.search?.includes('needAuthentication');
        if (needAuthenticationInUrlParams) setShowSigningModal(true);
    }, [])

    const handleMenuNavigation = (menu) => {
        if (!menu) return;
        setActiveMenu(menu);
    };

    const toggleShowSigningModal = () => setShowSigningModal(!showSigningModal);
    const closeModal = (needReload) => {
        setShowSigningModal(false);
        router.push('/')
    }

    const mobileNavLinks = [
        { id: 4, label: 'Classes', href: '/classes' },
        { id: 5, label: 'Books', href: '/Books' },
        { id: 6, label: 'Art Items', href: '/ArtItems' },
        { id: 7, label: 'Articles', href: '/articles' },
    ];

    const navLinks = [

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

            {!isSubmenu &&
                isSignedIn ?
                <div className="auth-buttons">
                    <Link href='/user/profile'>
                        <HoSecondaryButton onClick={toggleShowSigningModal} className='w-100 mt-3'>{t?.hedaer?.profile}</HoSecondaryButton>
                    </Link>
                    <Link href='/user/cart'>
                        <HoPrimaryButton onClick={toggleShowSigningModal} className='w-100 mt-2'>{t?.hedaer?.cart}</HoPrimaryButton>
                    </Link>
                </div>
                : (
                    <div className="auth-buttons">
                        <HoSecondaryButton onClick={toggleShowSigningModal} className='w-100 mt-3'>{t?.common?.login}</HoSecondaryButton>
                        <HoPrimaryButton onClick={toggleShowSigningModal} className='w-100 mt-2'>{t?.common?.signUp}</HoPrimaryButton>
                    </div>
                )}

        </div>
    );

    const searchBarEntered = (data) => {
        if (data?.key === 'Enter') {
            router.push(`/search/?searchText=${searchText}`)
        }
    }

    return (
        <div className="container-fluid d-flex align-items-center px-lg-4 px-md-4 px-sm-3 px-3 py-0">
            <Link className="navbar-brand" href="/">
                <Image src={logo} alt="hoodan logo" width={40} height={40} />
            </Link>

            <HoTextInput
                onChange={(data) => setSearchText(data?.target?.value)}
                onKeyDown={searchBarEntered}
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

                    {isSignedIn
                        ? <>
                            <Link href='/user/profile'>
                                <HoSecondaryButton className='ms-2'>{t?.hedaer?.profile}</HoSecondaryButton>
                            </Link>
                            <Link href='/user/cart'>
                                <HoPrimaryButton className='ms-2'>{t?.hedaer?.cart}</HoPrimaryButton>
                            </Link>
                        </>
                        : <>
                            <HoSecondaryButton onClick={toggleShowSigningModal} className='ms-2'>{t?.common?.login}</HoSecondaryButton>
                            <HoPrimaryButton onClick={toggleShowSigningModal} className='ms-2'>{t?.common?.signUp}</HoPrimaryButton>
                        </>
                    }
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
            {showSigningModal &&
                <SigningModal open={true}
                    closeModal={closeModal}
                />
            }
        </div>
    );
}