'use client'

import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import { DialogAdd } from './dialog-add';
import { Plus } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Add() {
  const t = useTranslations('ManageUsers');
  const [openAdd, setOpenAdd] = useState<boolean>(false)

  const handleOpenAdd = (open: boolean) => {
    setOpenAdd(open)
  }

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className='bg-sky-500 hover:bg-sky-700/90 w-20' onClick={() => {handleOpenAdd(true)}}>                <Plus className='h-4 w-4'/>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <span>{t('add')}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      <DialogAdd open={openAdd} onOpenChange={handleOpenAdd}/>
    </>
  )
}
