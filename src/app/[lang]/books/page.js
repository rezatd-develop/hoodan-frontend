import { getDictionary } from '../../[lang]/dictionaries';
import BooksPage from '../../../view/public/book/BooksPage';
import '../../../styles/common.css';
import App from './../App';

export default async function Books({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <BooksPage />
        </App >
    );
}
