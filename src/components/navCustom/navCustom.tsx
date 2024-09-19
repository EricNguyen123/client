import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import Link from 'next/link'
import React from 'react'

export default function NavCustom({ items }: { items: { link: string, name: string }[] }) {
  return (
    <div className='w-[220px] h-full pt-3 pb-3'>
      <NavigationMenu>
        <NavigationMenuList className='flex flex-col items-center justify-start w-full'>
          {items.map(( item, index ) => 
            (<NavigationMenuItem key={index}>
              <Link href={item.link} legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} !w-[220px]`}>
                  {item.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
