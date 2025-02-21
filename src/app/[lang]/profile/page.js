import { getDictionary } from '../../[lang]/dictionaries';
import ProfilePage from '../../../view/public/profile/ProfilePage';
import '../../../styles/common.css';
import App from './../App';

export default async function Profiler({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <ProfilePage />
        </App >
    );
}
