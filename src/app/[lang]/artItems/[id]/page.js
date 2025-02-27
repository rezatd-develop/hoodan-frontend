import '../../../../styles/common.css';
import ArtItemPage from '../../../../view/public/artItems/ArtItemPage';
import { getDictionary } from '../../../[lang]/dictionaries';
import App from './../../App';

export default async function ArtItem({ params }) {
    const t = await getDictionary(params?.lang);

    return (
        <App params={params} t={t} lang={params?.lang} >
            <ArtItemPage />
        </App >
    );
}
