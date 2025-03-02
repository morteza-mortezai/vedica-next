"use client";

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

// Create rtl cache
const rtlCache = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function Providers({ children }: { children: React.ReactNode }) {

  return (
    <CacheProvider value={rtlCache}>{children}</CacheProvider>
  );
}
