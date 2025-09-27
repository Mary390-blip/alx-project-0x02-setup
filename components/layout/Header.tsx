export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-xl font-bold">My Next.js Project</h1>
    </header>
  );
}
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Next.js Project</h1>
      <nav className="space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/home" className="hover:underline">
          Page: Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
}
