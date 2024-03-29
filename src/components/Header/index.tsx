"use client";

import scroller from "@/hooks/scroller";
import Button from "@/common/Form/Button";
import { useRouter } from "next/navigation";
import Logo from "../Icons/logo";
import Menu from "./menu";
import DownloadIcon from "../Icons/download";

export default function Header() {
  const router = useRouter();
  // const handleClick = (to?: string, href?: string) => {
  //   if (to) {
  //     scroller.to(to);
  //   }
  //   if (href) {
  //     router.push(href);
  //   }
  // };
  return (
    <header className="sticky top-0 left-0 right-0 z-50 shadow-sm border-b border-text-primary">
      <div className="flex items-center justify-between px-4 h-[80px]">
        <div className="sm:flex w-[140px] text-3xl">
          <Button
            onClick={() => {
              scroller.top();
            }}
          >
            <Logo />
          </Button>
        </div>
        <div className="flex md:gap-8 gap-4 items-center">
          <a href="" className="inline-flex gap-1">
            <span className="lg:block hidden">Resume</span> <DownloadIcon />
          </a>
          <Menu />
        </div>
      </div>
    </header>
  );
}
