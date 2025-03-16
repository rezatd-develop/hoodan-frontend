'use client'

import { useState } from 'react';
import HoTextField from '../../../components/textfield/HoTextField';
import HoPrimaryButton from '@/components/button/HoPrimaryButton';
import { useSelector } from 'react-redux';
import HoPhoneNumberField from '../../../components/textfield/HoPhoneNumberField';
import { correctPhoneNumberFormat } from '@/utilities/CommonHelper';

export default function SigningModalPhoneNumber(props) {
    const t = useSelector((state) => state.dictionary.t);
    const [phoneNumber, setPhoneNumber] = useState(null);

    const phoneNumberChanged = (data) => {
        let correctedPhoneNumber = correctPhoneNumberFormat(data);
        setPhoneNumber(correctedPhoneNumber)
    }

    return (
        <div>
        {console.log('***phoneNumber',phoneNumber)}
            <div>
                <div className='font-size-20'>{t?.signing?.signUpOrLogin}</div>
                <HoPhoneNumberField onChange={phoneNumberChanged} />
                <HoPrimaryButton onClick={() => props?.nextButtonClicked(phoneNumber, 1)} className='py-3 w-100 mt-3'>{t?.signing?.continue}</HoPrimaryButton>
            </div>
            <div className='text-center mt-4'>
                {t?.signing?.policyRules}
            </div>
        </div>
    )
}