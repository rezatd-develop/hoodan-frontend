import { getDictionary } from '../../../dictionaries';
import '../../../../../styles/common.css';
import App from '../../../App';
import ProfileLayout from '../../../../../layouts/profile/ProfileLayout';
import AdminOrderDetailPage from '@/view/admin/order/AdminOrderDetail';

export default async function AdminOrderDetail({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <ProfileLayout>
                <AdminOrderDetailPage />
            </ProfileLayout>
        </App >
    );
}
