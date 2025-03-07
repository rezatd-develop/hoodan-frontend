import { getDictionary } from '../../dictionaries';
import '../../../../styles/common.css';
import App from '../../App';
import ProfileLayout from '../../../../layouts/profile/ProfileLayout';
import AdminOrderPage from '../../../../view/admin/order/AdminOrderPage';

export default async function Admin({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <ProfileLayout>
                <AdminOrderPage />
            </ProfileLayout>
        </App >
    );
}
