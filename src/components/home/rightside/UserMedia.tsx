import prisma from "@/lib/client";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const UserMedia = async ({ user }: { user: User }) => {
  const postsWithMedia = await prisma.post.findMany({
    where: {
      userId: user.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP  */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-sm">
          See all
        </Link>
      </div>
      {/* BOTTOM  */}
      <div className="flex justify-start flex-wrap gap-1">
        {postsWithMedia.length
          ? postsWithMedia.map((post) => (
              <div key={post.id} className="relative w-1/5 h-24">
                <Image
                  src={post.img!} // Note(non-null assertion): here post.img! is used because image could be null according to schema. But, I am assuring that it won't be because I query those posts only that have image in the top.
                  alt=""
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            ))
          : "No media found"}
      </div>
    </div>
  );
};

export default UserMedia;
