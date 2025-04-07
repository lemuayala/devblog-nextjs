import { mockPosts } from '@/data/mockPosts';
import { Post } from '@/types/post';
import Link from 'next/link';

// Interface para las props
interface Props {
  posts: Post[];
  tag: string;
}

export default function TagPage({ posts, tag }: Props) {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Posts sobre: <span className="text-emerald-400">#{tag}</span>
      </h1>

      {posts.length === 0 ? (
        <p className="text-gray-400">No hay posts con esta etiqueta.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.slug}`} className="group">
              <article className="bg-neutral-900/50 p-6 rounded-lg border border-purple-900/30 hover:border-emerald-400/50 transition">
                <h2 className="text-xl font-semibold group-hover:text-emerald-400">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm mt-2">{post.date}</p>
                {post.tags && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full bg-purple-900/20 text-purple-400"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// Genera todas las rutas posibles de tags
export async function getStaticPaths() {
  const tags = Array.from(
    new Set(mockPosts.flatMap((post) => post.tags || []))
  ).filter(Boolean);

  return {
    paths: tags.map((tag) => ({
      params: { tag: tag.toLowerCase() },
    })),
    fallback: false, // Cambia a 'blocking' si quieres manejar tags nuevos
  };
}

// Filtra los posts para cada tag
export async function getStaticProps({ params }: { params: { tag: string } }) {
  const filteredPosts = mockPosts.filter((post) =>
    post.tags?.some((t) => t.toLowerCase() === params.tag.toLowerCase())
  );

  return {
    props: {
      posts: filteredPosts,
      tag: params.tag,
    },
  };
}
