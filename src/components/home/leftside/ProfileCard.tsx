import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

const ProfileCard = async () => {
  const { userId } = auth();
  if (!userId) return null;
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  if (!user) return null;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src={user?.avatar || "/noAvatar.png"}
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/20292103/pexels-photo-20292103/free-photo-of-a-table-in-a-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={48}
          height={48}
          className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Jahid Anwer</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/20292103/pexels-photo-20292103/free-photo-of-a-table-in-a-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3 "
            />
            <Image
              src="https://images.pexels.com/photos/20292103/pexels-photo-20292103/free-photo-of-a-table-in-a-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3 "
            />
            <Image
              src="https://images.pexels.com/photos/20292103/pexels-photo-20292103/free-photo-of-a-table-in-a-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3 "
            />
          </div>
          <span className=" text-xs text-gray-500">430 Followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
