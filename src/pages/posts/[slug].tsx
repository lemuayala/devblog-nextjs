// pages/posts/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { mockPosts } from '@/data/mockPosts';
import { Post } from '@/types/post';

interface PostProps {
  post: Post;
}

export default function PostPage({ post }: PostProps) {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <div className="prose">
        <p>{post.content}</p>
      </div>
    </div>
  );
}

// Esta función define qué slugs se generarán estáticamente
export const getStaticPaths: GetStaticPaths = async () => {
  // Obtener todos los slugs de los posts
  const paths = mockPosts.map((post) => ({
    params: { slug: post.slug }, // Ej: { slug: "intro-nextjs" }
  }));

  return {
    paths,
    fallback: false, // Si un slug no existe, muestra 404
  };
};

// Esta función obtiene los datos de UN POST basado en el slug
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = mockPosts.find((post) => post.slug === slug);

  if (!post) {
    return { notFound: true }; // Si no existe el post, muestra 404
  }

  return { props: { post } };
};
