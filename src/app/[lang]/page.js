import { getDictionary } from '../[lang]/dictionaries';
import Home from '../../view/public/home/Home';
import SignUpModal from '../../view/auth/signUp/SigningModal';
import '../../styles/common.css';
import App from './App';

export default async function Page({ params }) {
  const t = await getDictionary(params?.lang);

  return (
    <App params={params} t={t} lang={params?.lang} >
      <SignUpModal />
      <Home />
    </App >
  );
}
