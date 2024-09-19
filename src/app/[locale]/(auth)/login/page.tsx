import React from 'react'
import {useTranslations} from 'next-intl';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import LoginForm from './login-form';
import FooterCard from '@/components/footer-card';
import config from '@/config';

interface LoginProps {
  params: {locale: string}
}

const Login: React.FC<LoginProps> = ({ params: {locale} }) => {
  const t = useTranslations('Login');

  return (
    <div className='h-[calc(100%-120px)] flex items-center justify-center'>
      <Card className='w-[600px]'>
        <CardHeader>
          <CardTitle>{t('title')}</CardTitle>
          <CardDescription>{t('description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm/>
        </CardContent>
        <CardFooter className='flex justify-center items-center flex-col'>
          <div className='w-full flex justify-end'>
            <Link href={`/${locale}/${config.routes.public.register}`} className='text-xs font-normal text-sky-500 hover:underline'>
              {t('register')}
            </Link>
          </div>
          <FooterCard/>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login
