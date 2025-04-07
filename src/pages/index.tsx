import Link from 'next/link';
import { mockPosts } from '@/data/mockPosts';
import { allTags } from '@/data/mockTags';
import { Navbar } from '@/components/Navbar';
import PageTransition from '@/components/PageTransition';
import { Tags } from '@/components/Tags';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6 px-4">
      <PageTransition>
        <Navbar />
        {/* Sección de tags populares */}
        <div className="mt-12 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Explora por temas</h2>
          <div className="flex flex-wrap gap-3">
            <Tags tags={allTags} />
          </div>
        </div>
        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPosts.map((post, index) => (
            <Link key={post.id} href={`/posts/${post.slug}`} className="group">
              <article
                className="bg-neutral-900/50 hover:bg-neutral-900/70 backdrop-blur-sm border border-purple-800/30 hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300 shadow-lg shadow-purple-900/0 hover:shadow-purple-900/20 animate-fadeIn"
                style={{
                  animationDelay: `${index * 1}s`, // Retraso progresivo (0.1s, 0.2s, 0.3s...)
                  opacity: 0,
                }}
              >
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-emerald-400/80 text-sm mb-4">{post.date}</p>
                <button
                  className="relative inline-flex items-center justify-center px-6 py-2 font-medium text-white border border-neutral-800 rounded-lg transition-all duration-300 ease-in-out bg-neutral-950
    transform hover:scale-102
    before:content-[''] before:absolute before:inset-[-4px] before:rounded-xl before:z-[-2] before:bg-gradient-to-r before:from-blue-600 before:via-fuchsia-600 before:to-pink-600 before:blur-sm before:opacity-0 hover:before:opacity-50
    after:content-[''] after:absolute after:inset-0 after:rounded-lg after:bg-neutral-950 after:z-[-1]"
                >
                  Leer más
                </button>
              </article>
            </Link>
          ))}
        </div>
      </PageTransition>

      {/* Footer */}
      <footer className="sm:fixed bottom-0 left-0 right-0 flex items-center justify-center p-4 max-w-6xl mx-auto text-sm  border-t border-purple-900/50">
        <p>© {new Date().getFullYear()} lemuayala</p>
      </footer>
    </div>
  );
}
