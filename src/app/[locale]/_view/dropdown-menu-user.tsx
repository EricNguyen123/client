'use client'

import {
  CreditCard,
  LifeBuoy,
  LogOut,
  SquareLibrary,
  User,
  Users,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import config from "@/config"
import { useTranslations } from "next-intl"
import { RoleEnum } from "@/common/general"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DropdownMenuUser({ role, accountName, locale, handleLogout }: { role: string, accountName: string, locale: string, handleLogout: () => void }) {
  const routes = useRouter();
  const t = useTranslations('DropdownMenu');
  
  const handleProfile = () => {
    routes.push(`/${locale}/${config.routes.private.profile}`)
  }

  const handleManageUsers = () => {
    routes.push(`/${locale}/${config.routes.private.manageUsers}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt={accountName} />
          <AvatarFallback>{accountName}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t('myAccount')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer" onClick={handleProfile}>
            <User className="mr-2 h-4 w-4" />
            <span>{t('profile')}</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <CreditCard className="mr-2 h-4 w-4" />
            <span>{t('wallet')}</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>{t('support')}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {role === RoleEnum.ADMIN && (<>
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer" onClick={handleManageUsers}>
            <Users className="mr-2 h-4 w-4" />
            <span>{t('manageUser')}</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <SquareLibrary className="mr-2 h-4 w-4" />
            <span>{t('manageStory')}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        </>)}
        <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4 text-destructive"/>
          <span className="text-destructive">{t('logout')}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
