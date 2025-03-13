import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
    Gamepad2,
    House,
    LucideIcon,
    MonitorPlay,
    Users,
  } from "lucide-react";
type MenuItem = {
    icon: LucideIcon;
    label: string;
    href: string;
  };
  const listMenu: MenuItem[] = [
    {
      icon: House,
      label: "Home",
      href: "/",
    },
    {
      icon: MonitorPlay,
      label: "Watch",
      href: "/",
    },
    {
      icon: Users,
      label: "Friends",
      href: "/",
    },
    {
      icon: Gamepad2,
      label: "Games",
      href: "/",
    },
  ];
const Menu = () => {
    return (
        <nav className="h-full">
        <ul
          key="head-menu"
          className=" h-full flex py-1 justify-center items-center "
        >
          {listMenu.map((item, index) => {
            return (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <li className="w-[112px] py-2 flex justify-center h-full items-center hover:bg-gray-100 hover:rounded-2xl">
                      <item.icon className=" text-gray-400 rounded" />
                    </li>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </ul>
      </nav>
    )
}

export default Menu;