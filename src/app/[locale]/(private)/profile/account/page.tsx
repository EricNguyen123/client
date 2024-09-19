'use client'

import { ButtonCustom } from '@/components/buttonCustom/button-custom'
import FormChangePassword from '@/components/formCustom/form-change-password'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getUser, updateEmail, updateUsername } from '@/redux/user/actions'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

type AccountType = {
  name: string;
  email: string;
}

export default function Account() {
  const dispatch = useDispatch();
  const authSelector = useSelector(({ auth } : any) => auth);
  const usersSelector = useSelector(({ users } : any) => users);
  const [user, setUser] = useState<AccountType>({ name: '', email: '' })
  const [editUsername, setEditUsername] = useState<boolean>(false)
  const [editEmail, setEditEmail] = useState<boolean>(false)
  const [checkUpdateName, setCheckUpdateName] = useState<boolean>(false)
  const [checkUpdateEmail, setCheckUpdateEmail] = useState<boolean>(false)
  const t = useTranslations('Account');

  useEffect(() => {
    if (authSelector.authenticated) {
      dispatch(getUser({ data: { id: authSelector.userInfo.id } }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authSelector.authenticated])

  useEffect(() => {
    if(usersSelector.userInfo) {
      setUser({ name: usersSelector.userInfo.name, email: usersSelector.userInfo.email })
    }
  }, [usersSelector.userInfo])

  const handleSaveUsername = (e: React.FormEvent) => {
    e.preventDefault();
    if (editUsername) {
      if (checkUpdateName) {
        dispatch(updateUsername({ data: { id: authSelector.userInfo.id, name: user.name } }))
        setCheckUpdateName(false)
      }
      setEditUsername(false);
    }
  };

  const handleSaveEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (editEmail) {
      if (checkUpdateEmail) {
        dispatch(updateEmail({ data: { id: authSelector.userInfo.id, email: user.email } }))
        setCheckUpdateEmail(false)
      }
      setEditEmail(false);
    }
  };

  return (
    <div className="flex flex-col size-full pl-5 pr-5 items-start justify-start">
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
        <Label htmlFor="userName" className='mb-3'>{t('userName')}</Label>
        <div className='flex w-full max-w-sm items-start justify-center'>
          <form onSubmit={handleSaveUsername} className="flex w-full max-w-sm items-start justify-center space-x-2">
            <Input 
              type="text" 
              placeholder={t('userName')}
              defaultValue={ user.name !== '' ? user.name : undefined}
              onChange={(event) => { 
                if(event.target.value.trim() !== user.name) {
                  setUser({ ...user, name: event.target.value.trim() })
                  setCheckUpdateName(true)
                }
              }}
              disabled={!editUsername}
            />
            {editUsername ? 
              <Button 
                type="submit" 
                className="bg-sky-500 hover:bg-sky-700/90 w-20"
              >
                {t('save')}
              </Button> : 
              <ButtonCustom
                onClick={() => { setEditUsername(!editEmail) }}
                className="bg-sky-500 hover:bg-sky-700/90 w-20"
              >
                {t('edit')}
              </ButtonCustom>
            }
          </form>
        </div>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
        <Label htmlFor="email" className='mb-3'>{t('email')}</Label>
        <div className='flex w-full max-w-sm items-start justify-center'>
          <form onSubmit={handleSaveEmail} className="flex w-full max-w-sm items-start justify-center space-x-2">
            <Input 
              type="email" 
              placeholder={t('email')}
              defaultValue={ user.email !== '' ? user.email : undefined}
              onChange={(event) => { 
                if(event.target.value.trim() !== user.email) {
                  setUser({ ...user, email: event.target.value.trim() })
                  setCheckUpdateEmail(true)
                }
              }}
              disabled={!editEmail}
            />
            {editEmail ? 
              <Button 
                type="submit" 
                className="bg-sky-500 hover:bg-sky-700/90 w-20"
              >
                {t('save')}
              </Button> : 
              <ButtonCustom
                onClick={() => { setEditEmail(!editEmail) }}
                className="bg-sky-500 hover:bg-sky-700/90 w-20"
              >
                {t('edit')}
              </ButtonCustom>
            }
          </form> 
        </div>
      </div>
      <FormChangePassword/>
    </div>
  )
}
