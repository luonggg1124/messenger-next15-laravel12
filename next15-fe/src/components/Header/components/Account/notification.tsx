import { Ellipsis } from "lucide-react";
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
        </div>
      </div>
    </div>
  );
};
export default Notification;
