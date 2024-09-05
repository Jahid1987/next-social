import Image from "next/image";

const Profile = async () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" w-full h-64 relative">
        <Image
          src="https://images.pexels.com/photos/27849554/pexels-photo-27849554/free-photo-of-man-sitting-on-wall-at-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className="object-cover rounded-md"
        />
        <Image
          src="https://images.pexels.com/photos/16997497/pexels-photo-16997497/free-photo-of-man-in-tank-top-sitting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={128}
          height={128}
          className="w-32 h-32 ring-4 ring-white rounded-full absolute left-0 right-0 m-auto -bottom-16 object-cover"
        />
      </div>
      <h1 className=" mt-20 mb-4 text-2xl font-medium">Jahid Anwer</h1>
      <div className="flex items-center justify-center gap-12 mb-4">
        <div className="flex flex-col items-center">
          <span className="font-medium">235</span>
          <span className=" text-sm">Posts</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-medium">1.3k</span>
          <span className=" text-sm">Flolowers</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-medium">35</span>
          <span className=" text-sm">Following</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
