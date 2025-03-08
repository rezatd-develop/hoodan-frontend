import { getDictionary } from '../../dictionaries';
import '../../../../styles/common.css';
import App from '../../App';
import AdminLayout from '../../../../layouts/admin/AdminLayout';
import AdminProductsPage from '../../../../view/admin/product/AdminProductPage';

export default async function AdminProducts({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <AdminLayout>
                <AdminProductsPage />
            </AdminLayout>
        </App >
    );
}
