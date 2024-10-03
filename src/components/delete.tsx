import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { PackageX, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";

interface DialogDeleteProps { 
  open: boolean, 
  onOpenChange: (open: boolean) => void,
  label: string,
  handleDelete: () => void,
}

export function Delete({ open, onOpenChange, label, handleDelete }: DialogDeleteProps) {
  const t = useTranslations('ManageUsers');
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-start">
            <PackageX className="mr-3" />{t('delete')}
          </DialogTitle>
          <DialogDescription>
            {t('confirm')} <span className="font-semibold">{label}</span>.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="w-20" onClick={() => {onOpenChange(false)}}>{t('cancel')}</Button>
            <Button variant={'destructive'} className="w-20" onClick={() => {handleDelete()}}><Trash2 className="size-full m-0"/></Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
