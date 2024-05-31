import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import '@/styles/tailwind.css';
import 'focus-visible';
import { initGA, logPageView } from '@/utils/ga'; // Import the GA utilities

function usePrevious(value) {
  let ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname);
  const nextRouter = useRouter();

  useEffect(() => {
    initGA();
    logPageView();
    nextRouter.events.on('routeChangeComplete', logPageView);
    return () => {
      nextRouter.events.off('routeChangeComplete', logPageView);
    };
  }, [nextRouter.events]);

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
