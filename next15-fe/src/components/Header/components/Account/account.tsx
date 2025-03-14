import { ChevronDown, UserPen } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  setVisible: any;
};
const Account = ({ setVisible }: Props) => {
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
      <div className="w-[348px] pl-3 overflow-hidden p-4 flex justify-center">
        <div className="w-full rounded-lg shadow-md shadow-black/30 p-1">
          <div className="hover:bg-gray-200 flex items-center gap-2 px-1 py-2 cursor-pointer rounded-lg">
            <Image
              src="/loid.jpg"
              width={48}
              height={48}
              className="rounded-full"
              alt="Avatar"
            />
            <span className="font-semibold">Louis Ng</span>
          </div>
          <div className="px-2 rounded my-2">
            <div className="w-full border-1"></div>
          </div>
          <div className="w-full flex items-center justify-center mb-2">
            <button className="bg-gray-200 hover:bg-gray-300 w-[96%] p-2 rounded-lg flex items-center justify-center gap-2">
              <span>
                <UserPen className="size-5" />
              </span>
              <p>See all profiles</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Account;
