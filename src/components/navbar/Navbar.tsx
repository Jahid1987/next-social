import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="h-24 flex items-center justify-between">
            {/* LEFT  */}
            <div className="md:hidden lg:block">
                <Link className="font-bold text-xl text-blue-600" href='/'>Holy Social</Link>
            </div>
            {/* CENTER  */}
            <div className="hidden md:flex">
                {/* Links  */}
                <div className="flex gap-6 text-gray-600">
                    <Link className="flex items-center  gap-1" href='/'>
                        <Image src='/home.png' alt="home" width={16} height={16} className="w-4 h-4"/>
                        <span>Home</span>
                    </Link>
                    <Link className="flex items-center  gap-1" href='/'>
                        <Image src='/friends.png' alt="friends" width={16} height={16} className="w-4 h-4"/>
                        <span>Friends</span>
                    </Link>
                    <Link className="flex items-center  gap-1" href='/'>
                        <Image src='/stories.png' alt="stories" width={16} height={16} className="w-4 h-4"/>
                        <span>Stories</span>
                    </Link>
                </div>
            </div>
            {/* RIGHT  */}
            <div>
                <MobileMenu />
            </div>
        </div>
    );
};

export default Navbar;