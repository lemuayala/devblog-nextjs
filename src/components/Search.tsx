import { useState } from 'react';
import { mockPosts } from '@/data/mockPosts';
import Link from 'next/dist/client/link';

export function Search() {
  const [query, setQuery] = useState('');

  const filteredPosts = mockPosts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-neutral-900/40 border border-purple-900/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 text-white placeholder-white/50"
      />

      {query && (
        <div className="absolute z-10 mt-2 w-full bg-neutral-900 rounded-lg shadow-lg border border-purple-900/30 max-h-60 overflow-auto">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.slug}`}
              className="block px-4 py-3 hover:bg-purple-900/10 border-b border-purple-900/10 last:border-0"
            >
              <h3 className="font-medium text-emerald-400/90">{post.title}</h3>
              <p className="text-xs text-white/60">{post.date}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
