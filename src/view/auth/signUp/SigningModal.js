'use client'

import { useState } from 'react';
import Image from 'next/image';
import HoModal from '../../../components/modal/HoModal';
import logoImg from '../../../media/images/company/logo.png';
import SigningModalPhoneNumber from './SigningModalPhoneNumber';
import SigningModalSignUpForm from './SigningModalSignUpForm';
import SigningModalOtp from './SigningModalOtp';
import { SendPhoneAuthService, SendOTPAuthService, SendRegisterAuthService } from "../../../services/Api's/public/auth/publicAuthApiRoutes";

export default function SigningModal(props) {
    const [signingStep, setSigningStep] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [otp, setOtp] = useState(null);

    const sendPhoneAuth = (data) => {
        let requestBody = {
            phone: data
        }
        SendPhoneAuthService(requestBody, (data) => data.hasError === false && setSigningStep(2))
    }

    const sendOTPAuthCallback = (data) => {
        if (!data.hasError) {
            if (data?.continueToSignUp) {
                setSigningStep(3)
            } else {
                props?.closeModal()
            }
        }
    }

    const verifyOtp = (data) => {
        let requestBody = {
            phone: phoneNumber,
            code: data
        };
        SendOTPAuthService(requestBody, sendOTPAuthCallback)
    }

    const registerUser = (data) => {
        let bodyRequest = {
            firstName: data?.firstName,
            lastName: data?.lastName,
            phone: phoneNumber
        };
        SendRegisterAuthService(bodyRequest, (data) => data.hasError === false && props?.closeModal())
    }

    const nextButtonClicked = (data, currentSigningStep) => {
        if (currentSigningStep === 1) {
            sendPhoneAuth(data);
            setPhoneNumber(data)
        }

        if (currentSigningStep === 2) {
            verifyOtp(data);
            setOtp(data);
        }

        if (currentSigningStep === 3) {
            registerUser(data);
        }
    }

    return (
        <HoModal maxWidth='xs'
            open={props?.open}
            dialogTitleClassName='d-flex justify-content-center'
            title={<Image src={logoImg} width={50} />}>
            {signingStep === 1
                ? <SigningModalPhoneNumber nextButtonClicked={nextButtonClicked} />
                : signingStep === 2
                    ? <SigningModalOtp nextButtonClicked={nextButtonClicked} />
                    : <SigningModalSignUpForm nextButtonClicked={nextButtonClicked} />}
        </HoModal>
    )
}