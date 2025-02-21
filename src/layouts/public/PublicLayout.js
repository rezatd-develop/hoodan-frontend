import PuHeader from "../../layouts/public/puHeader/PuHeader";
import PuFooter from './puFooter/PuFooter';
import PuCopyRight from './PuCopyRight';
import '../../styles/layout/public/public.css';

export default function PublicLayout({ children }) {

  return (
    <div>
      <PuHeader />
      {children}
      <PuFooter />
      <PuCopyRight />
    </div>
  );
}
