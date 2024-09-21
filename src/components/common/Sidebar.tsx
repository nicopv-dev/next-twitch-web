"use client";

import { cn } from "@/utils/methods";
import {
  CameraIcon,
  Gamepad,
  HomeIcon,
  Info,
  Settings,
  Star,
  Video,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS: Array<{
  title: string;
  href: string;
  icon: LucideIcon;
}> = [
  {
    title: "Inicio",
    icon: HomeIcon,
    href: "/",
  },
  {
    title: "Categorias",
    icon: CameraIcon,
    href: "/categorias",
  },
  {
    title: "Gaming",
    icon: Gamepad,
    href: "/gaming",
  },
  {
    title: "Subscrito",
    icon: Star,
    href: "/subscrito",
  },
];

const CHANNELS: Array<{
  title: string;
  href: string;
  image: string;
}> = [
  {
    title: "Twitch",
    href: "/twitch",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Twitch",
    href: "/twitch",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Twitch",
    href: "/twitch",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Twitch",
    href: "/twitch",
    image: "https://picsum.photos/200/300",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isExpandedBar, setIsExpandedBar] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("/");

  useEffect(() => {
    console.log(pathname);
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <aside
      className={`w-20 h-screen sticky left-0 top-0 transition-all duration-200 ease-in-out bg-twitch-500 hover:w-60 flex flex-col items-center justify-between gap-10 py-5 overflow-y-hidden overflow-x-hidden`}
      onMouseEnter={() => setIsExpandedBar(true)}
      onMouseLeave={() => setIsExpandedBar(false)}
    >
      <div className="flex flex-col items-center gap-6 w-full px-4">
        {/* logo */}
        <Link href={"/"} className="animate-bounce">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white h-10 w-10"
          >
            <title>Twitch</title>
            <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
          </svg>
        </Link>

        <button className="bg-white text-twitch w-full p-3 rounded-md flex justify-center items-center gap-1">
          <Video size={20} />
          {isExpandedBar && <span>Streaming</span>}
        </button>

        {/* nav links */}
        <div className="flex flex-col gap-6 w-full mt-2">
          {LINKS.map(({ icon: Icon, title, href }, index) => (
            <Link
              key={index}
              href="/"
              className={cn(
                "flex items-center gap-2 transition-all duration-200 ease-in-out hover:text-white",
                isExpandedBar ? "justify-start" : "justify-center",
                activeLink === href ? "text-white" : "text-gray-300"
              )}
            >
              {<Icon size={isExpandedBar ? 20 : 20} />}
              {isExpandedBar && <span>{title}</span>}
            </Link>
          ))}
        </div>
      </div>

      {/* channels */}
      <div className="grow bg-twitch-700 w-full overflow-y-auto px-4 flex flex-col gap-2 py-4">
        {CHANNELS.map(({ title, href, image }, index) => (
          <Link
            key={index}
            href={href}
            className="flex items-center gap-2 h-12"
          >
            <Image
              alt={title}
              src={image}
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full rounded-md object-cover"
            />
            {/* <span>{title}</span> */}
          </Link>
        ))}
      </div>

      {/* config */}
      <div className="flex flex-col gap-4">
        <button>
          <Info size={20} />
        </button>
        <button>
          <Settings size={20} />
        </button>
      </div>
    </aside>
  );
}
