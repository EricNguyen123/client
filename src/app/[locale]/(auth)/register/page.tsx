import React from 'react'
import {useTranslations} from 'next-intl';
import { RegisterForm } from './register-form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import FooterCard from '@/components/footer-card';
import config from '@/config';

interface RegisterProps {
  params: {locale: string}
}

const Register: React.FC<RegisterProps> = ({ params: {locale} }) => {
  const t = useTranslations('Register');

  return (
    <div className='h-[calc(100%-120px)] flex items-center justify-center'>
      <Card className='w-[600px]'>
        <CardHeader>
          <CardTitle>{t('title')}</CardTitle>
          <CardDescription>{t('description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm/>
        </CardContent>
        <CardFooter className='flex justify-center items-center flex-col'>
          <div className='w-full flex justify-end'>
            <Link href={`/${locale}/${config.routes.public.login}`} className='text-xs font-normal text-sky-500 hover:underline'>
              {t('login')}
            </Link>
          </div>
          <FooterCard/>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Register
