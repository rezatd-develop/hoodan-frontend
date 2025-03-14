import { getDictionary } from '../../../dictionaries';
import '../../../../../styles/common.css';
import App from '../../../App';
import AdminLayout from '../../../../../layouts/admin/AdminLayout';
import AdminBlogDetailPage from '../../../../../view/admin/blog/AdminBlogDetailPage';

export default async function AdminCreateBlog({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <AdminLayout>
                <AdminBlogDetailPage />
            </AdminLayout>
        </App >
    );
}
