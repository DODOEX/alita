import clsx from 'clsx';
import Link from 'next/link';
import { MenuItem } from './type';
import NavItemComingSoon from './NavItemComingSoon';
import NavDialog from './NavDialog';
import { t } from '@lingui/macro';
import { useLingui } from '@lingui/react';

export default function TopNav() {
  const { i18n } = useLingui();
  const menuList = [
    { name: t(i18n)`Swap`, url: '/' },
    { name: t(i18n)`Pool`, comingSoon: true },
    { name: t(i18n)`Mining`, comingSoon: true },
  ] as Array<MenuItem>;

  return (
    <>
      {/* pc */}
      <nav className="hidden md:flex">
        {menuList.map((menu) => {
          const key = menu.name;
          const baseClassName = 'px-4 py-2 font-semibold';
          if (menu.url) {
            return (
              <Link key={key} href={menu.url} className={clsx(baseClassName)}>
                {menu.name}
              </Link>
            );
          }
          if (menu.comingSoon) {
            return (
              <NavItemComingSoon
                key={key}
                menu={menu}
                className={baseClassName}
              />
            );
          }
          return null;
        })}
      </nav>
      {/* mobile */}
      <div className="md:hidden">
        <NavDialog menuList={menuList} />
      </div>
    </>
  );
}
