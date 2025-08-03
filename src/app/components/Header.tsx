'use client';

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import YellowButton from './YellowButton';
import LoginModal from './LoginModal';
import { useAuth } from '@/contexts/AuthContext';

export default function Header() {
    const pathname = usePathname();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="absolute w-full top-0 left-0 right-0 z-50">
      <nav className="w-full !py-[31.5px] !px-[74px] flex items-center justify-between relative gap-4">
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
        <div className="md:flex hidden items-center text-white !space-x-[61px] justify-center w-full">
          <Link
            href="/"
            style={{ fontWeight: pathname === '/' ? '700' : '400' }}
            className={`!text-[16px] !leading-[100%] !tracking-[10%] no-underline ${
              pathname === '/our-team' 
                ? '!text-[#000000] hover:text-gray-800' 
                : '!text-[#ffffff] hover:text-gray-200'
            }`}          >
            Home
          </Link>
          <Link
            href="/events"
            style={{ fontWeight: pathname === '/events' ? '700' : '400' }}
            className={`!text-[16px] !leading-[100%] !tracking-[10%] no-underline ${
              pathname === '/our-team' 
                ? '!text-[#000000] hover:text-gray-800' 
                : '!text-[#ffffff] hover:text-gray-200'
            }`}          >
            Events
          </Link>
          <Link
            href="/our-team"
            style={{ fontWeight: pathname === '/our-team' ? '700' : '400' }}
            className={`!text-[16px] whitespace-nowrap !leading-[100%] !tracking-[10%] no-underline ${
              pathname === '/our-team' 
                ? '!text-[#000000] hover:text-gray-800' 
                : '!text-[#ffffff] hover:text-gray-200'
            }`}
          >
            Our Team
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-end w-full">
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <div className="text-white text-sm">
                Welcome, {user?.firstName}!
              </div>
              <Link href="/profile" className="text-white hover:text-[#EFB025] transition-colors text-sm">
                Profile
              </Link>
              <YellowButton onClick={logout} variant="secondary">
                Logout
              </YellowButton>
            </div>
          ) : (
            <YellowButton onClick={() => setIsLoginModalOpen(true)}>
              Join Us
            </YellowButton>
          )}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden flex items-center">
          <svg className="w-6 h-6" fill="none" stroke="#ffffff" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      
      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </header>
  );
} 