import { getDictionary } from '../../../[lang]/dictionaries';
import '../../../../styles/common.css';
import App from './../../App';
import AdminLayout from '../../../../layouts/admin/AdminLayout';
import AdminUsersPage from '../../../../view/admin/users/AdminUsersPage';

export default async function AdminUsers({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <AdminLayout>
                <AdminUsersPage />
            </AdminLayout>
        </App >
    );
}
