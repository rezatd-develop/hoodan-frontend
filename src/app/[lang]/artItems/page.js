import { getDictionary } from '../../[lang]/dictionaries';
import '../../../styles/common.css';
import App from './../App';
import ArtItemsPage from '../../../view/public/artItems/ArtItemsPage';

export default async function ArtItems({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <ArtItemsPage />
        </App >
    );
}
