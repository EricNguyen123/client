import React from 'react'
import {useTranslations} from 'next-intl';
import { RegisterForm } from './register-form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface RegisterProps {
  params: {locale: string}
}

const Register: React.FC<RegisterProps> = ({ params: {locale} }) => {
  const t = useTranslations('Register');

  return (
    <div className='h-[calc(100%-100px)] flex items-center justify-center'>
      <Card className='w-[600px]'>
        <CardHeader>
          <CardTitle>{t('title')}</CardTitle>
          <CardDescription>{t('description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm/>
        </CardContent>
        <CardFooter className='flex justify-end'>
          <Link href={`/${locale}/login`} className='text-xs font-normal text-sky-500 hover:underline'>
            {t('login')}
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Register
