"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginBodyType, LoginBody } from "@/schemaValidations/auth.schema"
import { useTranslations } from "next-intl"
import { useDispatch, useSelector } from "react-redux"
import { login } from "@/redux/auth/actions"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import config from "@/config"
import { ErrorNumber } from "@/common/general"
import { Eye, EyeOff } from "lucide-react"

const LoginForm = () => {
    const dispatch = useDispatch();
    const t = useTranslations('Login');
    const authSelector = useSelector(({ auth } : any) => auth);
    const router = useRouter();
    const [showError, setShowError] = useState<boolean>(false)
    const [showErrorMessage, setShowErrorMessage] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false); 

    useEffect(() => {
      if (authSelector.authenticated) {
        router.push(`${config.routes.public.home}`);
      }
    }, [authSelector, router]);

    const form = useForm<LoginBodyType>({
      resolver: zodResolver(LoginBody),
      defaultValues: {
        email: "",
        password: "",
      },
    })
   
    function onSubmit(values: LoginBodyType) {
      dispatch(login({
        data: values,
        setError: (error) => {
          if(error.status === ErrorNumber.NOT_FOUND) {
            setShowError(true)
            setShowErrorMessage(t('error401'))
          }
        },
      }))
    }

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('email')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('placeholderEmail')} type="email" {...field} />
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
                  <FormLabel>{t('password')}</FormLabel>
                  <FormControl>
                    <div className='w-full relative'>
                      <Input placeholder={t('placeholderPassword')} type={showPassword ? "text" : "password"}  {...field} />
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
            {showError && <span className="text-[0.8rem] font-medium text-destructive mt-3">{showErrorMessage}</span>}
            <Button type="submit" className="w-[100%] bg-sky-500 hover:bg-sky-700">{t('submit')}</Button>
          </form>
        </Form>
      )    
  }

  export default LoginForm;
