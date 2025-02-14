import PuHeader from "../../layouts/public/puHeader/PuHeader";
import PuFooter from "../../layouts/public/PuFooter/PuFooter";
import '../../styles/layout/public/public.css';

export default function PublicLayout({ children }) {

  return (
    <div>
      <PuHeader />
      {children}
      <PuFooter />
    </div>
  );
}
