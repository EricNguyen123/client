'use client'

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { CircleX, Copy, FileCheck, FilePenLine, SquareUser, Trash2 } from "lucide-react"
import { DialogEdit } from "./dialog-edit"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { Delete } from "@/components/delete"
import { useDispatch } from "react-redux"
import { deleteUser } from "@/redux/user/actions"
import { toast } from "sonner"

export const UserActions = ({ user }: { user: DataUser}) => {
  const t = useTranslations('ManageUsers');
  const tr = useTranslations('Toast');
  const dispatch = useDispatch()
  const [openEdit, setOpenEdit] = useState<boolean>(false)
  const [openDelete, setOpenDelete] = useState<boolean>(false)
  const [data, setData] = useState<DataUser>(user)
  const handleOpenEdit = (open: boolean) => {
    setOpenEdit(open)
  }

  const handleOpenDelete = (open: boolean) => {
    setOpenDelete(open)
  }

  const handleDelete = () => {
    dispatch(deleteUser({
      data: {
        id: user.id,
      },
      onOpenChange: handleOpenDelete,
      handleToast: () => {
        toast.success(t('success'), {
          icon: <FileCheck /> ,
          description: `${t('deleteSuccess')}`,
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

  useEffect(() => {
    setData(user)
  }, [user])

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <DotsHorizontalIcon className="h-4 w-4 cursor-pointer" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{t('actions')}</DropdownMenuLabel>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => navigator.clipboard.writeText(data.id)}
          >
            <Copy className="w-4 h-4 mr-2" /> {t('copyUserID')}
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <SquareUser className="w-4 h-4 mr-2" />
            {t('viewUser')}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => handleOpenEdit(true)}
          >
            <FilePenLine className="w-4 h-4 mr-2" />
            {t('edit')}
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="text-destructive focus:text-destructive cursor-pointer"
            onClick={() => handleOpenDelete(true)}
          >
            <Trash2 className="w-4 h-4 mr-2" />
            {t('delete')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogEdit open={openEdit} onOpenChange={handleOpenEdit} data={data}/>
      <Delete open={openDelete} onOpenChange={handleOpenDelete} label={data.name} handleDelete={handleDelete}/>
    </>
  );
};
