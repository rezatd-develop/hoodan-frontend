import PuHeader from "../../layouts/public/puHeader/PuHeader";
import '../../styles/layout/public/public.css';

export default function PublicLayout({ children }) {

  return (
    <div>
      <PuHeader />
      {children}
    </div>
  );
}
