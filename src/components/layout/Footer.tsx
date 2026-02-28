import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">Navigate</h3>
            <ul>
              <li><Link href="/ideologies" className="text-gray-600 hover:text-gray-900">Ideologies</Link></li>
              <li><Link href="/sources" className="text-gray-600 hover:text-gray-900">Sources</Link></li>
              <li><Link href="/glossary" className="text-gray-600 hover:text-gray-900">Glossary</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">About</h3>
            <ul>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link href="/about/editorial-standards" className="text-gray-600 hover:text-gray-900">Editorial Standards</Link></li>
              <li><Link href="/about/correction-policy" className="text-gray-600 hover:text-gray-900">Correction Policy</Link></li>
              <li><Link href="/about/disclaimer" className="text-gray-600 hover:text-gray-900">Disclaimer</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Connect</h3>
            <ul>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              <li><Link href="/submit" className="text-gray-600 hover:text-gray-900">Submit a Source</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Critical Social Justice Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
