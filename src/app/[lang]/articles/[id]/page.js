import { getDictionary } from '../../../[lang]/dictionaries';
import Home from '../../../../view/public/home/Home';
import '../../../../styles/common.css';
import App from './../../App';

export default async function Article({ params }) {
  const t = await getDictionary(params?.lang);

  return (
    <App params={params} t={t} lang={params?.lang} >
    
    </App >
  );
}
