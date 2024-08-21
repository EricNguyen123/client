import React from 'react'
import { ModeToggle } from './mode-toggle'
import Link from 'next/link'
import { useTranslations } from 'next-intl';
import LocalSwitcher from './local-switcher';
import Image from 'next/image'
import iconApp from '../../public/Meli.png'
import { NavBarMenu } from './navbar-menu';
import ButtonSearch from './button-search';

interface HeaderProps {
  locale: string;
}

const Header: React.FC<HeaderProps> = ({ locale }) => {
  const t = useTranslations('Header');
  return (
    <div className='h-[80px] flex justify-between items-center pt-[10px] pb-[10px]'>
      <div className='flex justify-center items-center ml-[20px]'>
        <Link href={`/`} className='mr-[30px]'>
          <Image src={iconApp} alt='icon-truyen-meli' className='w-[100px] h-[100px] rounded-full'/>
        </Link>
        <NavBarMenu/>
        <ButtonSearch/>
      </div>
      <div className='flex justify-center items-center'>
        <ul className='flex justify-end items-center mr-[10px]'>
          <li className='w-[100px] flex justify-center hover:rounded-br-lg hover:border-r-2 border-r-sky-500 hover:border-b-2 hover:border-b-sky-500 pb-1 transition-all duration-200'>
            <Link href={`/${locale}/login`} className='text-base font-normal text-sky-500'>
              {t('login')}
            </Link>
          </li>
          <li className='w-[100px] flex justify-center hover:rounded-bl-lg hover:border-l-2 border-l-sky-500 hover:border-b-2 hover:border-b-sky-500 pb-1 transition-all duration-200'>
            <Link href={`/${locale}/register`} className='text-base font-normal text-sky-500'>
              {t('register')}
            </Link>
          </li>
        </ul>
        <LocalSwitcher/>
        <ModeToggle/>
        <div className='mr-[20px]'></div>
      </div>
    </div>
  )
}

export default Header
