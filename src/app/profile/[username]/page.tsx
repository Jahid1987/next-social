import Feed from "@/components/home/feed/Feed";
import LeftMenu from "@/components/home/leftside/LeftMenu";
import Profile from "@/components/home/Profile";
import RightMenu from "@/components/home/rightside/RightMenu";
import prisma from "@/lib/client";
import { notFound } from "next/navigation";

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const username = params.username;
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) return notFound();
  return (
    <div className="flex gap-6 pt-6">
      {/* left menu  */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      {/* Profile, Feed  */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Profile username={username} />
          <Feed />
        </div>
      </div>
      {/* Right menu  */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;
