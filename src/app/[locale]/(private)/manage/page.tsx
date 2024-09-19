'use client'

import config from '@/config'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Manage() {
  const routes = useRouter()
  useEffect(() => {
    routes.push(`${config.routes.private.manageUsers}/${config.routes.private.users}`)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='size-full pl-5 pr-5'></div>
  )
}
