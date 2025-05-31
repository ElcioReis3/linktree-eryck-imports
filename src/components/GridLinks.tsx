"use client";
import { Link2 } from "lucide-react";
import { Button } from "./ui/button";

type LinkType = {
  label: string;
  url: string;
};

const links: LinkType[] = [
  {
    label: "NOSSO SITE",
    url: "https://erycklima77.lojavirtualnuvem.com.br/",
  },
  {
    label: "WHATSAPP DO GRUPO",
    url: "https://chat.whatsapp.com/LahV9zfz5pmEA5ZGLQy2NW",
  },
  {
    label: "WHATSAPP ADMINISTRATIVO",
    url: "https://wa.me/5599982742942",
  },
];

export const GridLinks = () => {
  const handleLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-full max-w-3xl flex flex-col p-1 gap-3 mt-32 m-auto ">
      {links.map((link) => (
        <Button
          key={link.label}
          className="p-5 flex justify-between font-bold shadow-lg"
          onClick={() => handleLink(link.url)}
        >
          {link.label}
          <Link2 />
        </Button>
      ))}
    </div>
  );
};
