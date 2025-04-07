import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { mockPosts } from '@/data/mockPosts';
import { Post } from '@/types/post';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { Tags } from '@/components/Tags';

export default function PostPage({ post }: { post: Post }) {
  const allPosts = mockPosts;
  const index = allPosts.findIndex((p) => p.slug === post.slug);
  const previous = allPosts[index - 1] || null;
  const next = allPosts[index + 1] || null;

  return (
    <>
      <Head>
        <title>{post.title} | lemuayala DebBlog </title>
        <meta name="description" content={post.excerpt || post.title} />
      </Head>
      <PageTransition>
        <motion.div
          className="max-w-3xl mx-auto px-4 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Botón de volver */}
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-emerald-400/80 hover:text-emerald-300 transition"
          >
            ← Volver al blog
          </Link>

          {/* Contenido */}
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400">
              {post.title}
            </h1>
            {/* Tags */}
            <div className="mb-2">{post.tags && <Tags tags={post.tags} />}</div>

            <time className="text-emerald-400/60 text-sm">{post.date}</time>
            <div className="prose prose-invert mt-8 max-w-none border-l-2 border-emerald-400/20 pl-4">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </article>

          {/* Navegación entre posts */}
          {(previous || next) && (
            <div className="mt-12 flex justify-between text-sm text-emerald-400/80">
              {previous && (
                <Link
                  href={`/posts/${previous.slug}`}
                  className="hover:text-emerald-300"
                >
                  ← {previous.title}
                </Link>
              )}
              {next && (
                <Link
                  href={`/posts/${next.slug}`}
                  className="hover:text-emerald-300 ml-auto"
                >
                  {next.title} →
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </PageTransition>
    </>
  );
}

// Esta función define qué slugs se generarán estáticamente
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = mockPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

// Esta función obtiene los datos de UN POST basado en el slug
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = mockPosts.find((post) => post.slug === slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};
