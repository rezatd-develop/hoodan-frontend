import { getDictionary } from '../../../[lang]/dictionaries';
import Home from '../../../../view/public/home/Home';
import '../../../../styles/common.css';
import ClassPage from '../../../../view/public/class/ClassPage';
import App from './../../App';

export default async function Class({ params }) {
  const t = await getDictionary(params?.lang);

  return (
    <App params={params} t={t} lang={params?.lang} >
      <ClassPage />
    </App >
  );
}
