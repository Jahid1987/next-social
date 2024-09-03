import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP  */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image
          src="/more.png"
          alt="more"
          width={16}
          height={16}
          className="w-4 h-4"
        />
      </div>
      {/* BOTTOM */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/27077976/pexels-photo-27077976/free-photo-of-currants-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="more"
            fill
            className="rounded-lg"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/27077976/pexels-photo-27077976/free-photo-of-currants-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="more"
            width={24}
            height={24}
            className="rounded-full object-cover w-6 h-6"
          />
          <span className="text-blue-500 font-medium">Late Coffee</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab qui voluptatum deleniti totam modi! Hic ad sapiente dolorem ea aliquid!"}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs text-center rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Ad;
