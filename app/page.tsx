import ConnectWalletBtn from '@/components/ConnectWalletBtn';
import SwapWidget from '@/components/SwapWidget';
import SingleChainIcon from '@/assets/logo/single-chain.svg';
import LogoAndTextIcon from '@/assets/logo/logo-and-text.svg';
import LogoIcon from '@/assets/logo/logo.svg';
import TopNav from '@/components/nav/TopNav';
import { SINGLE_CHAIN_NAME } from '@/constants/config';

export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-center px-5 md:px-6 py-3 text-sm md:text-base">
        <div className="flex items-center gap-3">
          <LogoAndTextIcon className="hidden md:block" />
          <LogoIcon className="md:hidden" />
          <TopNav />
        </div>
        <div className="flex items-center gap-2">
          <button
            className="btn gap-2 secondary rounded-[20px] bg-hover shadow-[0_0_10px_0_rgba(255,255,255,0.25)_inset]"
            disabled
          >
            <SingleChainIcon />
            <div className="hidden md:inline-block">{SINGLE_CHAIN_NAME}</div>
          </button>
          <ConnectWalletBtn />
        </div>
      </header>
      <main className="flex flex-col items-center px-5 md:px-0 mt-7 md:mt-[100px]">
        <SwapWidget />
      </main>
    </div>
  );
}
