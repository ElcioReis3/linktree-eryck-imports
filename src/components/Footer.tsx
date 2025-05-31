import { Copyright } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full h-32 mt-52 text-center">
      <Link
        href={
          "https://l.instagram.com/?u=https%3A%2F%2Fportifolio-elcio-reis.netlify.app%2F%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaevtbc-iXU45oc0J0n3S7dv_27rfph80KnzFluXt1irS5IjD6q0qXHeMaDJJg_aem_dk6p0uPgiuGI7hIODNuQIg&e=AT0v-KwMTA-GbvdNjELcOA7XrfB7nANAz4WF4ZIoeJyNVzHVa2y60MYckIx_-2JDpFCh4IoMeRNAeaxU5ikEB71krBku94iF4otbJg"
        }
        target="_blank"
        className="w-max flex text-center m-auto items-center underline font-semibold"
      >
        <Copyright className="" />
        Criado por ElcioServiçosOn
      </Link>
    </footer>
  );
};
