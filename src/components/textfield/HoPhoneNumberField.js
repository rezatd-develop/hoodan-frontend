'use client'

import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import PropTypes from 'prop-types';
import * as React from 'react';
import { IMaskInput } from 'react-imask';
import { useSelector } from 'react-redux';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="(0#00) 000-0000"
            definitions={{
                '#': /[1-9]/,
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default function HoPhoneNumberField(props) {
    const t = useSelector((state) => state.dictionary.t);

    const [values, setValues] = React.useState({
        textmask: '',
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
        props?.onChange(event.target.value);
    };

    return (
        <FormControl variant="standard" className='w-100'>
            <InputLabel htmlFor="formatted-text-mask-input">{t.signing.phoneNumber}</InputLabel>
            <Input
                value={props?.value}
                onChange={handleChange}
                name="textmask"
                id="formatted-text-mask-input"
                inputComponent={TextMaskCustom}
            />
        </FormControl>
    );
}
