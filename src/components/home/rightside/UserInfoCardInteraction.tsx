"use client";

import { switchBlock, switchFollow } from "@/actions/data";
import { useOptimistic, useState } from "react";

const UserInfoCardInteraction = ({
  userId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
  userId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingRequestSent: isFollowingSent,
  });
  // handling follow
  const follow = async () => {
    switchOptimisticState("follow");
    try {
      await switchFollow(userId);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followingRequestSent:
          !prev.following && !prev.followingRequestSent ? true : false,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  // handling block
  const block = async () => {
    switchOptimisticState("block");
    try {
      await switchBlock(userId);
      setUserState((prev) => ({
        ...prev,
        blocked: !prev.blocked,
      }));
    } catch (error) {}
  };
  // using optimistic
  const [optimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (currentState, value: "follow" | "block") =>
      value === "follow"
        ? {
            ...currentState,
            following: currentState.following && false,
            followingRequestSent: !currentState.followingRequestSent
              ? true
              : false,
          }
        : { ...currentState, blocked: !currentState.blocked }
  );

  return (
    <>
      <form action={follow} className="w-full">
        <button className="bg-blue-500 p-2 text-white text-sm rounded-md w-full">
          {optimisticState.following
            ? "Following"
            : optimisticState.followingRequestSent
            ? "Freiend Request sent"
            : "Follow"}
        </button>
      </form>
      <form action={block} className="self-end">
        <button>
          <span className="text-red-400 self-end text-xs cursor-pointer">
            {userState.blocked ? "Unblock User" : "Block User"}
          </span>
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
