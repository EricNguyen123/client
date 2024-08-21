import { useTranslations } from "next-intl";

const useCategory: () => ComponentNavItem[] = () => {
  const t = useTranslations('Category');
  
  return [
    {
      title: t('action'),
      href: "/docs/primitives/alert-dialog",
      description: "",
    },
    {
      title: t('adventure'),
      href: "/docs/primitives/hover-card",
      description: "",
    },
    {
      title: t('anime'),
      href: "/docs/primitives/progress",
      description: "",
    },
    {
      title: t('reincarnation'),
      href: "/docs/primitives/scroll-area",
      description: "",
    },
    {
      title: t('ancient'),
      href: "/docs/primitives/tabs",
      description: "",
    },
    {
      title: t('comedy'),
      href: "/docs/primitives/tooltip",
      description: "",
    },
    {
      title: t('comic'),
      href: "/docs/primitives/tooltip",
      description: "",
    },
    {
      title: t('demons'),
      href: "/docs/primitives/alert-dialog",
      description: "",
    },
    {
      title: t('detective'),
      href: "/docs/primitives/hover-card",
      description: "",
    },
    {
      title: t('doujinshi'),
      href: "/docs/primitives/progress",
      description: "",
    },
    {
      title: t('drama'),
      href: "/docs/primitives/scroll-area",
      description: "",
    },
    {
      title: t('fantasy'),
      href: "/docs/primitives/tabs",
      description: "",
    },
    {
      title: t('harem'),
      href: "/docs/primitives/hover-card",
      description: "",
    },
    {
      title: t('historical'),
      href: "/docs/primitives/progress",
      description: "",
    },
    {
      title: t('horror'),
      href: "/docs/primitives/scroll-area",
      description: "",
    },
    {
      title: t('manhua'),
      href: "/docs/primitives/tabs",
      description: "",
    },
    {
      title: t('manhwa'),
      href: "/docs/primitives/tooltip",
      description: "",
    },
    {
      title: t('webtoon'),
      href: "/docs/primitives/tooltip",
      description: "",
    },
  ];
};

export { useCategory };
