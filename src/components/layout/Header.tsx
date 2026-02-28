import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          CSJ Hub
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/topics" className="text-gray-600 hover:text-gray-900">Topics</Link>
          <Link href="/critiques" className="text-gray-600 hover:text-gray-900">Critiques</Link>
          <Link href="/sources" className="text-gray-600 hover:text-gray-900">Sources</Link>
          <Link href="/glossary" className="text-gray-600 hover:text-gray-900">Glossary</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
        </nav>
        <Link href="/submit" className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Submit a Source
        </Link>
        {/* Mobile Menu Button */}
      </div>
    </header>
  );
}
