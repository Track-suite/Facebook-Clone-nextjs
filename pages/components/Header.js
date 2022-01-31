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
      <h1>Header</h1>

      {/* Left */}

      <Image
        alt="facebook"
        src="https://links.papareact.com/5me"
        width={40}
        height={40}
        layout="fixed"
      />
      <div>
        <input type="text" placeholder="Search Facebook" />
      </div>

      {/* Center */}

      {/* Right */}
    </div>
  );
};

export default Header;
