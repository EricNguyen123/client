'use client'

import { useTranslations } from 'next-intl';
import React from 'react'

export default function Header() {
  const t = useTranslations('ManageUsers');

  return (
    <div className='w-full flex items-center justify-between'>
      <span className='text-xl font-semibold'>{t('userManagement')}</span>
    </div>
  )
}
