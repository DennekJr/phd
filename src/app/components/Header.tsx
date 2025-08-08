'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import YellowButton from './YellowButton';

export default function Header() {
    const pathname = usePathname();

  return (
    <header className="absolute w-full top-0 left-0 right-0 z-50">
      <nav className="w-full !py-[31.5px] !px-[74px] flex items-center justify-between relative gap-4">
        {/* Logo */}
        <div className="flex items-center w-full">
          <Image
            src={pathname.includes('/our-team') ? "/images/black-text-logo.svg" : "/images/text-logo.svg"}
            alt="NNFPHAS logo"
            width={247}
            height={95}
            priority
            className="h-auto w-auto"
          />
        </div>

        {/* Navigation Menu (centered) */}
        <div className="md:flex hidden items-center text-white !space-x-[61px] justify-center w-full">
          <Link
            href="/"
            style={{ fontWeight: pathname === '/' ? '700' : '400' }}
            className={`!text-[16px] !leading-[100%] !tracking-[10%] no-underline ${
              pathname.includes('/our-team') 
                ? '!text-[#000000] hover:text-gray-800' 
                : '!text-[#ffffff] hover:text-gray-200'
            }`}          >
            Home
          </Link>
          <Link
            href="/events"
            style={{ fontWeight: pathname.includes('/events') ? '700' : '400' }}
            className={`!text-[16px] !leading-[100%] !tracking-[10%] no-underline ${
              pathname.includes('/our-team') 
                ? '!text-[#000000] hover:text-gray-800' 
                : '!text-[#ffffff] hover:text-gray-200'
            }`}          >
            Events
          </Link>
          <Link
            href="/our-team"
            style={{ fontWeight: pathname.includes('/our-team') ? '700' : '400' }}
            className={`!text-[16px] whitespace-nowrap !leading-[100%] !tracking-[10%] no-underline ${
              pathname.includes('/our-team') 
                ? '!text-[#000000] hover:text-gray-800' 
                : '!text-[#ffffff] hover:text-gray-200'
            }`}
          >
            Our Team
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-end w-full">
          <a href="mailto:NENFPHAS@gmail.com">
            <YellowButton>
              Join Us
            </YellowButton>
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden flex items-center">
          <svg className="w-6 h-6" fill="none" stroke="#ffffff" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
} 