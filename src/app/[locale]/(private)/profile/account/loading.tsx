import EditPassword from '@/components/skeleton/account/edit-password'
import InputKeleton from '@/components/skeleton/account/input-keleton'
import React from 'react'

export default function AccountLoading() {
  return (
    <div className="flex flex-col size-full pl-5 pr-5 items-start justify-start">
      <InputKeleton/>
      <InputKeleton/>
      <EditPassword/>
    </div>
  )
}
