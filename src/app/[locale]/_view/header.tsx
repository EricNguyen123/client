import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import iconApp from '../../../../public/Meli.png'
import config from '@/config';
import { NavBarMenu } from './navbar-menu';
import ButtonSearch from './button-search';
import BoxHeader from './box-header';
import LocalSwitcher from '@/components/local-switcher';
import { ModeToggle } from '@/components/mode-toggle';

interface HeaderProps {
  locale: string;
}

const Header: React.FC<HeaderProps> = ({ locale }) => {
  
  return (
    <div className='w-full h-[98px] flex justify-between items-center pt-[10px] pb-[10px] fixed z-50 bg-white dark:bg-black'>
      <div className='flex justify-center items-center ml-[20px]'>
        <Link href={config.routes.public.home} className='mr-[30px]'>
          <Image src={iconApp} alt='icon-truyen-meli' className='w-[100px] h-[100px] rounded-full'/>
        </Link>
        <NavBarMenu locale={locale}/>
        <ButtonSearch/>
      </div>
      <div className='flex justify-center items-center'>
        <BoxHeader locale={locale}/>
        <LocalSwitcher/>
        <ModeToggle/>
        <div className='mr-[20px]'></div>
      </div>
    </div>
  )
}

export default Header
