'use client';
import MenuIcon from '@/assets/icons/menu.svg';
import React from 'react';
import NavDialogContent from './NavDialogContent';
import { MenuItem } from '../type';

export default function NavDialog({ menuList }: { menuList: Array<MenuItem> }) {
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);

  return (
    <nav ref={rootRef}>
      <MenuIcon className="text-secondary" onClick={() => setOpen(true)} />
      <NavDialogContent
        open={open}
        onClose={() => setOpen(false)}
        rootRef={rootRef}
        menuList={menuList}
      />
    </nav>
  );
}
