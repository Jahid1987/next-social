import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";

const Profile = async ({ username }: { username: string }) => {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  });
  if (!user) notFound();

  const { userId: currentUserId } = auth();
  let isBlocked;
  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId,
      },
    });
    if (res) isBlocked = true;
  } else {
    isBlocked = false;
  }
  if (isBlocked) return notFound();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" w-full h-64 relative">
        <Image
          src={user.cover || "/noCover.png"}
          alt=""
          fill
          className="object-cover rounded-md"
        />
        <Image
          src={user?.avatar || "/noAvatar.png"}
          alt=""
          width={128}
          height={128}
          className="w-32 h-32 ring-4 ring-white rounded-full absolute left-0 right-0 m-auto -bottom-16 object-cover"
        />
      </div>
      <h1 className=" mt-20 mb-4 text-2xl font-medium">
        {user.name && user.surname
          ? user.name + " " + user.surname
          : user.username}
      </h1>
      <div className="flex items-center justify-center gap-12 mb-4">
        <div className="flex flex-col items-center">
          <span className="font-medium">{user._count.posts}</span>
          <span className=" text-sm">Posts</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-medium">{user._count.followers}</span>
          <span className=" text-sm">Flolowers</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-medium">{user._count.followings}</span>
          <span className=" text-sm">Following</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
