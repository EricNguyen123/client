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
import {  useState } from "react"
import { toast } from "sonner"
import { CircleX, Eye, EyeOff, FileCheck } from "lucide-react"
import { registerUser } from "@/redux/user/actions"
import { ReloadIcon } from "@radix-ui/react-icons"

export function FormAddUser({ onOpenChange }: { onOpenChange: (open: boolean) => void}) {
    const tr = useTranslations('Toast');
    const tm = useTranslations('ManageUsers');
    const t = useTranslations('Register');
    const dispatch = useDispatch();
    const usersSelector = useSelector(({ users } : any) => users);
    const form = useForm<RegisterBodyType>({
      resolver: zodResolver(RegisterBody),
      defaultValues: {
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
      },
    })
    const [showPassword, setShowPassword] = useState<boolean>(false); 
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    function onSubmit(values: RegisterBodyType) {
      dispatch(registerUser({
        data: values,
        setError: () => "",
        onOpenChange: onOpenChange,
        handleToast: () => {
          toast.success(tm('success'), {
            icon: <FileCheck /> ,
            description: `${tm('regiserSuccess')}`,
          })
        },
        handleToastError: () => {
          toast.error(tr('error'), {
            icon: <CircleX /> ,
            description: `${tr('errorMessage')}`,
          })
        }
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('confirmPassword')}</FormLabel>
                  <FormControl>
                    <div className='w-full relative'>
                      <Input placeholder={t('placeholderConfirmPassword')} type={showConfirmPassword ? "text" : "password"}  {...field} />
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
            <Button type="submit" className="w-[100%] bg-sky-500 hover:bg-sky-700">
              {usersSelector.loading ? <ReloadIcon className="size-full animate-spin" /> : t('submit')}
            </Button>
          </form>
        </Form>
      )    
  }