import Ad from "./Ad";
import Birthday from "./Birthday";
import FriendRequest from "./FriendRequest";
import UserInformation from "./UserInformation";
import UserMedia from "./UserMedia";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId && (
        <>
          <UserInformation userId={userId} />
          <UserMedia />
        </>
      )}
      <FriendRequest />
      <Birthday />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
