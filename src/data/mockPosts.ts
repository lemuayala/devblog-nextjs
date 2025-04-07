import { Post } from '@/types/post';

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Introducción a Next.js',
    content:
      'Next.js es un framework de React que permite renderizar páginas en el servidor...',
    slug: 'intro-nextjs',
    date: '2024-01-15',
    image: '/images/nextjs.jpg',
  },
  {
    id: '2',
    title: '¿Qué es un Slug en Desarrollo Web?',
    content:
      'Un slug es una parte legible de una URL que identifica un contenido...',
    slug: 'que-es-un-slug',
    date: '2024-01-16',
  },
  {
    id: '3',
    title: 'Cómo Usar Tailwind CSS con Next.js',
    content:
      'Tailwind CSS es un framework de utilidades que te permite diseñar sin escribir CSS...',
    slug: 'tailwind-con-nextjs',
    date: '2024-01-17',
  },
];
