import { getDictionary } from '../../../dictionaries';
import '../../../../../styles/common.css';
import App from '../../../App';
import AdminLayout from '../../../../../layouts/admin/AdminLayout';
import AdminProductDetailPage from '../../../../../view/admin/product/AdminProductDetailPage';

export default async function AdminCreateDetail({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <AdminLayout>
                <AdminProductDetailPage />
            </AdminLayout>
        </App >
    );
}
