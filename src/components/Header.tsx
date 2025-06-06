import Image from "next/image";
import { Logo } from "./Logo";
import { ThemeButton } from "./theme-button";

export const Header = () => {
  return (
    <>
      <div className="w-full relative">
        <Image
          src={"/images/Banner.png"}
          width={1000}
          height={100}
          quality={100}
          alt="banner-marca"
          className="w-full max-w-3xl object-cover m-auto"
        />
      </div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 font-semibold flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 mt-3  md:mt-20 md:w-36 md:h-36">
          <Logo />
        </div>
        <div className="text-xl my-3">@eryck_imports_</div>
      </div>
    </>
  );
};
