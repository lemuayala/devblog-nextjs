import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main
      className={`${
        mounted ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300 min-h-screen bg-gradient-to-br from-[#120020] via-black to-[rgb(0,26,26)] text-white`}
    >
      <div className="min-h-[calc(100vh-80px)] pb-20">
        <Component {...pageProps} />
      </div>
    </main>
  );
}
