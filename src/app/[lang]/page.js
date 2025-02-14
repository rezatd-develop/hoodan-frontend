import '../../styles/common.css';
import { getDictionary } from '../[lang]/dictionaries';
import App from './App';

export default async function Home({ params }) {
  const t = await getDictionary(params?.lang);

  return (
    <App params={params} t={t} lang={params?.lang} />
  );
}
