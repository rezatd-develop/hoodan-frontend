'use client'

import { useState } from 'react';
import HoTextField from '../../../components/textfield/HoTextField';
import HoPrimaryButton from '@/components/button/HoPrimaryButton';
import { useSelector } from 'react-redux';

export default function SigningModalPhoneNumber(props) {
    const t = useSelector((state) => state.dictionary.t);
    const [phoneNumber, setPhoneNumber] = useState(null);

    return (
        <div>
            <div>
                <div className='font-size-20'>{t?.signing?.signUpOrLogin}</div>
                <HoTextField onChange={(data) => setPhoneNumber(data)} label={t?.signing?.phoneNumber} className='w-100 mt-4' />
                <HoPrimaryButton onClick={() => props?.nextButtonClicked(phoneNumber, 1)} className='py-3 w-100 mt-3'>{t?.signing?.continue}</HoPrimaryButton>
            </div>
            <div className='text-center mt-4'>
                {t?.signing?.policyRules}
            </div>
        </div>
    )
}