import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="flex justify-around">
      <p>Dropbox</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
export default Header;
