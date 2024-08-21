import { useTranslations } from "next-intl";

const useRatings: () => ComponentNavItem[] = () => {
  const t = useTranslations('Ratings');
  
  return [
    {
      title: t('day'),
      href: "/docs/primitives/alert-dialog",
      description: t("desDay"),
    },
    {
      title: t('week'),
      href: "/docs/primitives/hover-card",
      description: t("desWeek"),
    },
    {
      title: t('month'),
      href: "/docs/primitives/progress",
      description: t("desMonth"),
    },
    {
      title: t('favorite'),
      href: "/docs/primitives/scroll-area",
      description: t("desFavorite"),
    },
    {
      title: t('new'),
      href: "/docs/primitives/tabs",
      description: t("desNew"),
    },
    {
      title: t('newStory'),
      href: "/docs/primitives/tooltip",
      description: t("desNewStory"),
    },
    {
      title: t('storyFull'),
      href: "/docs/primitives/tooltip",
      description: t("desStoryFull"),
    },
  ];
};

export { useRatings };
