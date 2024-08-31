import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* USER  */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image src='https://images.pexels.com/photos/17683947/pexels-photo-17683947/free-photo-of-brunette-woman-in-white-blouse-and-black-maxi-skirt-leaning-on-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="user" width={40} height={40} className="w-10 h-10 rounded-full"/>
                <span className="font-medium">Jahid Anwer</span>
              </div>
              <Image src='/more.png' alt="more" width={16} height={16} />
            </div>
            {/* DESCRIPTION  */}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <Image src='https://images.pexels.com/photos/27015906/pexels-photo-27015906/free-photo-of-a-turtle-in-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="post image" fill className="object-cover rounded-md" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto ipsum, expedita facilis aspernatur officiis in. Voluptate laudantium ratione illo. Accusantium veritatis harum inventore sint modi itaque temporibus exercitationem quia?
                </p>
            </div>
            {/* INTERRACTION  */}
            <div className="flex items-center justify-between text-sm my-4">
                {/* likes  */}
                <div className="flex gap-8">
                  <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src='/like.png' alt="like" width={16} height={16} className="cursor-pointer" />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">125 <span className="hidden md:inline"> Likes</span> </span>
                  </div>
                {/* comments  */}
                  <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src='/comment.png' alt="comment" width={16} height={16} className="cursor-pointer" />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">25 <span className="hidden md:inline"> Comments</span> </span>
                  </div>
                </div>
                <div>
                    {/* shares  */}
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src='/share.png' alt="share" width={16} height={16} className="cursor-pointer" />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">12 <span className="hidden md:inline"> shares</span> </span>
                  </div>
                </div>
            </div>
            <Comments />
        </div>
    );
};

export default Post;