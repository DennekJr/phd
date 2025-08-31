import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const navigationLinks = [
    { name: "HOME", href: "/" },
    { name: "About", href: "/about" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "EVENTS", href: "/events" },
    { name: "OUR TEAM", href: "/our-team" },
  ];

  return (
    <footer className="relative bg-[#880C24] flex flex-col overflow-hidden">
      {/* Footer Graphic Overlay */}
      <div className="relative inset-0 pointer-events-none">
        <Image
          src="/images/footer/footer-graphic.svg"
          alt="Footer graphic overlay"
          width={1920}
          height={353}
          className="object-cover w-full h-[100px]"
        />
      </div>

      {/* Background Image Grid */}
      <div className="relative h-[330px]">
        <Image
          src="/images/footer/image-gride-frame.png"
          alt="Graduate photos background"
          width={1920}
          height={330}
          className="object-cover w-full h-[330px]"
        />
        {/* Color overlay */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backgroundColor: "#880C24", opacity: 0.62 }}
        />
      </div>

      <div className="relative w-full z-10 mx-auto !px-[24px] lg:!px-[76px]">
        <div className="lg:flex-row flex flex-col w-full gap-16 justify-between">
          {/* Left Side - Brand and Content */}
          {/* Logo and Branding */}
          <div className="relative order-3 lg:order-1 lg:!py-24 !py-12">
            <h1 className="text-[60px] md:text-[40px] lg:text-[138px] font-semibold leading-[100%] !mb-4 text-[#FDC182]">
              NENFPHAS
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="border-[2px] !gap-[31px] flex flex-col lg:flex-row border-[#FDC182] !max-w-[642px] !px-[13px] !py-[18px] text-[#FDC182]">
                <span className="font-bold whitespace-nowrap leading-[100%] text-[44px]">
                  {" "}
                  © 2025
                </span>
                <span className="text-[24px] !font-medium !leading-[100%]">
                  Nigerian Female PHD Holders in Arts & Sciences
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="!text-[#FDC182] !py-[41px] relative order-2 lg:order-2">
            <div className="!mb-[25px]">
              <Image
                src="/images/footer/nigeria.svg"
                alt="Footer logo"
                width={71}
                height={101}
              />
            </div>
            <p className="font-medium text-[14px] !leading-[130%] !tracking-[0%] max-w-[487px]">
              I welcome everyone to this unique Association, the Network for
              Nigerian Female PhD Holders in Arts and Sciences - (NNFPHAS) with
              great delight, especially members of the Board of Trustees and the
              Executive Officers. This is an Association for all to contribute
              towards the development of Nigeria and the upliftment of the
              academic status of women. I believe that, together we can make a
              difference to support our dear country through this platform,
              which is our desire. This is my team member and committee that
              will work assiduously with their diverse experiences, knowledge,
              and disciplines, patriotism, and dedication to make our goal a
              success.
            </p>
            <p className="text-[14px] font-bold !mt-[15px]">
              DR. ADAEZE PATRICIA ESENYANWU (Founder & President of NNFPHAS)
            </p>
          </div>
          {/* Right Side - Navigation */}
          <div className="relative order-1 lg:order-3 max-w-[232px] text-white !py-[41px]">
            <nav className="mb-8">
              <ul className="text-left lg:text-right">
                {navigationLinks.map((link) => {
                  const isAboutOrWhatWeDo =
                    link.name === "About" || link.name === "What We Do";
                  const isHome = link.name === "HOME";
                  if (isAboutOrWhatWeDo) {
                    return (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-[24px] !mb-[12px] font-light !leading-[100%] hover:text-[#EFB025] transition-colors duration-300 block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  }
                  if (isHome) {
                    return (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-[32px] whitespace-nowrap !mb-[10px] font-bold !leading-[100%] text-[#FDC182] hover:text-[#EFB025] transition-colors duration-300 block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-[32px] whitespace-nowrap !mb-[20px] font-bold !leading-[100%] text-[#FDC182] hover:text-[#EFB025] transition-colors duration-300 block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Contact Info */}
            <div className="mb-8 text-left lg:text-right ">
              <p className="!text-[16px] text-[#FDC182] font-medium !mb-[15px]">
                (Connect with us)
              </p>

              {/* Social Media Icons */}
              <div className="flex flex-col gap-2 lg:gap-4 lg:justify-end">
                {/* Email */}
                <div className="flex items-center gap-2 lg:justify-end">
                  <span className="text-white text-[16px] order-2 lg:order-1">
                    NENFPHAS@gmail.com
                  </span>
                  <a
                    href="mailto:NENFPHAS@gmail.com"
                    className="w-[36px] h-[36px] rounded flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 order-1 lg:order-2"
                    aria-label="Email"
                  >
                    <svg
                      className="w-24 h-24 text-white"
                      fill="#FDC182"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 lg:justify-end">
                  <span className="text-white text-[16px] order-2 lg:order-1">
                    08162375044
                  </span>
                  <a
                    href="tel:08162375044"
                    className="w-[36px] h-[36px] rounded flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 order-1 lg:order-2"
                    aria-label="Phone"
                  >
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 4.25C5.75 3.00736 6.75736 2 8 2H16C17.2426 2 18.25 3.00736 18.25 4.25V19.75C18.25 20.9926 17.2426 22 16 22H8C6.75736 22 5.75 20.9926 5.75 19.75V4.25ZM10.25 18.25C10.25 18.6642 10.5858 19 11 19H13C13.4142 19 13.75 18.6642 13.75 18.25C13.75 17.8358 13.4142 17.5 13 17.5H11C10.5858 17.5 10.25 17.8358 10.25 18.25Z"
                        fill="#FDC182"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
