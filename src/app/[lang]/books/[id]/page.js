import { getDictionary } from '../../../[lang]/dictionaries';
import BookPage from '../../../../view/public/book/BookPage';
import '../../../../styles/common.css';
import App from './../../App';

export default async function Book({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <BookPage />
        </App >
    );
}
