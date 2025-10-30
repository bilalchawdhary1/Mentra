import Link from "next/link";
// import Image from "next/image";
import {SignInButton, SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import NavItems from "@/components/NavItems";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link href='/'>
        <div className='flex items-center gap-2.5 cursor-pointer'>
          {/* <Image src='/images/logo.svg' alt='logo' width={46} height={44} /> */}
          <span className='flex items-center space-x-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-orange-600 text-1xl tracking-wide transition-all duration-300 hover:scale-105'>
            <span>MENTRA 🕮</span>
          </span>
        </div>
      </Link>
      <div className='flex items-center gap-8'>
        <NavItems />
        <SignedOut>
          <SignInButton>
            <button className='btn-signin'>Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
