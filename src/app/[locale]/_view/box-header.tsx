'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useTranslations } from 'next-intl';
import { logout } from '@/redux/auth/actions';
import { toast } from 'sonner';
import { Check, CircleCheckBig } from 'lucide-react';
import config from '@/config';
import { useRouter } from 'next/navigation';
import { capitalizeFirstLetter } from '@/utils';
import LoadingPage from '@/components/loading-page';
import { DropdownMenuUser } from './dropdown-menu-user';

export default function BoxHeader({ locale }: { locale: string }) {
  const t = useTranslations('Header');
  const router = useRouter();
  const dispatch = useDispatch();
  const authSelector = useSelector(({ auth } : any) => auth);
  const [logined, setLogined] = useState<boolean>(false);
  const [accountName, setAccountName] = useState<string>('');
  const [role, setRole] = useState<string>('');

  useEffect(() => {
    if (authSelector.authenticated) {
      setAccountName(capitalizeFirstLetter(authSelector.userInfo.name))
      setRole(authSelector.role)
      setLogined(true)
      toast.success(t('login'), {
        icon: <Check /> ,
        description: `${t('confirmLogin')}`,
      })
    } else {
      setLogined(false)
      toast.success(t('logout'), {
        icon: <CircleCheckBig /> ,
        description: `${t('confirmLogout')}`,
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authSelector.authenticated]);

  const handleLogout = () => {
    const handleRedirect = () => {
      router.replace(`${process.env.NEXT_PUBLIC_API_URL}/${locale}/${config.routes.public.home}`)
    }
    dispatch(logout({ handleRedirect: handleRedirect }))
  }

  return (
    <>
      <LoadingPage loading={authSelector.loading}/>
        {!logined && (
          <ul className='flex justify-end items-center mr-[10px]'>
            <li className='w-[100px] cursor-pointer flex justify-center hover:rounded-br-lg hover:border-r-2 border-r-sky-500 hover:border-b-2 hover:border-b-sky-500 pb-1 transition-all duration-200'>
              <Link href={`/${locale}/${config.routes.public.login}`} className='text-base font-normal text-sky-500'>
                {t('login')}
              </Link>
            </li>
            <li className='w-[100px] cursor-pointer flex justify-center hover:rounded-bl-lg hover:border-l-2 border-l-sky-500 hover:border-b-2 hover:border-b-sky-500 pb-1 transition-all duration-200'>
              <Link href={`/${locale}/${config.routes.public.register}`} className='text-base font-normal text-sky-500'>
                {t('register')}
              </Link>
            </li>
          </ul>
        )}
        {logined && (
          <ul className='flex justify-end items-center mr-[10px]'>
            <DropdownMenuUser role={role} accountName={accountName} locale={locale} handleLogout={handleLogout}/>
          </ul>
        )}
    </>
  )
}
