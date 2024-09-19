'use client'

import NavCustom from '@/components/navCustom/navCustom'
import { useNavManage } from '@/constants/navigation'
import React from 'react'

export default function NavManage() {
  const navItems = useNavManage()
  return (
    <NavCustom items={navItems}/>
  )
}
