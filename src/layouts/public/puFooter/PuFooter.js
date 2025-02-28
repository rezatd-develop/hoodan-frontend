import Link from "next/link";

export default function PuFooter() {
  const isSignedIn = localStorage.getItem('token');

  return <div className="px-lg-5 px-md-5 px-sm-4 px-4">
    <div className=" row border border-top mt-5 pt-5">
      <div className="col-lg-3 col-md-3 col-sm-6 col-6 flex-column justify-content-center align-items-start">
        <div className="mb-3 ps-3">
          <Link href='/' className="fw-bold text-decoration-none text-black">Hoodan</Link>
        </div>
        <div className="mb-3 ps-3">
          <Link className="text-decoration-none text-black" href='/classes' >Classes</Link>
        </div>
        <div className="mb-3 ps-3">
          <Link className="text-decoration-none text-black" href='/books' >Books</Link>
        </div>
        <div className="mb-3 ps-3">
          <Link className="text-decoration-none text-black" href='/artItems' >Art Items</Link>
        </div>
        <div className="mb-3 ps-3">
          <Link className="text-decoration-none text-black" href='/articles' >Articles</Link>
        </div>
      </div>
      {!!isSignedIn &&
        <div className="col-lg-3 col-md-3 col-sm-6 col-6 flex-column justify-content-center align-items-start">
          <div className="mb-3 ps-3">
            <Link href='/profile' className="fw-bold text-decoration-none text-black">User's Area</Link>
          </div>
          <div className="mb-3 ps-3">
            <Link className="text-decoration-none text-black" href='/profile' >Profile</Link>
          </div>
          <div className="mb-3 ps-3">
            <Link className="text-decoration-none text-black" href='/cart' >Cart</Link>
          </div>
        </div>}
    </div>
  </div>;
}
