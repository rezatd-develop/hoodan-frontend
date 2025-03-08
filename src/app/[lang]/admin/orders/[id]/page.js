import { getDictionary } from '../../../dictionaries';
import '../../../../../styles/common.css';
import App from '../../../App';
import AdminLayout from '../../../../../layouts/admin/AdminLayout';
import AdminOrderDetailPage from '@/view/admin/order/AdminOrderDetail';

export default async function AdminOrderDetail({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <AdminLayout>
                <AdminOrderDetailPage />
            </AdminLayout>
        </App >
    );
}
