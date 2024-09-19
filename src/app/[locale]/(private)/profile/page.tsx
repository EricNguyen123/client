'use client'

import config from '@/config'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
export default function Profile() {
  const routes = useRouter()
  useEffect(() => {
    routes.push(`${config.routes.private.profile}/${config.routes.private.account}`)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (<div className='size-full pl-5 pr-5'></div>)
}
