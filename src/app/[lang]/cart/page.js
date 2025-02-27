import { getDictionary } from '../../[lang]/dictionaries';
import CartPage from '../../../view/public/cart/CartPage';
import ProfileLayout from '../../../layouts/profile/ProfileLayout';
import '../../../styles/common.css';
import App from './../App';

export default async function Cart({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <ProfileLayout>
                <CartPage />
            </ProfileLayout>
        </App >
    );
}
