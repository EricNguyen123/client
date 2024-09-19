'use client'

import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { ChangePasswordBody, ChangePasswordBodyType } from '@/schemaValidations/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { changePassword } from '@/redux/auth/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from '@/components/ui/input'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import { ButtonCustom } from '../buttonCustom/button-custom'

export default function FormChangePassword() {
  const dispatch = useDispatch();
  const authSelector = useSelector(({ auth } : any) => auth);
  const [editPassword, setEditPassword] = useState<boolean>(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const t = useTranslations('Account');

  const form = useForm<ChangePasswordBodyType>({
    resolver: zodResolver(ChangePasswordBody),
    defaultValues: {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(values: ChangePasswordBodyType) {
    dispatch(changePassword({
      data: { ...values, id: authSelector.userInfo.id },
      handleHidenPage: handleHiden,
      handleErrorCurrentPassword: handleErrorCurrentPassword,
    }))
    
  }

  const handleErrorCurrentPassword = (data: {status: number, message: string}) => {
    if (data.status === 404) {
      form.setError("currentPassword", {
        type: "manual",
        message: t('errorMsgCurrentPassword'),
      });
    }
  }

  const handleHiden = () => {
    setEditPassword(false) 
    setShowPassword(false)
    setShowConfirmPassword(false)
    setShowCurrentPassword(false)
    form.reset({ currentPassword: "", password: "", confirmPassword: "" });
  }
  
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
      <Label htmlFor="password" className='mb-3'>{t('changePassword')}</Label>
      <div className='flex flex-col w-full max-w-sm items-start justify-center space-y-3'>
          <div className='flex flex-col w-full max-w-sm items-start justify-center space-y-3'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">
                {editPassword && (
                <>
                  <FormField
                    control={form.control}
                    name="currentPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className='w-full max-w-sm relative'>
                            <Input 
                              placeholder={t('currentPassword')}
                              type={showCurrentPassword ? "text" : "password"} 
                              {...field} 
                              defaultValue=""
                              disabled={!editPassword}
                            />
                            <span
                              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            >
                              {!showCurrentPassword ? 
                                <Eye className='text-sky-500'/> : 
                                <EyeOff className='text-sky-500'/>}
                            </span>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className='w-full max-w-sm relative'>
                            <Input 
                              placeholder={t('newPassword')}  
                              type={showPassword ? "text" : "password"} 
                              {...field} 
                              defaultValue=""
                              disabled={!editPassword}
                            />
                            <span
                              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {!showPassword ? 
                                <Eye className='text-sky-500'/> : 
                                <EyeOff className='text-sky-500'/>}
                            </span>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className='w-full max-w-sm relative'>
                            <Input 
                              placeholder={t('confirmPassword')}  
                              type={showConfirmPassword ? "text" : "password"} 
                              {...field} 
                              defaultValue=""
                              disabled={!editPassword}
                            />
                            <span
                              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {!showConfirmPassword ? 
                                <Eye className='text-sky-500'/> : 
                                <EyeOff className='text-sky-500'/>}
                            </span>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
                )}
                {!editPassword ? (
                <ButtonCustom
                  onClick={() => {
                    setEditPassword(!editPassword)
                  }} 
                  variant={"outline"}
                  className='w-full'
                >
                  {t('changePassword')}
                </ButtonCustom>) : (
                <Button 
                  variant={'outline'}
                  className="w-full"
                  type="submit"
                >
                  {t('save')}
                </Button>)}
              </form>
            </Form>
          </div>
          {editPassword && 
          <Button 
            variant={'destructive'} 
            className="w-full"
            onClick={handleHiden}
          >
            {t('cancel')}
          </Button>}
      </div>
    </div>
  )
}
