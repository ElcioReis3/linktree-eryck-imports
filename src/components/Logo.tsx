import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src={"/images/logo.png"}
      width={100}
      height={100}
      alt="logo-marca"
      className="w-full h-full"
    />
  );
};
