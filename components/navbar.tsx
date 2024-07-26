"use client";

import { useRouter } from "next/navigation";
import MenuList from "./menuList";
import MenuItemMobile from "./menu-item-mobile";
import ToggleTheme from "./toggle-theme";
import  logo  from "@/public/logo.png"

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between p-4 my-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
      <img src={logo.src} alt="Logo" className="w-[50px] md:w-[70px] h-auto rounded-full" />
      <h1 className="flex uppercase text-base md:text-xl font-bold my-auto" onClick={() => router.push("/")}>
        Mariachi Puro Mezcal
      </h1>
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex sm:hidden">
        <MenuItemMobile />
      </div>
      <ToggleTheme />
    </div>
  );
};

export default Navbar;
