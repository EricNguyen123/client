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
import { RegisterBody, RegisterBodyType } from "@/schemaValidations/auth.schema"
import { useTranslations } from "next-intl"
import { useDispatch, useSelector } from "react-redux"
import { register } from "@/redux/auth/actions"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import config from "@/config"
import { toast } from "sonner"
import { CircleCheck } from "lucide-react"

export function RegisterForm() {
    const t = useTranslations('Register');
    const dispatch = useDispatch();
    const form = useForm<RegisterBodyType>({
      resolver: zodResolver(RegisterBody),
      defaultValues: {
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
      },
    })
    const authSelector = useSelector(({ auth } : any) => auth);
    const [registered, setRegistered] = useState<boolean>(false);
    const router = useRouter();
    
    useEffect(() => {
      if (authSelector.registered) {
        setRegistered(true);
      }
      if(registered) {
        router.push(`${config.routes.public.login}`);
        setRegistered(false);
        toast.success(t('register'), {
          icon: <CircleCheck /> ,
          description: `${t('confirmRegister')}`,
        })
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authSelector, router]);
    
    function onSubmit(values: RegisterBodyType) {
      dispatch(register({
        data: values,
        setError: () => "",
      }))
    }

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('name')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("placeholderName")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                    <Input placeholder={t('placeholderPassword')} type="password" {...field} />
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
                  <FormLabel>{t('confirmPassword')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('placeholderConfirmPassword')} type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-[100%] bg-sky-500 hover:bg-sky-700">{t('submit')}</Button>
          </form>
        </Form>
      )    
  }