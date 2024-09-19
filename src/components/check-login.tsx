'use client'
import config from '@/config';
import { loginWithGoogle } from '@/redux/auth/actions';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function CheckLogin() {
  const dispatch = useDispatch()
  const routes = useRouter()
  const searchParams = useSearchParams()
  const tokenFromUrl = searchParams.get('token');
  useEffect(() => {
    if (tokenFromUrl) {
      const emailFromUrl = searchParams.get('email');
      dispatch(loginWithGoogle({
        email: emailFromUrl,
      }))
      routes.push(config.routes.public.home)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenFromUrl]);

  return (
    <></>
  );
}
