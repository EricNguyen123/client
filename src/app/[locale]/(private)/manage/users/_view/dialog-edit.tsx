'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import ItemsInput from "./items-input"
import { useState } from "react"
import { RadioMenu } from "@/components/radio-menu"
import { roles, status } from "@/constants/radio-menu"
import { Label } from "@/components/ui/label"
import { Status, StatusEnum } from "@/common/general"
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "@/redux/user/actions"
import { Button } from "@/components/ui/button"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useTranslations } from "next-intl"
import { toast } from "sonner"
import { FileCheck } from "lucide-react"

interface DialogEditProps { 
  open: boolean, 
  onOpenChange: (open: boolean) => void,
  data: DataUser,
}

export function DialogEdit({ open, onOpenChange, data }: DialogEditProps) {
  const dispatch = useDispatch()
  const usersSelector = useSelector(({ users } : any) => users);
  const [name, setName] = useState<string>(data.name);
  const [email, setEmail] = useState<string>(data.email);
  const [rolesValue, setRolesValue] = useState<string>(data.roles);
  const [isActiveValue, setIsActiveValue] = useState<number>(data.isActive ? Status.Active : Status.Inactive);
  const t = useTranslations('ManageUsers');

  const handleName = (e: string) => {
    setName(e);
  };

  const handleEmail = (e: string) => {
    setEmail(e);
  };

  const handleRoles = (e: string) => {
    setRolesValue(e);
  };

  const handleIsActive = (e: string) => {
    if (e === StatusEnum.Active) {
      setIsActiveValue(Status.Active);
    } else if (e === StatusEnum.Inactive) {
      setIsActiveValue(Status.Inactive);
    }
  };

  const handleToast = () => {
    toast.success(t('success'), {
      icon: <FileCheck /> ,
      description: `${t('editSuccess')}`,
    })
  }

  const handleSave = () => {
    if (name !== data.name || email !== data.email || rolesValue !== data.roles) {
      dispatch(updateUser({
        data: {
          id: data.id,
          name: name,
          email: email,
          roles: rolesValue,
          isActive: isActiveValue === Status.Active,
        },
        onOpenChange: onOpenChange,
        handleToast: handleToast,
      }))
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('headerEdit')}</DialogTitle>
          <DialogDescription>{t('descriptionEdit')}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <ItemsInput
            idName="name"
            type="text"
            label={t('userName')}
            value={name}
            placeholder={t('userName')}
            onChange={handleName}
          />
          <ItemsInput
            idName="email"
            type="email"
            label={t('email')}
            placeholder={t('email')}
            value={email}
            onChange={handleEmail}
          />
          <div className="grid grid-cols-2 gap-2">
            <div className="grid grid-rows-2 gap-1">
              <Label className="flex items-center justify-start">
                {t('roles')}
              </Label>
              <RadioMenu 
                init={rolesValue} 
                menuLabel={t('roles')} 
                items={roles} 
                setValue={handleRoles}/>
            </div>
            <div className="grid grid-rows-2 gap-1">
              <Label className="flex items-center justify-start">
                {t('isActive')}
              </Label>
              <RadioMenu 
                init={isActiveValue === Status.Active ? StatusEnum.Active : StatusEnum.Inactive} 
                menuLabel={t('status')} 
                items={status} 
                setValue={handleIsActive}/>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave} className="bg-sky-500 hover:bg-sky-700/90 w-20">
            {usersSelector.loading ? <ReloadIcon className="size-full animate-spin" /> : t('save')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
