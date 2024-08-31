import Ad from "./Ad";
import Birthday from "./Birthday";
import FriendRequest from "./FriendRequest";

const RightMenu = ({userId}: {userId?: string}) => {
    return (
        <div className="flex flex-col gap-6">
         <FriendRequest />
         <Birthday />
         <Ad size="md"/>
        </div>
    );
};

export default RightMenu;