import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#120020] via-black to-[rgb(0,26,26)] text-white transition-all duration-300 ">
      <Component {...pageProps} />
    </main>
  );
}
