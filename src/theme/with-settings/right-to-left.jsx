import { useEffect } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

// ----------------------------------------------------------------------

const cacheRtl = createCache({
  key: 'rtl',
  prepend: true,
});

export function RTL({ children, direction }) {
  useEffect(() => {
    document.dir = direction;
  }, [direction]);

  if (direction === 'rtl') {
    return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
  }

  return <>{children}</>;
}
