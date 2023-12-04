import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-around">
      <Link href="/">
        <div>
          <Image
            src="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
            alt="logo"
            // className="invert"
            height={50}
            width={50}
          />
        </div>
        <h1 className="text-2xl font-bold">Dropbox</h1>
      </Link>
      <UserButton afterSignOutUrl="/" />
    </header>
  );
};
export default Header;
