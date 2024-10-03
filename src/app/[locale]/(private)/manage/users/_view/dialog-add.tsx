'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useTranslations } from "next-intl"
import { FormAddUser } from "@/components/formCustom/form-add-user"
import { Button } from "@/components/ui/button";

interface DialogAddProps { 
  open: boolean, 
  onOpenChange: (open: boolean) => void,
}

export function DialogAdd({ open, onOpenChange }: DialogAddProps) {
  const t = useTranslations('ManageUsers');
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('headerAdd')}</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <FormAddUser onOpenChange={onOpenChange}/>
        <DialogFooter>
          <Button variant={'destructive'} className="w-full" onClick={() => {onOpenChange(false)}}>{t('cancel')}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
