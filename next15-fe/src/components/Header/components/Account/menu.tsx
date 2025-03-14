import { Input } from "@/components/ui/input";
import {
  BookOpen,
  Calendar,
  Clapperboard,
  Flag,
  LucideIcon,
  Megaphone,
  ShoppingBasket,
  Sparkles,
  SquarePen,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

type Props = {
  setVisible: any;
}

type MenuLeftItem = {
  icon: LucideIcon;
  label: string;
  href: string;
};
const menuLeftItems: MenuLeftItem[] = [
  {
    icon: SquarePen,
    label: "Post",
    href: "/",
  },
  {
    icon: BookOpen,
    label: "Story",
    href: "/story",
  },
  {
    icon: Clapperboard,
    label: "Reels",
    href: "/reels",
  },
  {
    icon: Sparkles,
    label: "Life event",
    href: "/reels",
  },
  {
    icon: SquarePen,
    label: "separator",
    href: "#",
  },
  {
    icon: Flag,
    label: "Pages",
    href: "/pages",
  },
  {
    icon: Megaphone,
    label: "Ad",
    href: "/ads",
  },
  {
    icon: UsersRound,
    label: "Group",
    href: "/groups",
  },
  {
    icon: Calendar,
    label: "Event",
    href: "/events",
  },
  {
    icon: ShoppingBasket,
    label: "Marketplace listing",
    href: "/marketplace-listing",
  },
];
const Menu = ({setVisible}: Props) => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          componentRef.current &&
          !componentRef.current.contains(event.target as Node)
        ) {
          setVisible(null);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  return (
    <div ref={componentRef} className=" rounded-lg bg-gray-100 p-0 fixed top-14 right-4 ">
      <div className="w-[608px] h-[610px] pl-3 overflow-hidden">
        <header className="w-full h-[49px] flex items-center">
          <h2 className="text-2xl font-bold">Menu</h2>
        </header>
        <div className=" h-full  overflow-auto grid grid-cols-6 gap-4 px-1 pb-16">
          {/* Left */}
          <div className=" col-span-4 bg-white rounded-lg  shadow-sm ">
            <div className="h-[40px] flex justify-center  ">
              <Input
                type="search"
                placeholder="Search"
                className="mt-4 rounded-3xl mx-6 bg-slate-100 focus-visible:border-0 focus-visible:ring-0 "
              />
            </div>
            <div className="pt-6 px-4">
              <div>
                <h3 className="font-semibold">Social</h3>
                <div className="mt-2">
                  <div className="w-full h-[60px] hover:bg-gray-100 rounded-lg flex items-center space-x-4 px-2 my-2 cursor-pointer">
                    <Image
                      src="/icons/event.png"
                      width={36}
                      height={36}
                      alt="event"
                    />
                    <div className="h-full ">
                      <h3 className="font-semibold text-[14px]">Events</h3>
                      <p className="text-[12px]">
                        Organize asdkja shdsahdh sajsdghg hasgh jds agsa
                        dghsadhgv
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-[60px] hover:bg-gray-100 rounded-lg flex items-center space-x-4 px-2 my-2 cursor-pointer">
                    <Image
                      src="/icons/event.png"
                      width={36}
                      height={36}
                      alt="event"
                    />
                    <div className="h-full ">
                      <h3 className="font-semibold text-[14px]">Events</h3>
                      <p className="text-[12px]">
                        Organize asdkja shdsahdh sajsdghg hasgh jds agsa
                        dghsadhgv
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-[60px] hover:bg-gray-100 rounded-lg flex items-center space-x-4 px-2 my-2 cursor-pointer">
                    <Image
                      src="/icons/event.png"
                      width={36}
                      height={36}
                      alt="event"
                    />
                    <div className="h-full ">
                      <h3 className="font-semibold text-[14px]">Events</h3>
                      <p className="text-[12px]">
                        Organize asdkja shdsahdh sajsdghg hasgh jds agsa
                        dghsadhgv
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-[60px] hover:bg-gray-100 rounded-lg flex items-center space-x-4 px-2 my-2 cursor-pointer">
                    <Image
                      src="/icons/event.png"
                      width={36}
                      height={36}
                      alt="event"
                    />
                    <div className="h-full ">
                      <h3 className="font-semibold text-[14px]">Events</h3>
                      <p className="text-[12px]">
                        Organize asdkja shdsahdh sajsdghg hasgh jds agsa
                        dghsadhgv
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-[60px] hover:bg-gray-100 rounded-lg flex items-center space-x-4 px-2 my-2 cursor-pointer">
                    <Image
                      src="/icons/event.png"
                      width={36}
                      height={36}
                      alt="event"
                    />
                    <div className="h-full ">
                      <h3 className="font-semibold text-[14px]">Events</h3>
                      <p className="text-[12px]">
                        Organize asdkja shdsahdh sajsdghg hasgh jds agsa
                        dghsadhgv
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-[60px] hover:bg-gray-100 rounded-lg flex items-center space-x-4 px-2 my-2 cursor-pointer">
                    <Image
                      src="/icons/event.png"
                      width={36}
                      height={36}
                      alt="event"
                    />
                    <div className="h-full ">
                      <h3 className="font-semibold text-[14px]">Events</h3>
                      <p className="text-[12px]">
                        Organize asdkja shdsahdh sajsdghg hasgh jds agsa
                        dghsadhgv
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-[60px] hover:bg-gray-100 rounded-lg flex items-center space-x-4 px-2 my-2 cursor-pointer">
                    <Image
                      src="/icons/event.png"
                      width={36}
                      height={36}
                      alt="event"
                    />
                    <div className="h-full ">
                      <h3 className="font-semibold text-[14px]">Events</h3>
                      <p className="text-[12px]">
                        Organize asdkja shdsahdh sajsdghg hasgh jds agsa
                        dghsadhgv
                      </p>
                    </div>
                  </div>{" "}
                  <div className="w-full h-[60px] hover:bg-gray-100 rounded-lg flex items-center space-x-4 px-2 my-2 cursor-pointer">
                    <Image
                      src="/icons/event.png"
                      width={36}
                      height={36}
                      alt="event"
                    />
                    <div className="h-full ">
                      <h3 className="font-semibold text-[14px]">Events</h3>
                      <p className="text-[12px]">
                        Organize asdkja shdsahdh sajsdghg hasgh jds agsa
                        dghsadhgv
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className=" col-span-2 top-0 rounded-lg sticky bg-white max-h-[544px]  px-2 py-4 ">
            <h3 className=" font-bold text-[18px] mb-2">Create</h3>

            {menuLeftItems.map((item, index) => {
              if (item.label === "separator") {
                return (
                  <div className="px-2 rounded my-2" key={index}>
                    <div className="w-full border-t-1"></div>
                  </div>
                );
              }
              return (
                <Link
                  href={item.href}
                  key={index}
                  className="flex flex-col px-2"
                >
                  <div className="flex items-center space-x-2 hover:bg-slate-100 h-[52px] rounded-lg ">
                    <div className="w-[36px] h-[36px] rounded-full bg-slate-200 flex items-center justify-center">
                      <item.icon className="size-5" />
                    </div>
                    <span className="font-semibold text-[14px]">
                      {item.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
