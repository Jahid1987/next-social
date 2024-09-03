import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoading } from "@clerk/nextjs";
import ClearkLoadedComponents from "../ClearkLoadedComponents";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT  */}
      <div className="md:hidden lg:block w-[20%]">
        <Link className="font-bold text-sm lg:text-xl text-blue-600" href="/">
          Holy Social
        </Link>
      </div>
      {/* CENTER  */}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        {/* Links  */}
        <div className="flex gap-6 text-gray-600">
          <Link className="flex items-center  gap-1" href="/">
            <Image
              src="/home.png"
              alt="home"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Home</span>
          </Link>
          <Link className="flex items-center  gap-1" href="/friends">
            <Image
              src="/friends.png"
              alt="friends"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link className="flex items-center  gap-1" href="/stories">
            <Image
              src="/stories.png"
              alt="stories"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent outline-none"
          />
          <Image src="/search.png" alt="" width={14} height={14} />
        </div>
      </div>
      {/* RIGHT  */}
      <div className="w-[20%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <ClearkLoadedComponents />
        {/* mobile menu */}
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
