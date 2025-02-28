import { getDictionary } from '../../../[lang]/dictionaries';
import '../../../../styles/common.css';
import ArticlePage from '../../../../view/public/article/ArticlePage'
import App from './../../App';

export default async function Article({ params }) {
  const t = await getDictionary(params?.lang);

  return (
    <App params={params} t={t} lang={params?.lang} >
      <ArticlePage />
    </App >
  );
}
