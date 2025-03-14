import { truncateText } from "@/utils/string";
import { Bell, Ellipsis } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
type Props = {
  setVisible: any;
};

type itemBtn = {
  label: string;
  href: string;
};
const listItemBtn: itemBtn[] = [
  {
    label: "All",
    href: "all",
  },
  {
    label: "Unread",
    href: "unread",
  },
];
const Notification = ({ setVisible }: Props) => {
  const [listFocus, setListFocus] = useState<string>("all");
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
    <div
      ref={componentRef}
      className=" rounded-lg bg-white shadow-md shadow-black/30 p-0 fixed top-14 right-4 "
    >
      <div className="w-[348px] h-[610px] pl-3 overflow-hidden">
        <header className="w-full h-[49px] flex items-center justify-between">
          <h2 className="text-2xl font-bold">Menu</h2>
          <Ellipsis className="mr-4 text-gray-500" />
        </header>
        <div className=" h-full  overflow-auto gap-4 pb-16">
          <div className="flex gap-2">
            {listItemBtn.map((item, index) => (
              <button
                onClick={() => setListFocus(item.href)}
                key={index}
                className={` ${
                  listFocus === item.href
                    ? "text-blue-600 bg-blue-100  hover:bg-[rgba(196,210,214,0.5)]"
                    : "hover:bg-gray-200"
                } py-2 px-3 text-sm font-semibold rounded-3xl`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h4>Earlier</h4>
              <button className="text-sm hover:bg-gray-100 cursor-pointer text-blue-500 p-2 rounded">
                See all
              </button>
            </div>
            <div>
              {
                [1,2,3,4,5,6,7,8,9,10].map((key) =>  <div key={key} className="hover:bg-gray-100 cursor-pointer box-border  rounded-lg flex items-center space-x-2 px-2 py-1">
                <div className="relative w-[20%]">
                  <Image
                    src="/loid.jpg"
                    className="rounded-full"
                    width={56}
                    height={56}
                    alt="img"
                  />
                  <div className="absolute right-1 top-9 w-[24px] h-[24px] p-1 rounded-full flex items-center justify-center bg-slate-500 text-white">
                    <Bell />
                  </div>
                </div>
                <div className="w-[70%]">
                  <p className="text-sm">
                    <span className="font-bold ">Luong Nguyen</span>:{" "}
                    {truncateText(
                      "hi i am luong you can call me louis.it's my english name. I am twenty one years old.I live in Hanoi",
                      80
                    )}
                  </p>
                  <span className="text-[12px]">1d</span>
                </div>
                <div className="w-[10px] h-[10px] rounded-full bg-blue-700"></div>
              </div>)
              }
             <button className="text-center w-full bg-gray-200 cursor-pointer hover:bg-gray-300 py-2 rounded-lg mt-2">See previous notifications</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Notification;
