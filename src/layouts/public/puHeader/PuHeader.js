'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import HoTextInput from "../../../components/input/HoTextInput";
import logo from "../../../media/images/company/logo.png";
import HoPrimaryButton from '../../../components/button/HoPrimaryButton';
import HoSecondaryButton from '../../../components/button/HoSecondaryButton';

export default function PuHeader() {
  const t = useSelector((state) => state.dictionary.t);
  const [selectedNavLink, setSelectedNavLink] = useState(null);

  const navLinks = [
    { id: 1, label: t?.common?.buy, href: '/' },
    { id: 1, label: t?.common?.priceDatabase, href: '/' },
    { id: 1, label: t?.common?.editorial, href: '/' },
  ];

  return (
    <nav className="navbar navbar-expand-lg px-4">
      <div className="container-fluid d-flex align-items-center">
        <Link className="navbar-brand" href="/">
          <Image src={logo} alt="hoodan logo" width={40} height={40} />
        </Link>
        <HoTextInput placeholder={t?.hedaer?.searchBarPlaceholder}
          className='w-100 me-3' />

        <div className="collapse navbar-collapse d-flex align-items-center" id="navbarSupportedContent">
          <div className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">

            {navLinks?.map(item =>
              <Link className="nav-link white-space active"
                href={item.href}
                key={item.id}
                onClick={() => setSelectedNavLink(item)}
              >
                {item.label}
              </Link>)}

            <HoSecondaryButton className='ms-2'>
              {t?.common?.login}
            </HoSecondaryButton>
            <HoPrimaryButton className='ms-2'>
              {t?.common?.signUp}
            </HoPrimaryButton>


            {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

          </div>
        </div>
      </div>
    </nav >
  );
}
