import { Modal, ModalProps } from '@mui/base/Modal';
import { Error } from '@dodoex/icons';
import clsx from 'clsx';
import React from 'react';

export function DialogTitle({
  children,
  onClose,
}: React.PropsWithChildren<{
  onClose?: () => void;
}>) {
  return (
    <div className="flex items-center justify-between p-5">
      <h5 className="text-xl font-semibold">{children}</h5>
      {!!onClose && (
        <button
          className="text-secondary hover:text-primary"
          onClick={() => onClose()}
        >
          <Error className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

const Backdrop = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx(
        { 'MuiBackdrop-open': open },
        'fixed -z-[1] inset-0 bg-backdrop',
        className,
      )}
      ref={ref}
      {...other}
    />
  );
});
Backdrop.displayName = 'Backdrop';

export default function Dialog({
  children,
  className,
  slots,
  ...props
}: Omit<ModalProps, 'children'> & {
  children: React.ReactNode;
}) {
  return (
    <Modal
      className={clsx('fixed z-modal inset-0 flex items-end', className)}
      slots={{
        backdrop: Backdrop,
        ...slots,
      }}
      {...props}
    >
      <div className="bg-paper w-screen rounded-t-md md:rounded-none border-t">
        {children}
      </div>
    </Modal>
  );
}
