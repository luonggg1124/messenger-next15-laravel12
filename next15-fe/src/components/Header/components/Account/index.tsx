"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Bell, ChevronDown, Logs, LucideIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Menu from "./menu";
import Notification from "./notification";
import Account from "./account";
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
const AccountBar = ({ className }: Props) => {
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
        {focusItem === "account" ? <Account setVisible={setFocusItem} /> : ""}
        {/* Avatar */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button onClick={() => setFocusItem("account")} className="relative  w-[40px] h-[40px]  flex justify-center items-center">
                <Image src="/tas.jpg" width={40} className="rounded-full" height={40} alt="Avatar" />
                <div className="absolute -bottom-1 -right-1 size-4 rounded-full border-white border-2 bg-gray-200 flex items-center justify-center"><ChevronDown /></div>
              </button>
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

export default AccountBar;
