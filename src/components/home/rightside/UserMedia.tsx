import Link from 'next/link';

const UserMedia = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
      {/* TOP  */}
      <div className='flex items-center justify-between font-medium'>
        <span className='text-gray-500'>User Media</span>
        <Link href='/' className='text-blue-500 text-sm'>
          See all
        </Link>
      </div>
    </div>
  );
};

export default UserMedia;