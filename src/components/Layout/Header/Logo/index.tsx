import { getImagePrefix } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src={`${getImagePrefix()}/images/logo/logo.svg`}
        alt="logo"
        width={0}
        height={0}
        sizes="100vw"
        className="w-32 h-auto"  // Ubah w-32 ke w-24, w-20 sesuai keinginan
        quality={100}
      />
    </Link>
  );
};

export default Logo;
