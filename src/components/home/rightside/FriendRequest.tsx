import Image from "next/image";
import Link from "next/link";

const FriendRequest = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP  */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-sm">
          See all
        </Link>
      </div>
      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/27425232/pexels-photo-27425232/free-photo-of-feeling-lost.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Sajjad Mia</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 rounded-full object-cover"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 rounded-full object-cover"
          />
        </div>
      </div>
      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/27425232/pexels-photo-27425232/free-photo-of-feeling-lost.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Sajjad Mia</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 rounded-full object-cover"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 rounded-full object-cover"
          />
        </div>
      </div>
      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/27425232/pexels-photo-27425232/free-photo-of-feeling-lost.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Sajjad Mia</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 rounded-full object-cover"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
