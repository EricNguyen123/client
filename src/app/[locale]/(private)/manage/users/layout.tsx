import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import React from 'react'
import Header from './_view/header';

export default function ManageUsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[calc(100vh-100px)] w-full flex flex-col items-start justify-start pl-5 pr-5 space-y-3">
      <div className='w-full'>
        <Header/>
        <DropdownMenuSeparator className='mt-3 mb-6'/>
      </div>
      {children}
    </div>
  )
}
