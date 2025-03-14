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
import { useEffect, useRef, useState } from "react";

type Props = {
  setVisible: any;
};

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

type MenuRightItem = {
  label: string;
  items?: {
    icon: string;
    label: string;
    text: string;
    href: string;
  }[];
};
const menuRightItemList: MenuRightItem[] = [
  {
    label: "Social",
    items: [
      {
        icon: "event.png",
        label: "Events",
        text: "Organize or find events and other things to do online and nearby.",
        href: "/events/create",
      },
      {
        icon: "friend.png",
        label: "Friends",
        text: "Search for friends or people you may know.",
        href: "/friend",
      },
      {
        icon: "group.png",
        label: "Groups",
        text: "Connect with people who share your interests.",
        href: "/group",
      },
      {
        icon: "new-feed.png",
        label: "News Feed",
        text: "See the most recent posts from your friends, groups, Pages and more.",
        href: "/new-feed",
      },
      {
        icon: "page.png",
        label: "Pages",
        text: "Discover and connect with businesses on Facebook.",
        href: "/new-feed",
      },
    ],
  },
  {
    label: "separator",
  },
  {
    label: "Entertainment",
    items: [
      {
        icon: "video-game.png",
        label: "Gaming Video",
        text: "Watch and connect with your favorite games and streamers.",
        href: "/gaming-video",
      },
      {
        icon: "playing-game.png",
        label: "Play Games",
        text: "Play your favorite games.",
        href: "/playing-game",
      },
      {
        icon: "video.png",
        label: "Videos",
        text: "A video destination personalized to your interests and connections.",
        href: "/videos",
      },
    ],
  },
];
const Menu = ({ setVisible }: Props) => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const [searchItemMenuRight, setSearchItemMenuRight] = useState("");

  const filteredDataMenuRightItemList = menuRightItemList
    .map((category: MenuRightItem) => ({
      ...category,
      items: category?.items?.filter((item: any) =>
        item?.label?.toLowerCase()?.includes(searchItemMenuRight?.toLowerCase())
      ),
    }))
    .filter((category: any) => category?.items?.length > 0);

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
    <div
      ref={componentRef}
      className=" rounded-lg bg-gray-100 p-0 fixed top-14 right-4 "
    >
      <div className="w-[608px] h-[610px] pl-3 overflow-hidden">
        <header className="w-full h-[49px] flex items-center">
          <h2 className="text-2xl font-bold">Menu</h2>
        </header>
        <div className=" h-full  overflow-auto grid grid-cols-6 gap-4 px-1 pb-16">
          {/* Left */}
          <div className=" col-span-4 bg-white rounded-lg  shadow-sm ">
            <div className="h-[40px] flex justify-center  ">
              <Input
                onChange={(e) => setSearchItemMenuRight(e.target.value)}
                type="search"
                placeholder="Search"
                className="mt-4 rounded-3xl mx-6 bg-slate-100 focus-visible:border-0 focus-visible:ring-0 "
              />
            </div>
            <div className="pt-6 px-4">
              {filteredDataMenuRightItemList.map((item, index) => {
                if (item.label === "separator") {
                  return (
                    <div className="px-2 rounded my-2" key={index}>
                      <div className="w-full border-t-1"></div>
                    </div>
                  );
                }
                return (
                  <div key={index}>
                    <h3 className="font-semibold">{item.label}</h3>
                    <div className="mt-2">
                      {item.items?.map((item, index) => (
                        <div
                          key={index}
                          className="w-full h-[60px] hover:bg-gray-100 rounded-lg flex items-center space-x-4 px-2 my-2 cursor-pointer"
                        >
                          <Image
                            src={`/icons/${item.icon}`}
                            width={36}
                            height={36}
                            alt={item.label}
                          />
                          <div>
                            <h3 className="font-semibold text-[14px]">
                              {item.label}
                            </h3>
                            <p className="text-[12px]">{item.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
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
