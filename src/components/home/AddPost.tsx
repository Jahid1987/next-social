import Image from "next/image";

const AddPost = () => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
            {/* AVATAR  */}
            <Image src='https://images.pexels.com/photos/19738061/pexels-photo-19738061/free-photo-of-a-boat-is-parked-on-the-side-of-a-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" width={48} height={48} className="w-12 h-12 object-cover rounded-full" />
            {/* POST  */}
            <div className=" flex-1">
                {/* TEXT INPUT  */}
                <div className="flex gap-4">
                   <textarea className="flex-1 bg-slate-100 rounded-lg p-2" name="" id="" placeholder="What's on your mind?"></textarea> 
                   <Image src='/emoji.png' alt="" width={20} height={20} className="w-5 h-5 cursor-pointer self-end" />
                </div>
                {/* POST OPTIONS  */}
                <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-400">
                    <div className="flex items-center gap-2 cursor-pointer">
                    <Image src='/addimage.png' alt="" width={20} height={20} /> 
                    <span>Photo</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                    <Image src='/addVideo.png' alt="" width={20} height={20} /> 
                    <span>Video</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                    <Image src='/poll.png' alt="" width={20} height={20} /> 
                    <span>Poll</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                    <Image src='/addevent.png' alt="" width={20} height={20} /> 
                    <span>Event</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPost;