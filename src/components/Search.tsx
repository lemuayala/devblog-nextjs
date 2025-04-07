import { Post } from '@/types/post';
import { useState } from 'react';

export default function Search() {
  const [results, setResults] = useState<Post[]>([]);

  const handleSearch = async (query: string) => {
    const res = await fetch(`/api/search?query=${query}`);
    const data = await res.json();
    setResults(data);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        className="border p-2 rounded"
      />
      {results.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
