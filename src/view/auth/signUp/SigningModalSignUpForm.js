'use client'

import { useState } from 'react';
import HoTextField from '../../../components/textfield/HoTextField';
import HoPrimaryButton from '@/components/button/HoPrimaryButton';
import { useSelector } from 'react-redux';

export default function SigningModalSignUpForm(props) {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const t = useSelector((state) => state.dictionary.t);

    return (
        <div>
            <div>
                <div className='font-size-20'>{t?.signing?.welcome}</div>
                <HoTextField onChange={(data) => setFirstName(data)} label={t?.signing?.firstName} className='w-100 mt-3' />
                <HoTextField onChange={(data) => setLastName(data)} label={t?.signing?.lastName} className='w-100 mt-3' />

                <HoPrimaryButton onClick={() => props?.nextButtonClicked({ firstName, lastName }, 3)}
                    className='py-3 w-100 mt-3'>{t?.signing?.continue}</HoPrimaryButton>
            </div>
            <div className='text-center mt-4'>
            {t?.signing?.policyRules}
            </div>
        </div>
    )
}