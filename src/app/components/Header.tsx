import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-red-800 font-bold text-xs">N</span>
            </div>
          </div>
          <span className="text-2xl font-bold text-gray-900">NNFPHAS</span>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
            Home
          </Link>
          <Link href="/events" className="text-gray-700 hover:text-gray-900 font-medium">
            Events
          </Link>
          <Link href="/our-team" className="text-gray-700 hover:text-gray-900 font-medium">
            Our Team
          </Link>
        </div>

        {/* JOIN US Button */}
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-md transition-colors">
          JOIN US
        </button>

        {/* Mobile menu button */}
        <button className="md:hidden flex items-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
} 