'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const activeLocale = useLocale();
  const t = useTranslations('Language');

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <Select defaultValue={activeLocale} onValueChange={onSelectChange} disabled={isPending}>
      <SelectTrigger className="w-[140px] h-[30px] mr-[8px]">
        <SelectValue placeholder={t('language')} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t('language')}</SelectLabel>
          <SelectItem value="vn">{t('vn')}</SelectItem>
          <SelectItem value="en">{t('en')}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
