"use client"

import { Menu } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import Link from "next/link"

const MenuItemMobile = () => {
  return (
    <Popover>
        <PopoverTrigger>
            <Menu />
        </PopoverTrigger>
        <PopoverContent>
            <Link href={"/about"} className="block">Sobre Nosotros</Link>
            <Link href={"/galeria"} className="block">Galeria</Link>
            <Link href={"/history"} className="block">Historia</Link>

        </PopoverContent>
    </Popover>
  )
}

export default MenuItemMobile