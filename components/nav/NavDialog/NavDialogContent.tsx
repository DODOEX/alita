import Dialog, { DialogTitle } from '@/components/Dialog';
import { ArrowRight } from '@dodoex/icons';
import { MenuItem } from '../type';
import Link from 'next/link';
import clsx from 'clsx';
import { Trans } from '@lingui/macro';

export default function NavDialogContent({
  open,
  rootRef,
  menuList,
  onClose,
}: {
  open: boolean;
  rootRef: React.RefObject<HTMLDivElement>;
  menuList: Array<MenuItem>;
  onClose: () => void;
}) {
  return (
    <Dialog
      open={open}
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      container={() => rootRef.current!}
      onClose={onClose}
    >
      <DialogTitle onClose={onClose}>
        <Trans>Products</Trans>
      </DialogTitle>
      {menuList.map((menu) => {
        const key = menu.name;
        const baseClassName =
          'flex justify-between items-center px-5 h-17 font-semibold relative before:absolute before:top-0 before:left-5 before:right-5 before:h-px before:bg-border';
        if (menu.url) {
          return (
            <Link
              key={key}
              href={menu.url}
              className={clsx(baseClassName, 'hover:bg-hover')}
              onClick={() => {
                onClose();
              }}
            >
              {menu.name}
              <ArrowRight className="w-[18px] h-[18px]" />
            </Link>
          );
        }
        return (
          <div key={key} className={baseClassName}>
            {menu.name}
            <div className="px-2 py-1 text-xs bg-tag text-disabled rounded">
              Coming soon
            </div>
          </div>
        );
      })}
    </Dialog>
  );
}
