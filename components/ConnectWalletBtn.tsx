'use client';
import WalletIcon from '@/assets/icons/wallet.svg';
import { truncatePoolAddress } from '@/utils/address';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';

export default function ConnectWalletBtn() {
  const wallet = useWallet();
  const { setVisible } = useWalletModal();
  const account = wallet.publicKey?.toBase58();

  if (account) {
    return (
      <button
        className="btn gap-2 secondary rounded-[20px] bg-hover shadow-[0_0_10px_0_rgba(255,255,255,0.25)_inset]"
        disabled
      >
        <WalletIcon />
        {truncatePoolAddress(account)}
      </button>
    );
  }
  return (
    <button
      className="btn gap-2 primary rounded-[20px]"
      onClick={() => {
        setVisible(true);
      }}
    >
      <WalletIcon />
      Connect a wallet
    </button>
  );
}
