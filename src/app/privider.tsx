"use client";
import {   ThemeProvider, createTheme } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';


// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Vazirmatn, Roboto, Arial',
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {

  return (
    <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}

        {children}
    </ThemeProvider>
  </CacheProvider>
  );
}
