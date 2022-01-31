import React from "react";

import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <div>
      <div className="flex items-center">
        {/* Left */}

        <Image
          alt="facebook"
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 item-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6" />
          <input
            className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-502"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Center */}

      {/* Right */}
    </div>
  );
};

export default Header;
