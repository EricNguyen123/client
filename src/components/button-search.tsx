"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { Input } from './ui/input'

export default function ButtonSearch() {
  const [handle, setHandle] = useState<boolean>(false)
  const handleSearch = () => {
    setHandle(!handle)
  }
  return (
    <div className='flex items-center ml-[20px]'>
      <div className="flex w-full max-w-md items-center rounded-full border-sky-500 border peer-focus-within:border-sky-400">
        <Button 
          variant="ghost" 
          size="icon" 
          className='rounded-full'
          onClick={handleSearch}
        >
          <Search />
        </Button>
        {handle && 
        <Input 
          type="text" 
          placeholder="Search" 
          className='w-[80%] border-transparent rounded-tl-full rounded-bl-full focus-visible:ring-0 peer'/>}
      </div>
    </div>
  )
}
