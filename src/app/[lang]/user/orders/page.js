import { getDictionary } from '../../dictionaries';
import ProfileLayout from '../../../../layouts/profile/ProfileLayout';
import '../../../../styles/common.css';
import App from '../../App';
import OrdersPage from '../../../../view/public/orders/OrdersPage'

export default async function Profiler({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <ProfileLayout>
                <OrdersPage />
            </ProfileLayout>
        </App >
    );
}
