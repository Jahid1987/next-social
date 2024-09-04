import Image from "next/image";
import Link from "next/link";

const MenuItem = ({ image, name }: { image: string; name: string }) => {
  return (
    <>
      <Link
        href="/"
        className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
      >
        <Image src={image} alt="" height={20} width={20} />
        <span>{name}</span>
      </Link>

      <hr className="bottom-1 border-gray-50 w-3/6 self-center" />
    </>
  );
};

export default MenuItem;
