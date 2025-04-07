import Link from 'next/link';

export function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition"
    >
      {children}
    </Link>
  );
}
