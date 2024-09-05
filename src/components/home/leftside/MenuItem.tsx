import Image from "next/image";
import Link from "next/link";
const MenuItem = ({ image, name, isLast }: propsType) => {
  return (
    <>
      <Link
        href="/"
        className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
      >
        <Image src={image} alt="" height={20} width={20} />
        <span>{name}</span>
      </Link>

      <hr
        className={`${
          isLast ? "hidden" : "bottom-1 border-gray-50 w-3/6 self-center"
        }`}
      />
    </>
  );
};

export default MenuItem;

type propsType = {
  image: string;
  name: string;
  isLast?: boolean;
};
