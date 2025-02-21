import HoTextField from '../../../components/textfield/HoTextField';
import HoPrimaryButton from '@/components/button/HoPrimaryButton';

export default function SigningModalPhoneNumber() {
    return (
        <div>
            <div>
                <div className='font-size-20'>Sign Up or Log In</div>
                <HoTextField label='Phone Number' className='w-100 mt-4' />
                <HoPrimaryButton className='py-3 w-100 mt-3'>Continiue</HoPrimaryButton>
            </div>
            <div className='text-center mt-4'>
                By clicking Sign Up or Continue with Email, Apple, Google, or Facebook, you agree to Artsy’s Terms and Conditions and Privacy Policy.
            </div>
        </div>
    )
}