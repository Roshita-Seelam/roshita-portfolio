"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/constants/projects";
import Button from "@/common/Form/Button";

export default function Projects() {
  return (
    <div className="grid lg:grid-cols-12 py-2 md:grid-cols-[auto,1fr,1fr,auto] sm:grid-cols-1 mb-16 bg-primary gap-4">
      {projects.map((p, index) => (
        <div
          className="col-span-3  w-full overflow-hidden lg:min-h-[700px] h-auto my-6 border-4 rounded-sm"
          key={`${p.name}-${index}}`}
        >
          <div className="flex rounded flex-col relative h-full project-card z-0">
            <Image
              src={p.image}
              alt=""
              fill
              className="object-fill opacity-60 blur-sm"
            />
            <div className="flex flex-col gap-4 p-2.5 text-text-primary z-10">
              <div className="flex justify-between px-0 ">
                <p className="font-semibold text-xl mt-6">{p.name}</p>
              </div>
              <div className="px-0">
                <p className="text-sm">{p.description}</p>
              </div>
              <div className="pb-4">
                <Button className="grow font-medium border-b border-transparent hover:border-text-primary lg:absolute lg:bottom-4">
                  <Link href={p.url}>Link to project &rarr;</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
