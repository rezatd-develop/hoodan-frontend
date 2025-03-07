import { getDictionary } from '../../[lang]/dictionaries';
import '../../../styles/common.css';
import App from './../App';
import ProfileLayout from '../../../layouts/profile/ProfileLayout';
import AdminPage from '../../../view/admin/AdminPage';

export default async function Admin({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <ProfileLayout>
                <AdminPage />
            </ProfileLayout>
        </App >
    );
}
