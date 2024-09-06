import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const UserMedia = ({ user }: { user: User }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP  */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-sm">
          See all
        </Link>
      </div>
      {/* BOTTOM  */}
      <div className="flex justify-start flex-wrap gap-1">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27926640/pexels-photo-27926640/free-photo-of-handsome-man-with-mustache-in-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27926640/pexels-photo-27926640/free-photo-of-handsome-man-with-mustache-in-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27926640/pexels-photo-27926640/free-photo-of-handsome-man-with-mustache-in-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27926640/pexels-photo-27926640/free-photo-of-handsome-man-with-mustache-in-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27926640/pexels-photo-27926640/free-photo-of-handsome-man-with-mustache-in-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27926640/pexels-photo-27926640/free-photo-of-handsome-man-with-mustache-in-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMedia;
