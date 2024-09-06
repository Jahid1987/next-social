import { User } from "@prisma/client";
import Ad from "./Ad";
import Birthday from "./Birthday";
import FriendRequest from "./FriendRequest";
import UserInformation from "./UserInformation";
import UserMedia from "./UserMedia";

const RightMenu = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user && (
        <>
          <UserInformation user={user} />
          <UserMedia user={user} />
        </>
      )}
      <FriendRequest />
      <Birthday />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
