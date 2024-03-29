"use client";

import React from "react";
import { Drawer } from "antd";
import MenuIcon from "../Icons/menu";
import header from "@/constants/header";
import Link from "next/link";

function Menu() {
  const [open, setOpen] = React.useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        className="text-text-primary px-0 py-2 sm:text-lg sm:my-0 my-4 text-sm"
        onClick={showDrawer}
      >
        <MenuIcon />
      </button>
      <Drawer
        onClose={onClose}
        open={open}
        placement="right"
        className="flex flex-col"
      >
        {header.map((item, i) => (
          <Link
            key={i}
            className="text-text-primary text-lg mb-2 group flex gap-2 group-hover:border-b group-hover:text-text-primary"
            href={item.href}
          >
            <span>{item.title}</span>
          </Link>
        ))}
      </Drawer>
    </div>
  );
}

export default Menu;
