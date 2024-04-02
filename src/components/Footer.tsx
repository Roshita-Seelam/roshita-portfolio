"use client";

import Link from "next/link";
import ReactCurvedText from "react-curved-text";

import { mails, socials } from "@/constants/footer";
import ScrollElement from "@/common/Scroll/Element";
import Brand from "./Icons/brand";
import { track } from '@vercel/analytics'
import Button from '@/common/Form/Button'

export default function Footer() {
  return (
    <ScrollElement name="about" className="px-4 bg-primary">
      <div className="flex md:justify-between w-full py-24 lg:gap-12 sm:gap-4 gap-0 flex-wrap justify-center flex-row-reverse sm:flex-row">
        <div className="relative w-fit h-fit">
          <div className="animate-spin-slow">
            <ReactCurvedText
              width={150}
              height={150}
              cx={75}
              cy={75}
              rx={42}
              ry={42}
              startOffset={0}
              reversed={true}
              text="Transforming data into actionable insights"
              textProps={{ style: { fontSize: 12 } }}
              textPathProps={{ fill: "#fffded" }}
            />
          </div>
          <div className="absolute top-14 left-14">
            <Brand />
          </div>
        </div>
        <div className="flex sm:gap-6">
          <div className="flex flex-col items-end basis-1/2 sm:basis-auto gap-8">
            <p className="sm:text-2xl font-black sm:mb-6 mb-2 text-sm border-b">
              Contact
            </p>
            <div className="flex flex-col items-end gap-2">
              {mails.map((mail) => (
                <Button onClick={()=>{track(mail, {location: 'footer'})}} key={mail} className='border-transparent hover:border-b hover:border-text-primary'>
                  <Link
                  href={`mailto:${mail}`}
                  className="sm:text-base text-xs"
                >
                  {mail}
                </Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-end basis-1/2 sm:basis-auto gap-6">
            <p className="sm:text-2xl font-black sm:mb-6 mb-2 text-sm border-b">
              Socials
            </p>
            <div className="flex flex-col items-end gap-2">
              {socials.map((item) => (
                <Button key={item.slug} onClick={()=>{track(item.name, {location: 'footer'})}} className='border-transparent hover:border-b hover:border-text-primary'>
                  <Link
                  href={item.url}
                  className="sm:text-base text-xs"
                >
                  {item.name}
                </Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="sm:flex flex-col items-end hidden sm:basis-auto gap-6">
            <p className="sm:text-2xl font-black sm:mb-6 mb-2 text-sm border-b">
              Address
            </p>
            <p className="sm:text-base text-xs">Hartford, CT</p>
          </div>
        </div>
      </div>
      <div className="py-6 flex justify-end items-center text-xs border-t">
        <p>Copyright © 2024</p>
      </div>
    </ScrollElement>
  );
}
