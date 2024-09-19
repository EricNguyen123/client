'use client'

import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl';
import React from 'react'

export default function Add() {
  const t = useTranslations('ManageUsers');

  return (
    <Button className='bg-sky-500 hover:bg-sky-700/90 w-20'>{t('add')}</Button>
  )
}
