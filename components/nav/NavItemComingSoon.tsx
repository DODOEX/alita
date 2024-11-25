'use client';
import clsx from 'clsx';
import { MenuItem } from './type';
import { Tooltip } from '@dodoex/components';

export default function NavItemComingSoon({
  menu,
  className,
}: {
  menu: MenuItem;
  className?: string;
}) {
  if (!menu.comingSoon) throw new Error(`Menu ${menu.name} is not coming soon`);
  return (
    <Tooltip title="Coming soon">
      <span className={clsx(className, 'text-secondary cursor-pointer')}>
        {menu.name}
      </span>
    </Tooltip>
  );
}
