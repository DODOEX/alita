import type { Metadata } from 'next';
import './globals.css';
import { manropeFont } from '@/utils/fonts';
import clsx from 'clsx';
import { DESCRIPTION, TITLE } from '@/constants/config';
import { getI18nInstance } from '@/providers/i18n/appRouterI18n';
import { setI18n } from '@lingui/react/server';
import { LinguiClientProvider } from '@/providers/i18n/LinguiClientProvider';
import ClientProvider from '@/providers/ClientProvider';
import bgImage from '@/assets/bg.png';
import Image from 'next/image';

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
            <ClientProvider>{children}</ClientProvider>
          </LinguiClientProvider>
        </div>
      </body>
    </html>
  );
}
