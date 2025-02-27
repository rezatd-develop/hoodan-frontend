'use client'

import { useState } from 'react';
import HoTextField from '../../../components/textfield/HoTextField';
import HoPrimaryButton from '@/components/button/HoPrimaryButton';

export default function SigningModalSignUpForm(props) {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);

    return (
        <div>
            <div>
                <div className='font-size-20'>Welcome</div>
                <HoTextField onChange={(data) => setFirstName(data)} label='First Name' className='w-100 mt-3' />
                <HoTextField onChange={(data) => setLastName(data)} label='Last Name' className='w-100 mt-3' />

                <HoPrimaryButton onClick={() => props?.nextButtonClicked({ firstName, lastName }, 3)}
                    className='py-3 w-100 mt-3'>Continiue</HoPrimaryButton>
            </div>
            <div className='text-center mt-4'>
                By clicking Sign Up or Continue with Email, Apple, Google, or Facebook, you agree to Artsy’s Terms and Conditions and Privacy Policy.
            </div>
        </div>
    )
}