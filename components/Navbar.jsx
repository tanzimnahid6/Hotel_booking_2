import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import Logout from "./auth/LogOut";

const Navbar = async ({ sideMenu }) => {
  const session = await auth();
  return (
    <nav>
      <Link href="/">
        <Image
          src="/hotel.png"
          alt="Stay Swift Logo"
          width={200}
          height={200}
        />
      </Link>

      {sideMenu && (
        <ul>
          <li>
            <Link href="/hotels">Hotels</Link>
          </li>
          <li>
            <Link href="#">Recommended Places</Link>
          </li>

          <li>
            <Link href="/about">About Us</Link>
          </li>

          <li>
            <Link href="/contact">Contact us</Link>
          </li>

          <li>
            <Link href="/bookings">Bookings</Link>
          </li>

          <li>
            {session?.user ? (
              <div>
                <span>{session?.user?.name}</span>
                <span> | </span>
                <Logout></Logout>
              </div>
            ) : (
              <Link href="/login" className="login">
                Login
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
