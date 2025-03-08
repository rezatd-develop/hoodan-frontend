import { getDictionary } from '../../[lang]/dictionaries';
import '../../../styles/common.css';
import App from './../App';
import AdminLayout from '../../../layouts/admin/AdminLayout';
import AdminOrderPage from '../../../view/admin/order/AdminOrderPage';

export default async function Admin({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <AdminLayout>
                <AdminOrderPage />
            </AdminLayout>
        </App >
    );
}
