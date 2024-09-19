'use client'

import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { useTranslations } from 'next-intl';
import React from 'react'

export default function FooterCard() {
  const t = useTranslations('Register');
  const handleLoginWithGoogle = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/google/login`
  }

  return (
    <div className='w-full mt-2'>
      <div className="border-t-[1px] border-gray-200 w-full mb-3"></div>
      <div className="w-full flex items-center justify-between">
        <Button className="w-full" onClick={() => { handleLoginWithGoogle() } }>
          <Mail className="mr-2 h-4 w-4" /> {t('loginWithEmail')}
        </Button>
      </div>
    </div>
  )
}
