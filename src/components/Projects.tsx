'use client'

import React from "react"
import Image from 'next/image'
import Link from 'next/link'

import { projects } from '@/constants/projects'
import Button from '@/common/Form/Button'
import { Globe } from 'react-feather'

export default function Projects() {
  return (
    <div className='grid lg:grid-cols-6 text-primary py-2 md:grid-cols-[auto,1fr,1fr,auto] sm:grid-cols-1'>
      <div className='lg:col-start-2 lg:col-span-4 flex items-center justify-center flex-wrap md:col-start-2 md:col-span-2'>
        {projects.map((p,index) => (
          <div className='lg:basis-1/3 sm:basis-1/2 basis-full' key={`${p.name}-${index}}`}>
            <div className='flex flex-col gap-4 m-4 rounded bg-text-primary grow'>
            <div className='rounded-t overflow-hidden group relative flex'>
              <Link
                className='absolute top-[38%] right-[50%] left-[50%] bottom-[48%] z-10 opacity-0 group-hover:opacity-100 hidden p-6 rounded-full sm:block border-2 border-text-primary'
                href={p.url}
                >
                <Globe className='-mt-3.5 -ml-3.5 text-text-primary' size={28} strokeWidth={2} />
              </Link>
              <Image 
                src={p.image}
                fill
                alt=""
                className='!relative rounded-t -z-0 group-hover:blur-md group-hover:brightness-50 backdrop-brightness-0 group-hover:grayscale'
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className='flex justify-between items-baseline px-4'>
              <p className='font-semibold text-lg'>{p.name}</p>
            </div>
            <div className='px-4'>
              <p className='text-sm'>{p.description}</p>
            </div>
            <div className='flex flex-wrap gap-4 px-4 pb-4'>
            {p.tags.map((tag,index) => <p key={index} className='py-2 px-4 border-secondary border text-secondary rounded-full text-xs italic'>{tag}</p>)}
            </div>
            <div className='sm:hidden pb-4 px-4 flex items-center'>
              <Button className="px-6 py-2 border border-secondary text-secondary rounded-full grow font-medium">
                <Link href={p.url}>Link to project</Link>
              </Button>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}