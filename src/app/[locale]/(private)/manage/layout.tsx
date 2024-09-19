import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import React from 'react'
import NavManage from './nav-manage';

export default function ManageUsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-24 pt-[10px] h-[calc(100vh-100px)] w-full flex items-start justify-start pb-2">
      <NavManage/>
      <div className='h-full pl-2'>
        <DropdownMenuSeparator className='h-full w-[1px]'/>
      </div>
      {children}
    </div>
  )
}
