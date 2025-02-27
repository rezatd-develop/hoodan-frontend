import { getDictionary } from '../../[lang]/dictionaries';
import '../../../styles/common.css';
import ClassesPage from '../../../view/public/class/ClassesPage';
import App from './../App';

export default async function Classes({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <ClassesPage />
        </App >
    );
}
