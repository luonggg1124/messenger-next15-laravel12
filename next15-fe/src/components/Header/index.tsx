import Image from "next/image";
import { Input } from "../ui/input";

import Menu from "./components/Menu";
import Account from "./components/Account";

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
      <Menu />
      <Account className="h-full" />
    </header>
  );
}
