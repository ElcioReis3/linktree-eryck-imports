"use client";
import {
  BadgePercent,
  Bus,
  Fuel,
  Gift,
  Globe,
  GraduationCap,
  Landmark,
  MailIcon,
  Sparkle,
  UtensilsIcon,
  Dumbbell,
  Building2,
  HardHat,
  Shirt,
  ShirtIcon,
} from "lucide-react";
import { Separator } from "../ui/separator";
import { DynamicButtons } from "../DynamicButtons";
import { Alert, AlertTitle } from "../ui/alert";
import { CustomIcon } from "../ui/customIconWhats";
import { InstagramIcon } from "../ui/instagramIcon";
import Image from "next/image";

type phoneType = {
  phoneOne: number;
  phoneTwo?: number;
};

export const Main = () => {
  const name: string = "@Eryck_imports_";
  const description: string = "Sua fonte de roupas.";
  const phone: phoneType[] = [{ phoneOne: 99982742942 }];
  const instagram: string = "eryck_imports_";
  const email: string | null = null;
  const message: string = `Olá! quero saber mais detalhes sobre um produto.`;
  const encodedMessage = encodeURIComponent(message);
  const pageSite: string | null =
    "https://erycklima77.lojavirtualnuvem.com.br/";

  const buttons = [
    {
      id: "site",
      show: !!pageSite,
      gradient: "from-blue-500 to-blue-700",
      label: "Acessar meu Site",
      icon: <Globe />,
      onClick: () => window.open(pageSite!, "_blank"),
    },
    {
      id: "whats-principal",
      show: !!phone[0]?.phoneOne,
      gradient: "from-green-500 to-green-700",
      label: "WhatsApp Principal",
      icon: <CustomIcon />,
      onClick: () =>
        window.open(
          `https://wa.me/55${phone[0].phoneOne}?text=${encodedMessage}`,
          "_blank"
        ),
    },
    {
      id: "whats-secundario",
      show: !!phone[0]?.phoneOne,
      gradient: "from-green-500 to-green-700",
      label: "WhatsApp do Grupo",
      icon: <CustomIcon />,
      onClick: () =>
        window.open(
          `https://chat.whatsapp.com/LahV9zfz5pmEA5ZGLQy2NW`,
          "_blank"
        ),
    },
    {
      id: "instagram",
      show: !!instagram,
      gradient: "from-purple-500 to-purple-700",
      label: "Instagram",
      icon: <InstagramIcon />,
      onClick: () =>
        window.open(`https://instagram.com/${instagram}/`, "_blank"),
    },
    {
      id: "email",
      show: !!email,
      gradient: "from-blue-500 to-blue-700",
      label: "Enviar um Email",
      icon: <MailIcon />,
      onClick: () => window.open(`mailto:${email}`, "_blank"),
    },
  ];

  const publicos = [
    {
      titulo: "Roupas masculinas",
      icone: ShirtIcon,
    },
    {
      titulo: "Roupas femininas",
      icone: ShirtIcon,
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-300 dark:bg-black p-3">
      <div className="max-w-xl w-full bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-6 flex flex-col items-center gap-4">
        <div className="relative w-full flex flex-col items-center justify-center mb-7">
          {/* Banner fixo no topo */}
          <div className="w-full h-min bg-black rounded-xl overflow-hidden">
            <Image
              src="/images/bannererick.png"
              width={1000}
              height={500}
              quality={100}
              alt="banner-marca"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>

          {/* Logo abaixo do banner, centralizada */}
          <div className="-mt-20 z-10 w-48 h-48 rounded-full overflow-hidden bg-white p-3 shadow-lg">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-center dark:text-white">
            {name}
          </h1>
          <p className="text-center text-sm text-neutral-600 dark:text-neutral-300">
            {description}
          </p>
        </div>

        <Separator />
        <DynamicButtons buttons={buttons} />
        <Separator />

        <div className="w-full grid md:grid-cols-2 gap-x-2 gap-y-1 text-sm ml-4 xs:grid-cols-1">
          {publicos.map((item, index) => (
            <Alert
              key={index}
              className=" opacity-90 hover:opacity-100 active:opacity-100 flex items-center gap-2"
            >
              <item.icone className="w-4 h-4" />
              <AlertTitle>{item.titulo}</AlertTitle>
            </Alert>
          ))}
        </div>

        <Separator />

        <div className="flex flex-col gap-1 mt-4 font-bold text-muted-foreground text-center">
          <span>Enviamos para todo o Brasil</span>
        </div>
      </div>
    </div>
  );
};
