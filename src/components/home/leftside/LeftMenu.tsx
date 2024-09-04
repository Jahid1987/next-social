import MenuItem from "./MenuItem";
import Ad from "../rightside/Ad";
import ProfileCard from "./ProfileCard";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <MenuItem image="/posts.png" name="My Posts" />
        <MenuItem image="/activity.png" name="Activity" />
        <MenuItem image="/market.png" name="Marketplace" />
        <MenuItem image="/events.png" name="Events" />
        <MenuItem image="/albums.png" name="Albums" />
        <MenuItem image="/videos.png" name="Videos" />
        <MenuItem image="/news.png" name="News" />
        <MenuItem image="/courses.png" name="Courses" />
        <MenuItem image="/lists.png" name="Lists" />
        <MenuItem image="/settings.png" name="Settings" />
      </div>
      <Ad size="sm" />
    </div>
  );
};

export default LeftMenu;
