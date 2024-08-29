import AddPost from "@/components/home/AddPost"
import Feed from "@/components/home/Feed"
import LeftMenu from "@/components/home/LeftMenu"
import RightMenu from "@/components/home/RightMenu"
import Stories from "@/components/home/Stories"

const Homepage = () => {
  return (
    <div className='flex gap-6 pt-6'>
      {/* left menu  */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>
      {/* Stories/Add post/Feed  */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      {/* Right menu  */}
      <div className="hidden lg:block w-[30%]">
      <RightMenu />
      </div>
    </div>
  )
}

export default Homepage