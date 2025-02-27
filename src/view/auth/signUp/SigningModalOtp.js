'use client'

import { useState } from 'react';
import HoTextField from '../../../components/textfield/HoTextField';
import HoPrimaryButton from '@/components/button/HoPrimaryButton';

export default function SigningModalOtp(props) {
    const [otp, setOtp] = useState(null);
    return (
        <div>
            <div>
                <div className='font-size-20'>Enter Code</div>
                <div className='mt-1 text-secondary'>Please Enter code you've received</div>
                <HoTextField onChange={(data) => setOtp(data)} label='Enter Code' className='w-100 mt-4' />
                <HoPrimaryButton onClick={() => props?.nextButtonClicked(otp, 2)} className='py-3 w-100 mt-3'>Enter</HoPrimaryButton>
            </div>
            <div className='text-center mt-4'>
                By clicking Sign Up or Continue with Email, Apple, Google, or Facebook, you agree to Artsy’s Terms and Conditions and Privacy Policy.
            </div>
        </div>
    )
}