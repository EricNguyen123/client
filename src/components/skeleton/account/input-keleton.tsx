import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function InputKeleton() {
  return (
    <div className="grid w-[320px] items-center gap-1.5 mb-5">
        <Skeleton className='w-[100px] h-[20px] mb-3'/>
        <div className='flex w-[320px] items-start justify-center space-x-2'>
          <Skeleton className='w-[260px] h-[20px]'/>
          <Skeleton className='w-[60px] h-[20px]'/>
        </div>
    </div>
  )
}
