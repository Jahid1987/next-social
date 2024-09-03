import Image from "next/image";

const Comments = () => {
  return (
    <div>
      {/* WRITE  */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/27425232/pexels-photo-27425232/free-photo-of-feeling-lost.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="more"
          className="w-8 h-8 rounded-full"
          width={32}
          height={32}
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="flex-1 bg-transparent outline-none"
          />
          <Image
            src="/emoji.png"
            alt="emoji"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="flex gap-4 justify-between mt-6">
        {/* AVATAR  */}
        <Image
          src="https://images.pexels.com/photos/27425232/pexels-photo-27425232/free-photo-of-feeling-lost.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="more"
          className="w-10 h-10 rounded-full"
          width={40}
          height={40}
        />
        {/* DESCRIPTION  */}
        <div className="flex flex-col gap-2 flex-1">
          <span className="font-medium">Holy Khatun</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            voluptatum cumque quas eaque quia eveniet totam? Ipsa dolorem sit
            mollitia ex eos? Molestias possimus quibusdam laboriosam molestiae,
            incidunt minus quod!
          </p>
          <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
            <div className="flex items-center gap-4">
              <Image
                src="/like.png"
                alt=""
                width={12}
                height={12}
                className="cursor-pointer w-4 h-4"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">0 Likes</span>
            </div>
            <div className="">Reply</div>
          </div>
        </div>
        {/* ICON  */}
        <Image
          src="/more.png"
          alt="more"
          width={16}
          height={16}
          className="w-4 h-4 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Comments;
