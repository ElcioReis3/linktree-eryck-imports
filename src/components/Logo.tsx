import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <Image
        src="/images/logo.png"
        width={100}
        height={100}
        alt="logo-light"
        className="w-full h-full block dark:hidden"
      />
      <Image
        src="/images/logo-dark.png"
        width={100}
        height={100}
        alt="logo-dark"
        className="w-full h-full hidden dark:block"
      />
    </>
  );
};
