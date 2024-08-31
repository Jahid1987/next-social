import Image from "next/image";
import Link from "next/link";

const Birthday = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex gap-4 flex-col">
            {/* TOP  */}
            <div className="flex items-center justify-between font-medium">
              <span className="text-gray-500">Birthday</span>
              
            </div>
            {/* USER  */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image src='https://images.pexels.com/photos/27425232/pexels-photo-27425232/free-photo-of-feeling-lost.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                <span className="font-semibold">Akib Ahmed</span>
              </div>
              <div className="flex gap-3 justify-end">
              <button className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md">Celebrate</button>
              </div>
            </div>
            {/* UPCOMING  */}
            <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
            <Image src='/gift.png' alt="gift" width={24} height={24} className="w-6 h-6"/>
            <Link href='' className="flex flex-col gap-1 text-xs">
              <span className="text-gray-700 font-semibold">Upcoming Birhtdays</span>
              <span className="text-gray-500">See other 16 have upcoming birthdays</span>
            </Link>
            </div>

        </div>
    );
};

export default Birthday;