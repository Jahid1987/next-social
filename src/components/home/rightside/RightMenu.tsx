import { User } from "@prisma/client";
import Ad from "./Ad";
import Birthday from "./Birthday";
import FriendRequest from "./FriendRequest";
import UserInformation from "./UserInformation";
import UserMedia from "./UserMedia";
import { Suspense } from "react";

const RightMenu = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user && (
        <>
          <Suspense fallback="loading ...">
            <UserInformation user={user} />
          </Suspense>
          <Suspense fallback="loading...">
            <UserMedia user={user} />
          </Suspense>
        </>
      )}
      <FriendRequest />
      <Birthday />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
