import Link from 'next/link';

const UserInformation = ({ userId }: { userId: string }) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
      {/* TOP  */}
      <div className='flex items-center justify-between font-medium'>
        <span className='text-gray-500'>User Information</span>
        <Link href='/' className='text-blue-500 text-sm'>
          See all
        </Link>
      </div>
      {/* BOTTOM  */}
      <div className='flex flex-col gap-4 text-gray-500'>
        <div className='flex items-center gap-2'>
          <span className='text-xl text-black'>Anwer Jahid</span>
          <span className='text-sm'>@Sohel</span>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
