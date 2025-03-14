"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Bell, Logs, LucideIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Menu from "./menu";
import Notification from "./notification";
type Props = {
  className?: string;
};
type Item = {
  icon: LucideIcon;
  label: string;
  href: string;
};
const listItem: Item[] = [
  {
    icon: Logs,
    label: "Menu",
    href: "menu",
  },
  {
    icon: Bell,
    label: "Notification",
    href: "notification",
  },
];
const Account = ({ className }: Props) => {
  const [focusItem, setFocusItem] = useState<string | null>(null);
  return (
    <div className={className}>
      <div className="h-full flex items-center space-x-3 z-10">
        {listItem.map((item, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setFocusItem(item.href)}
                  className={`rounded-full ${
                    focusItem === item.href
                      ? "text-blue-600 bg-blue-100"
                      : "bg-slate-200"
                  } overflow-hidden w-[40px] h-[40px]  cursor-pointer flex justify-center items-center `}
                >
                  <item.icon />
                </button>
                
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
        {focusItem === "menu" ? <Menu setVisible={setFocusItem} /> : ""}
        {focusItem === "notification" ? <Notification setVisible={setFocusItem} /> : ""}
        {/* Avatar */}
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
  );
};

export default Account;
