import React from 'react'
import { ModeToggle } from './mode-toggle'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

interface HeaderProps {
  locale: string;
}

const Header: React.FC<HeaderProps> = ({ locale }) => {
  const t = useTranslations('Header');
  return (
    <div>
      <ul>
        <li>
          <Link href={`/${locale}/login`}>
            {t('login')}
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/register`}>
            {t('register')}
          </Link>
        </li>
      </ul>
      <ModeToggle/>
    </div>
  )
}

export default Header
