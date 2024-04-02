"use client";

import scroller from "@/hooks/scroller";
import Logo from "../Icons/logo";
import Menu from "./menu";
import Button from '@/common/Form/Button'
import { track } from '@vercel/analytics'

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 shadow-sm border-b border-text-primary">
      <div className="flex items-center justify-between px-4 h-[80px]">
        <div className="sm:flex w-[140px] text-3xl">
          <Button
            onClick={() => {
              scroller.top();
            }}
            className='border-none'
          >
            <Logo />
          </Button>
        </div>
        <div className="flex md:gap-8 gap-4 items-center">
          <Button className='border-none text-text-primary' onClick={()=>{track('Resume', {location: 'Header'})}}>
            <a href="https://r-prf.s3.ap-southeast-2.amazonaws.com/files/Roshita_Seelam_Resume.pdf" target='_blank' className="inline-flex gap-1">
              <span className="lg:block hidden">Resume</span>
            </a>
          </Button>
          <Menu />
        </div>
      </div>
    </header>
  );
}
