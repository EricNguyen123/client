import config from "@/config"
import { useTranslations } from "next-intl";

const useNavProfiles: () => ComponentNavMenu[] = () => {
  const t = useTranslations('NavProfiles');
  return [
    {
      link: `${config.routes.private.account}`,
      name: t('account'),
    },
    {
      link: `${config.routes.private.account}`,
      name: t('comments'),
    },
    {
      link: `${config.routes.private.account}`,
      name: t('subscribed'),
    }
  ]
}

const useNavManage: () => ComponentNavMenu[] = () => {
  const t = useTranslations('NavManageUsers');
  return [
    {
      link: `${config.routes.private.users}`,
      name: t('users'),
    },
    {
      link: `${config.routes.private.story}`,
      name: t('story'),
    }
  ]
}

export { useNavProfiles, useNavManage }
