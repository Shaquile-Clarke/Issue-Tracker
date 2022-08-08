import { signOut } from "next-auth/react";
import Link from "next/link";

export default function NavBar({ children }) {
  return (
    <>
      <header className="flex gap-6 items-center py-2 px-4 border-b-2 border-gray-100/50 ">
        <div className="text-xl font-bold">Issacker</div>
        <nav>
          <ul className="m-auto flex text-xl justify-center gap-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/support">Support</Link>{" "}
            </li>
            <li>
              <button onClick={() => signOut()}>Logout</button>
            </li>
            {/* <li>
              <Link href="/profile">Profile</Link>
            </li> */}
          </ul>
        </nav>
      </header>
      <main className="container m-auto p-4">{children}</main>
    </>
  );
}
