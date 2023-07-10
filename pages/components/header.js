import Link from "next/link";
import { signOut } from "next-auth/client";
import { useRouter } from "next/router";

export default function Header() {
  const handleLogout = async () => {
    const data = await signOut({ callbackUrl: "/login" });
  };

  return (
    <div className="navbar text-white z-50">
      <div className="flex-1">
        <Link href="/" className="text-xl border-2 border-white px-2">
          NEMI
        </Link>
        <span className="text-xl ml-2">PROJECT</span>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="text-xl">about</summary>
              <ul className="p-2 bg-base-100 text-gray-800 ">
                <li>
                  <Link href="/vision">vision</Link>
                </li>
                <li>
                  <Link href="/values">values</Link>
                </li>
                <li>
                  <Link href="/community">community</Link>
                </li>
                <li>
                  <Link href="/ventanilla">ventanilla</Link>
                </li>
                <li>
                  <Link href="/build">build</Link>
                </li>
                <li>
                  <Link href="/investment">investment</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="text-xl">land</summary>
              <ul className="p-2 bg-base-100 text-gray-800 ">
                <li>
                  <Link href="/map">map</Link>
                </li>
                <li>
                  <Link href="/land">land</Link>
                </li>
                <li>
                  <Link href="/areas">areas</Link>
                </li>
              </ul>
            </details>
          </li>
          <li className="text-xl">
            <Link href="/contact">contact us</Link>
          </li>
          <li className="text-xl">
            <button onClick={handleLogout}>logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
