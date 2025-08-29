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
      <nav className="w-full !py-[31.5px] !px-[20px] md:!px-[75px] md:!px-[75x] flex items-center justify-between relative gap-20 md:gap-6">
        {/* Logo */}
        <div
          className="flex items-center w-full"
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
                  color: isTeamPage ? "#000000" : "#ffffff",
                }}
              >
                NENPHAS
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Menu (centered) */}
        <div className="md:flex hidden items-center text-white !space-x-[61px] justify-center w-full ">
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
            href="/noevents"
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

        {/* JOIN US Button */}
        <div className="md:flex hidden w-full justify-end">
          <a href="mailto:samuelidakwo99@gmail.com?subject=Contact%20Us&body=Hi%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you.">
            <YellowButton>CONTACT US</YellowButton>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center"
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
        <div
          id="mobile-menu"
          className={`md:hidden absolute left-0 right-0 top-[88px] mx-auto bg-white border-t border-gray-100 shadow-md origin-top overflow-hidden transition-transform duration-300 ${
            isOpen ? "scale-y-100" : "scale-y-0"
          }`}
        >
          <div className="flex flex-col gap-4 p-5">
            <Image
              src="/images/black-text-logo.svg"
              alt="NNFPHAS logo"
              width={247}
              height={95}
              priority
              className="h-auto w-auto"
            />
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-[18px] font-medium text-[#232427]"
            >
              Home
            </Link>
            <Link
              href="/noevents"
              onClick={() => setIsOpen(false)}
              className="text-[18px] font-medium text-[#232427]"
            >
              Events
            </Link>
            <Link
              href="/our-team"
              onClick={() => setIsOpen(false)}
              className="text-[18px] font-medium text-[#232427]"
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
