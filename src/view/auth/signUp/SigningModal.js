'use client'

import Image from 'next/image';
import HoModal from '../../../components/modal/HoModal';
import logoImg from '../../../media/images/company/logo.png';
import SigningModalPhoneNumber from './SigningModalPhoneNumber';
import SigningModalSignUpForm from './SigningModalSignUpForm';
import SigningModalOtp from './SigningModalOtp';
import { useState } from 'react';

export default function SignUpModal() {
    const [signingStep, setSigningStep] = useState(3)
    return (
        <HoModal maxWidth='xs'
            dialogTitleClassName='d-flex justify-content-center'
            title={<Image src={logoImg} width={50} />}>
            {signingStep === 1
                ? <SigningModalPhoneNumber />
                : signingStep === 2
                    ? <SigningModalOtp />
                    : <SigningModalSignUpForm />}
        </HoModal>
    )
}