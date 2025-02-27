import { getDictionary } from '../../[lang]/dictionaries';
import '../../../styles/common.css';
import App from './../App';
import ArticlesPage from '../../../view/public/article/ArticlesPage';

export default async function Articles({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <ArticlesPage />
        </App >
    );
}
