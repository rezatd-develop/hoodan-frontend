import PuHeader from "../../layouts/public/puHeader/PuHeader";
import PuFooter from "../../layouts/public/PuFooter/PuFooter";

export default function PublicLayout({ children }) {

  return (
    <div>
      <PuHeader />
      {children}
      <PuFooter />
    </div>
  );
}
