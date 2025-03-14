import PuHeader from "../../layouts/public/puHeader/PuHeader";
import PuFooter from './puFooter/PuFooter';
import PuCopyRight from './PuCopyRight';
import '../../styles/layout/public/public.css';
import clsx from "clsx";
import { isCultureEn } from "@/utilities/CommonHelper";

export default function PublicLayout({ children }) {

  return (
    <div className={clsx(isCultureEn() ? "unica-font" : "yekan-bakh-bold-font")}>
      <PuHeader />
      {children}
      <PuFooter />
      <PuCopyRight />
    </div>
  );
}
