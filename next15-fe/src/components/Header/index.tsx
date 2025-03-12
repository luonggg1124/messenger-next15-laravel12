import Image from "next/image";
import { Input } from "../ui/input";
import {
  Bell,
  Gamepad2,
  House,
  Logs,
  LucideIcon,
  MonitorPlay,
  Users,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
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
export default function Header() {
  return (
    <header className="w-full h-[56px] flex justify-between items-center px-4 shadow-2xs">
      <div className="flex items-center space-x-2">
        <Image
          src="/messages.png"
          width={40}
          height={40}
          className="rounded-full"
          alt="Logo"
        />
        <div className="">
          <Input
            className="w-[292px] h-[40px] rounded-4xl"
            placeholder="Search"
          />
        </div>
      </div>
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
      <div className="h-full ">
        <div className="h-full flex items-center space-x-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="rounded-full overflow-hidden w-[40px] h-[40px] bg-slate-200 flex justify-center items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Logs />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <div className="w-[608px] h-[610px] bg-slate-100 rounded-lg absolute -right-32 top-6 px-4 overflow-hidden">
                        <header className="w-full h-[49px] flex items-center">
                          <h2 className="text-2xl font-bold">Menu</h2>
                        </header>
                        <div className=" h-full overflow-auto relative grid grid-cols-6 gap-2 rounded">
                          <div className=" col-span-4 bg-white">
                            <div className="h-[40px] flex justify-center px-6 ">
                              <Input placeholder="Search" className="mt-4"/>
                            </div>
                          </div>
                          <div className="right-0 col-span-2  bg-white">
                            <div className="w-full h-[40px] bg-amber-200">
                              right
                            </div>
                          </div>
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Menu</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="rounded-full  overflow-hidden w-[40px] h-[40px] bg-slate-200 flex justify-center items-center">
                  <Bell />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Notifications</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="rounded-full overflow-hidden w-[40px] h-[40px] bg-slate-200 flex justify-center items-center">
                  <Image src="/tas.jpg" width={40} height={40} alt="Avatar" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Account</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </header>
  );
}
