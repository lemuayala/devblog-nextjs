import Link from 'next/link';

export function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/tags/${tag.toLowerCase()}`}
          className="px-3 py-1 text-xs rounded-full bg-gray-900/30 text-gray-400 hover:bg-purple-900/35 transition"
        >
          # {tag}
        </Link>
      ))}
    </div>
  );
}
