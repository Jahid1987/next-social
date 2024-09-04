import Feed from "@/components/home/feed/Feed";
import LeftMenu from "@/components/home/leftside/LeftMenu";
import Profile from "@/components/home/Profile";
import RightMenu from "@/components/home/rightside/RightMenu";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      {/* left menu  */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      {/* Profile, Feed  */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Profile />
          <Feed />
        </div>
      </div>
      {/* Right menu  */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  );
};

export default ProfilePage;
