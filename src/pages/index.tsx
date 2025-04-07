import Link from 'next/link';
import { mockPosts } from '@/data/mockPosts';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <header className="flex items-center justify-between p-4 max-w-6xl mx-auto">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500/90 to-emerald-500/90 text-center">
          DevBlog
        </div>
        <nav className="flex items-center gap-6 text-sm text-white/80">
          <a href="#" className="hover:text-white transition">
            Blogs
          </a>
          <a href="#" className="hover:text-white transition">
            Podcasts
          </a>
          <a href="#" className="hover:text-white transition">
            Videos
          </a>
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-purple-600 shadow-inner shadow-purple-900/60 hover:shadow-purple-900/100 transition"></div>
        </nav>
      </header>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPosts.map((post) => (
          <Link key={post.id} href={`/posts/${post.slug}`} className="group">
            <article className="bg-neutral-900/50 hover:bg-neutral-900/70 backdrop-blur-sm border border-purple-800/30 hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300 shadow-lg shadow-purple-900/0 hover:shadow-purple-900/20">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-emerald-400/80 text-sm mb-4">{post.date}</p>
              <button
                className="relative inline-flex items-center justify-center px-6 py-2 font-medium text-white border border-white/30 rounded-lg transition-all duration-300 overflow-hidden
  before:content-[''] before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-500 before:via-fuchsia-500 before:to-pink-500 before:blur-xl before:opacity-0 hover:before:opacity-40 before:transition-all before:duration-300"
              >
                Leer más
              </button>
            </article>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-center p-4 max-w-6xl mx-auto text-sm  border-t border-purple-900/50">
        <p>© {new Date().getFullYear()} lemuayala</p>
      </footer>
    </div>
  );
}
