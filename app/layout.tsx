import type { Metadata } from 'next';
import './globals.css';
import { manropeFont } from '@/utils/fonts';
import clsx from 'clsx';
import bgImage from '@/assets/bg.png';
import Image from 'next/image';
import React from 'react';
import {
  DESCRIPTION,
  TITLE,
  SINGLE_CHAIN_NAME,
  X_LINK,
  CONTRACT_EMAIL,
} from '@/constants/config';
import { getI18nInstance } from '@/providers/i18n/appRouterI18n';
import { setI18n } from '@lingui/react/server';
import { LinguiClientProvider } from '@/providers/i18n/LinguiClientProvider';
import ClientProvider from '@/providers/ClientProvider';
import ConnectWalletBtn from '@/components/ConnectWalletBtn';
import SingleChainIcon from '@/assets/logo/single-chain.svg';
import LogoAndTextIcon from '@/assets/logo/logo-and-text.svg';
import LogoIcon from '@/assets/logo/logo.svg';
import TopNav from '@/components/nav/TopNav';
import { Trans } from '@lingui/macro';

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
      <body
        className={clsx(
          manropeFont.className,
          'bg-main text-white pb-20 md:pb-6',
        )}
      >
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
              </ClientProvider>
            </React.Suspense>
          </LinguiClientProvider>
        </div>
        <footer className="fixed bottom-0 z-10 flex justify-center md:justify-end items-center gap-4 w-screen px-6 py-3 text-sm text-secondary max-md:bg-paperDarkContrast max-md:backdrop-blur">
          <Trans>Contact us</Trans>
          <a
            target="_blank"
            rel="noreferrer"
            href={X_LINK}
            className="flex items-center justify-center w-8 h-8 rounded-full border text-active hover:bg-footer-link-hover"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.15723 6.04401L12.688 0.777344H11.6144L7.68028 5.35032L4.53814 0.777344H0.914062L5.66559 7.69249L0.914062 13.2154H1.98777L6.14226 8.38618L9.46058 13.2154H13.0847L8.15696 6.04401H8.15723ZM6.68663 7.75341L6.2052 7.06482L2.37465 1.58562H4.0238L7.11511 6.00751L7.59654 6.6961L11.6149 12.4439H9.96571L6.68663 7.75368V7.75341Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href={`mailto:${CONTRACT_EMAIL}`}
            className="flex items-center justify-center w-8 h-8 rounded-full border text-active hover:bg-footer-link-hover"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.66659 13.3337C2.29992 13.3337 1.98603 13.2031 1.72492 12.942C1.46381 12.6809 1.33325 12.367 1.33325 12.0003V4.00033C1.33325 3.63366 1.46381 3.31977 1.72492 3.05866C1.98603 2.79755 2.29992 2.66699 2.66659 2.66699H13.3333C13.6999 2.66699 14.0138 2.79755 14.2749 3.05866C14.536 3.31977 14.6666 3.63366 14.6666 4.00033V12.0003C14.6666 12.367 14.536 12.6809 14.2749 12.942C14.0138 13.2031 13.6999 13.3337 13.3333 13.3337H2.66659ZM7.99992 8.66699L13.3333 5.33366V4.00033L7.99992 7.33366L2.66659 4.00033V5.33366L7.99992 8.66699Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </footer>
      </body>
    </html>
  );
}
