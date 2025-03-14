import Link from "next/link";
import { useSelector } from "react-redux";

export default function PuFooter() {
  const isSignedIn = localStorage.getItem('token');
  const t = useSelector((state) => state.dictionary.t);

  return <div className="px-lg-5 px-md-5 px-sm-4 px-4">
    <div className=" row border border-top mt-5 pt-5">
      <div className="col-lg-3 col-md-3 col-sm-6 col-6 flex-column justify-content-center align-items-start">
        <div className="mb-3 ps-3">
          <Link href='/' className="fw-bold text-decoration-none text-black">{t?.footer?.Hoodan}</Link>
        </div>
        <div className="mb-3 ps-3">
          <Link className="text-decoration-none text-black" href='/classes' >{t?.footer?.classes}</Link>
        </div>
        <div className="mb-3 ps-3">
          <Link className="text-decoration-none text-black" href='/books' >{t?.footer?.books}</Link>
        </div>
        <div className="mb-3 ps-3">
          <Link className="text-decoration-none text-black" href='/artItems' >{t?.footer?.artItems}</Link>
        </div>
        <div className="mb-3 ps-3">
          <Link className="text-decoration-none text-black" href='/articles' >{t?.footer?.articles}</Link>
        </div>
      </div>
      {!!isSignedIn &&
        <div className="col-lg-3 col-md-3 col-sm-6 col-6 flex-column justify-content-center align-items-start">
          <div className="mb-3 ps-3">
            <Link href='/user/profile' className="fw-bold text-decoration-none text-black">{t?.footer?.usersArea}</Link>
          </div>
          <div className="mb-3 ps-3">
            <Link className="text-decoration-none text-black" href='/user/profile' >{t?.footer?.profile}</Link>
          </div>
          <div className="mb-3 ps-3">
            <Link className="text-decoration-none text-black" href='/user/cart' >{t?.footer?.cart}</Link>
          </div>
        </div>}
    </div>
  </div>;
}
