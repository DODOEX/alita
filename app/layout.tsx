import type { Metadata } from 'next';
import './globals.css';
import { manropeFont } from '@/utils/fonts';
import clsx from 'clsx';
import bgImage from '@/assets/bg.png';
import Image from 'next/image';
import React from 'react';
import { DESCRIPTION, TITLE, SINGLE_CHAIN_NAME } from '@/constants/config';
import { getI18nInstance } from '@/providers/i18n/appRouterI18n';
import { setI18n } from '@lingui/react/server';
import { LinguiClientProvider } from '@/providers/i18n/LinguiClientProvider';
import ClientProvider from '@/providers/ClientProvider';
import ConnectWalletBtn from '@/components/ConnectWalletBtn';
import SingleChainIcon from '@/assets/logo/single-chain.svg';
import LogoAndTextIcon from '@/assets/logo/logo-and-text.svg';
import LogoIcon from '@/assets/logo/logo.svg';
import TopNav from '@/components/nav/TopNav';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = 'en';
  const i18n = await getI18nInstance(lang);
  setI18n(i18n);
  return (
    <html lang={lang}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
      </head>
      <body className={clsx(manropeFont.className, 'bg-main text-white')}>
        <Image
          alt="bg"
          src={bgImage}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="relative z-10">
          <LinguiClientProvider
            initialLocale={lang}
            initialMessages={i18n.messages}
          >
            <React.Suspense>
              <ClientProvider>
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
                        <div className="hidden md:inline-block">
                          {SINGLE_CHAIN_NAME}
                        </div>
                      </button>
                      <ConnectWalletBtn />
                    </div>
                  </header>
                  <main className="flex flex-col items-center px-3 md:px-0 mt-7 md:mt-[100px]">
                    {children}
                  </main>
                </div>
              </ClientProvider>
            </React.Suspense>
          </LinguiClientProvider>
        </div>
      </body>
    </html>
  );
}
