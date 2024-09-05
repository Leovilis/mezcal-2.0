import { icons } from "lucide-react"
import Link from "next/link"
import { Separator } from "./ui/separator"

const dataFooter = [
  {
    id: 1,
    name: "Instagram",
    icon: <icons.Instagram />,
    link: "#"
  },
  {
    id: 2,
    name: "Facebook",
    icon: <icons.Facebook />,
    link: "#"
  },
  {
    id: 3,
    name: "Contactos",
    icon: <icons.PhoneIncoming/>,
    whatsapp: "telefono",
    link:"#"
  }
]

const Footer = () => {
  return (
    <div className="mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        
          <p className="text-bold text-center md:text-start">
            Mariachi Puro Mezcal
          </p>
          <ul className="flex justify-center items-center md:mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {dataFooter.map((data) => (
              <li key={data.id} className="flex justify-between">
                <Link href={data.link} className="hover:underline p-6 mx-4 md:mx-6 ">{data.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
            <Separator />
            <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
              &copy; 2024
              <Link href={"/"}>{" "}LeoDev. </Link>Todos los derechos reservados.
            </span>
            
      </div>
    </div>
  )
}

export default Footer
