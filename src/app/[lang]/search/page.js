import { getDictionary } from '../../[lang]/dictionaries';
import '../../../styles/common.css';
import SearchPage from '../../../view/public/search/SearchPage';
import App from './../App';

export default async function Search({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <SearchPage />
        </App >
    );
}
