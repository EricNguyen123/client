import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import img from '../../../public/TruyenMeli.png'
import { Heart, } from 'lucide-react'
import Link from 'next/link'

interface ItemCardProps {
  type?: "small" | "large" | "medium",
}
export default function ItemCard({ type } : ItemCardProps) {
  return (
    <Link href={'/'} className={`${type === "medium" ? "grid grid-cols-subgrid gap-4 col-span-2" : ""} relative group h-full`} >
      <Card className='h-full'>
        <Image 
          src={img} 
          alt='img-manga' 
          className='rounded-lg absolute inset-0 w-full h-full object-cover'
        />
        <div className='rounded-lg absolute inset-0 w-full h-full group-hover:bg-sky-500'></div>
        <div className='w-full h-full relative z-10 p-4'>
          <CardHeader className='p-2'>
            <CardTitle className='bg-white rounded-full p-1 pl-2 pr-2 w-max text-sky-600'>Card Title</CardTitle>
            <CardDescription className='flex items-center justify-start text-sky-600 text-xs'>
              <span className='bg-white rounded-full p-1 pl-2 pr-2 w-max flex items-center justify-start group-hover:hidden'>
                <Heart className='w-4 h-4'/>
                <span className='ml-2'>Card Description</span>
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className='p-0 w-full h-20'>
            <span className='hidden group-hover:flex text-white text-sm'>Nội dung của CardContent Nội dung của CardContent Nội dung của CardContent</span>
          </CardContent>
          <CardFooter className='p-2'>
            <p className='h-[40px] group-hover:flex hidden'></p>
            <p className='text-xs group-hover:hidden'>Card Footer</p>
          </CardFooter>
        </div>
      </Card>
    </Link>
  )
}
