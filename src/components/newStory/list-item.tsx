import React from 'react'
import Image from 'next/image'
import img from '../../../public/TruyenMeli.png'

export default function ListItem() {
  return (
    <div className='w-full flex justify-start items-center border-b border-gray-300 pt-1 pb-1'>
      <Image src={img} alt="icon" className='w-[80px] h-[80px] mr-5 rounded-md'/>
      <span className='mr-5 text-xl font-semibold'>1</span>
      <div className='flex flex-col justify-center items-start'>
        <span className='text-xs text-slate-400 font-light mb-[2px]'>Category</span>
        <span className='text-xl font-semibold'>Name</span>
        <span className='font-light text-sm'>auther</span>
      </div>
    </div>
  )
}
