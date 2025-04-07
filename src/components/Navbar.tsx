import { useState } from 'react';
import Link from 'next/link';
import { ProfileIcon } from './ProfileIcon';
import { Search } from './Search';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="sticky top-0 z-50  backdrop-blur-md border-b border-purple-900/20">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500/90 to-emerald-500/90"
          >
            DevBlog
          </Link>

          {/* Menú desktop */}
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="/blogs"
              className="text-white/80 hover:text-white px-3 py-1 rounded-lg transition hover:bg-white/5"
            >
              Blogs
            </Link>
            <Link
              href="/podcasts"
              className="text-white/80 hover:text-white px-3 py-1 rounded-lg transition hover:bg-white/5"
            >
              Podcasts
            </Link>
            <div
              onClick={() => setShowSearch(!showSearch)}
              className="text-white/80 hover:text-white/90 px-3 py-1 rounded-lg transition hover:bg-white/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <ProfileIcon />
          </nav>

          {/* Menú móvil */}
          <button
            className="md:hidden text-white/80 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Search (solo visible cuando se activa) */}
        {showSearch && (
          <div className="mt-4">
            <Search />
          </div>
        )}

        {/* Menú móvil desplegable */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-2">
            <Link
              href="/blogs"
              className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition"
            >
              Blogs
            </Link>
            <Link
              href="/podcasts"
              className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition"
            >
              Podcasts
            </Link>
            <div className="pt-2">
              <Search />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
