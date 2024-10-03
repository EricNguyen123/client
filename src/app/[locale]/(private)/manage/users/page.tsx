'use client'

import React, { useEffect, useState } from 'react'
import { TableUsers } from './_view/table-users'
import { getUsers } from '@/redux/user/actions'
import { useDispatch, useSelector } from 'react-redux'
import { columns } from './_view/columns'
import { ColumnDef } from '@tanstack/react-table'

export default function Users() {
  const dispatch = useDispatch()
  const usersSelector = useSelector(({ users } : any) => users);
  const [dataUsers, setDataUsers] = useState<DataUser[]>([])
  const [columnsTb, setColumnsTb] = useState<ColumnDef<DataUser>[]>(columns)
  useEffect(() => {
    dispatch(getUsers({ data: { offset: 0, limit: 10000 }}))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (usersSelector.users) {
      const data = usersSelector.users.map((user: DataUser) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        isActive: user.isActive,
        roles: user.roles,
      }))
      setDataUsers(data)
      setColumnsTb(columnsTb)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersSelector.users])

  
  return (
    <div className='size-full pl-5 pr-5 overflow-auto'>
      <TableUsers data={dataUsers} columns={columnsTb}/>
    </div>
  )
}
