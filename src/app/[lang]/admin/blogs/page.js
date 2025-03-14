import { getDictionary } from '../../../[lang]/dictionaries';
import '../../../../styles/common.css';
import App from './../../App';
import AdminLayout from '../../../../layouts/admin/AdminLayout';
import AdminBlogsPage from '../../../../view/admin/blog/AdminBlogsPage';

export default async function AdminBlog({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <AdminLayout>
                <AdminBlogsPage />
            </AdminLayout>
        </App >
    );
}
