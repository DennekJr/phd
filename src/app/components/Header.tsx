'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import YellowButton from './YellowButton';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="absolute w-full top-0 left-0 right-0 z-50">
      <nav className="w-full !py-[31.5px] !px-[74px] flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center w-full">
          <Image
            src="/images/text-logo.svg"
            alt="NNFPHAS logo"
            width={247}
            height={95}
            priority
            className="h-auto w-auto"
          />
        </div>

        {/* Navigation Menu (centered) */}
        <div className="flex items-center text-white !space-x-[61px] justify-center w-full">
          <Link 
            href="/" 
            style={{fontWeight: pathname === '/' ? '700' : '400'}} 
            className="!text-[#ffffff] !text-[16px] !leading-[100%] !tracking-[10%] hover:text-gray-200 no-underline"
          >
            Home
          </Link>
          <Link 
            href="/events" 
            style={{fontWeight: pathname === '/events' ? '700' : '400'}} 
            className="!text-[#ffffff] !text-[16px] !leading-[100%] !tracking-[10%] hover:text-gray-200 no-underline"
          >
            Events
          </Link>
          <Link 
            href="/our-team" 
            style={{fontWeight: pathname === '/our-team' ? '700' : '400'}} 
            className="!text-[#ffffff] !text-[16px] !leading-[100%] !tracking-[10%] hover:text-gray-200 no-underline"
          >
            Our Team
          </Link>
        </div>

        {/* JOIN US Button */}
        <div className='flex w-full justify-end'>
          <YellowButton>
            JOIN US
          </YellowButton>
        </div>

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