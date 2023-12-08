import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-around">
      <Link href="/" className="flex items-center space-x-3">
        <div className="bg-blue-500 rounded-lg w-fit">
          <Image
            src="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
            alt="logo"
            className="invert"
            height={50}
            width={50}
          />
        </div>
        <h1 className="text-2xl font-bold ">Dropbox</h1>
      </Link>
      <div className="flex items-center space-x-2">
        {/*theme toggler*/}
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
};
export default Header;
