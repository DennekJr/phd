"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import YellowButton from "./YellowButton";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const isTeamPage = pathname.startsWith("/our-team");

  return (
    <header className="absolute w-full top-0 left-0 right-0 z-50 ">
      {/* Navigation container - 28px padding for mobile/tablet, 75px for desktop */}
      <nav className="w-full !py-[31.5px] !px-[28px] lg:!px-[75px] flex items-center justify-between relative gap-20 md:gap-6">
        {/* Logo */}
        <div
          className="flex items-center w-full relative z-50"
          onClick={() => router.push("/")}
        >
          <div className="flex flex-col md:flex-row items-center">
            <Image
              src={"/images/logo.svg"}
              alt="NNFPHAS logo"
              width={56}
              height={56}
              priority
              className="h-[56px] w-[56px] md:h-[95px] md:w-[95px] "
            />
            <div className="">
              <p
                className="font-black text-[17px] md:text-[28px] !p-[2px] md:!p-[10px]"
                style={{
                  color: isTeamPage || isOpen ? "#000000" : "#ffffff",
                }}
              >
                NENPHAS
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Menu - Hidden on mobile/tablet, visible on desktop */}
        <div className="lg:flex hidden items-center text-white !space-x-[61px] justify-center w-full ">
          <Link
            href="/"
            style={{
              fontWeight: pathname === "/" ? "700" : "400",
              color: isTeamPage ? "#000000" : "#ffffff",
            }}
            className="!text-[16px] !leading-[100%] !tracking-[10%] hover:text-gray-200 no-underline"
          >
            Home
          </Link>
          <Link
            href="/events"
            style={{
              fontWeight: pathname === "/events" ? "700" : "400",
              color: isTeamPage ? "#000000" : "#ffffff",
            }}
            className="!text-[16px] !leading-[100%] !tracking-[10%] hover:text-gray-200 no-underline"
          >
            Events
          </Link>
          <Link
            href="/our-team"
            style={{
              fontWeight: pathname === "/our-team" ? "700" : "400",
              color: isTeamPage ? "#000000" : "#ffffff",
            }}
            className="!text-[16px] !leading-[100%] !tracking-[10%] hover:text-gray-200 no-underline"
          >
            Our Team
          </Link>
        </div>

        {/* Desktop Contact Button - Hidden on mobile/tablet, visible on desktop */}
        <div className="lg:flex hidden w-full justify-end">
          <a href="mailto:samuelidakwo99@gmail.com?subject=Contact%20Us&body=Hi%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you.">
            <YellowButton>CONTACT US</YellowButton>
          </a>
        </div>

        {/* Mobile/Tablet Menu Button - Visible on mobile/tablet, hidden on desktop */}
        <button
          className="lg:hidden flex items-center relative z-50"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="toggle"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="#C50A14"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Mobile/Tablet Menu Dropdown - Overlaps header, positioned below */}
        <div
          id="mobile-menu"
          className={`lg:hidden absolute  left-0 right-0 top-[1px] mx-auto bg-white border-t border-gray-100 shadow-md origin-top overflow-hidden transition-transform duration-300 z-40 ${
            isOpen ? "scale-y-100" : "scale-y-0"
          }`}
        >
          {/* Menu content with 28px horizontal padding to align with header */}
          <div className="flex flex-col gap-4 !p-4 !pt-36 !px-[28px]">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-[18px] font-medium text-[#232427] py-2"
            >
              Home
            </Link>
            <Link
              href="/noevents"
              onClick={() => setIsOpen(false)}
              className="text-[18px] font-medium text-[#232427] py-2"
            >
              Events
            </Link>
            <Link
              href="/our-team"
              onClick={() => setIsOpen(false)}
              className="text-[18px] font-medium text-[#232427] py-2"
            >
              Our Team
            </Link>
            <a
              href="mailto:NENFPHAS@gmail.com"
              onClick={() => setIsOpen(false)}
              className="!mt-[100px]"
            >
              <YellowButton className="w-full">Join Us</YellowButton>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
