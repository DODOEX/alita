'use client';

import { SINGLE_CHAIN_ID } from '@/constants/config';
import { palette } from '@/constants/theme';
import { manropeFont } from '@/utils/fonts';
import { WidgetProps, UnstyleWidget } from '@dodoex/widgets';
import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';

export default function Widget({
  children,
  ...props
}: React.PropsWithChildren<WidgetProps>) {
  const wallet = useWallet();
  const { setVisible } = useWalletModal();
  return (
    <React.Suspense>
      <UnstyleWidget
        apikey="a37546505892e1a952"
        colorMode="dark"
        width="100%"
        height="100%"
        defaultChainId={SINGLE_CHAIN_ID}
        onlyChainId={SINGLE_CHAIN_ID}
        tokenList={[
          {
            decimals: 18,
            logoURI:
              'https://bridge.testnet.soo.network/assets/_P-icon-BQN19dSx.png',
            name: '$P',
            address: '6sRQN8MvjSagGhnJG6eK8FcEq9nwuF1nbBHbx5zGQsBo',
            symbol: '$P',
            chainId: -99999,
          },
          {
            decimals: 18,
            logoURI:
              'https://maticnetwork.github.io/polygon-token-assets/assets/eth.svg',
            name: 'Ether',
            address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            symbol: 'ETH',
            chainId: -99999,
          },
        ]}
        onlySolana
        solanaWallet={wallet}
        theme={{
          palette,
          typography: {
            fontFamily: manropeFont.style.fontFamily,
          },
        }}
        onConnectWalletClick={() => {
          setVisible(true);
          return true;
        }}
        noUI
        noAutoConnect
        {...props}
      >
        {children}
      </UnstyleWidget>
    </React.Suspense>
  );
}
