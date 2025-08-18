'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import YellowButton from './YellowButton';
import { useState } from 'react';

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="absolute w-full top-0 left-0 right-0 z-50">
      <nav className="w-full !py-[31.5px] !px-[20px] md:!px-[75px] flex items-center justify-between relative gap-4">
        {/* Logo */}
        <div className="flex items-center w-full hover:cursor-pointer" onClick={() => router.push('/')}>
          <Image
            src={pathname.includes('/our-team') ? "/images/black-text-logo.svg" : "/images/text-logo.svg"}
            alt="NNFPHAS logo"
            width={247}
            height={95}
            priority
            className="md:h-[95px] h-[70px] md:w-[247px] w-[180px]"
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
        <button
          className="md:hidden flex items-center !p-[16px]"
          onClick={() => setIsOpen(open => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-10 h-10" fill="none" stroke={pathname.includes('/our-team') ? "#000000" : pathname === '/' ? "#C50A14" : "#ffffff"} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/90 transition-opacity duration-300 opacity-100 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile slide-down menu */}
      <div
        id="mobile-menu"
        className={`md:hidden z-50 absolute left-0 right-0 top-[88px] !pb-[50px] !p-[20px] !mx-[20px] bg-white !border-t !border-gray-100 shadow-md origin-top overflow-hidden transition-transform duration-300 ${isOpen ? 'scale-y-100' : 'scale-y-0'}`}
      >
        <div className="flex flex-col gap-4 p-5">
        <Image
            src="/images/black-text-logo.svg"
            alt="NNFPHAS logo"
            width={227}
            height={90}
            priority
            className="h-auto w-[75%]"
          />
          <Link href="/" onClick={() => setIsOpen(false)} className="text-[18px] font-medium text-[#232427]">
            Home
          </Link>
          <Link href="/events" onClick={() => setIsOpen(false)} className="text-[18px] font-medium text-[#232427]">
            Events
          </Link>
          <Link href="/our-team" onClick={() => setIsOpen(false)} className="text-[18px] font-medium text-[#232427]">
            Our Team
          </Link>
          <a href="mailto:NENFPHAS@gmail.com" onClick={() => setIsOpen(false)} className="mt-2">
            <YellowButton className="w-full">Join Us</YellowButton>
          </a>
        </div>
      </div>
    </header>
  );
} 