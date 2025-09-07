// import Link from "next/link";
import Image from "next/image";
// import { Profile } from "./Profile";

const Header = () => {
  return (
    <header className="h-[var(--header-height)] text-xl">
      <div id="header" className="grid w-full grid-cols-12">
        <div
          className={`bg-white col-span-12 flex items-center pt-6 pl-2 lg:col-span-4 xl:pl-5 2xl:col-span-3`}
        >
          {/* <Link href={"/"}>Arrangementer ved</Link> */}
          <Image
            src="/BI_Norwegian_Business_School_logo.png"
            alt="BI Norwegian Business School Logo"
            width={120}
            height={100}
          />
        </div>
        <div className="bg-white col-span-12 flex items-center justify-end lg:col-span-8 2xl:col-span-9">
          {/* <Profile /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
