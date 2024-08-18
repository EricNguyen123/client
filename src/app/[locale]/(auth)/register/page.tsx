import React from 'react'
import {useTranslations} from 'next-intl';
import { RegisterForm } from './register-form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';


export default function Register() {
  const t = useTranslations('Register');

  return (
    <div className='flex items-center justify-center'>
      <Card className='w-[360px]'>
        <CardHeader>
          <CardTitle>{t('title')}</CardTitle>
          <CardDescription>{t('description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm/>
        </CardContent>
        <CardFooter>
          
        </CardFooter>
      </Card>
    </div>
  )
}
