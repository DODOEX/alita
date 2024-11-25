'use client';
import { useNProgress } from '@/hooks/useNProgress';
import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@dodoex/components';
import { palette } from '@/constants/theme';
import { manropeFont } from '@/utils/fonts';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/constants/api';
import { SolanaReactProvider } from './SolanaReactProvider';

export default function ClientProvider({ children }: React.PropsWithChildren) {
  useNProgress();
  const theme = createTheme({
    mode: 'dark',
    lang: 'en',
    theme: {
      palette,
      typography: {
        fontFamily: manropeFont.style.fontFamily,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <SolanaReactProvider>{children}</SolanaReactProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
