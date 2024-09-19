'use client'

import NavCustom from '@/components/navCustom/navCustom'
import { useNavProfiles } from '@/constants/navigation'
import React from 'react'

export default function NavProfile() {
  const navItems = useNavProfiles()
  return (
    <NavCustom items={navItems}/>
  )
}
