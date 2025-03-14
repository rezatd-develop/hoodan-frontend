'use client'

import { useState } from 'react';
import HoTextField from '../../../components/textfield/HoTextField';
import HoPrimaryButton from '@/components/button/HoPrimaryButton';
import { useSelector } from 'react-redux';

export default function SigningModalOtp(props) {
    const [otp, setOtp] = useState(null);
    const t = useSelector((state) => state.dictionary.t);

    return (
        <div>
            <div>
                <div className='font-size-20'>{t?.signing?.enterCode}</div>
                <div className='mt-1 text-secondary'>{t?.signing?.pleaseEnterCode}</div>
                <HoTextField onChange={(data) => setOtp(data)} label={t?.signing?.enterCode} className='w-100 mt-4' />
                <HoPrimaryButton onClick={() => props?.nextButtonClicked(otp, 2)} className='py-3 w-100 mt-3'>{t?.signing?.enter}</HoPrimaryButton>
            </div>
            <div className='text-center mt-4'>
            {t?.signing?.policyRules}
            </div>
        </div>
    )
}