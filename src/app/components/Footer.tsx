import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const navigationLinks = [
        { name: 'HOME', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'What We Do', href: '/what-we-do' },
        { name: 'EVENTS', href: '/events' },
        { name: 'OUR TEAM', href: '/our-team' }
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
            <div className="relative w-full h-[330px]">
                <Image
                    src="/images/footer/image-gride-frame.png"
                    alt="Graduate photos background"
                    width={1920}
                    height={330}
                    className="object-cover w-full h-[330px]"
                />
            </div>

            <div className="relative w-full z-10 mx-auto !px-[76px]">
                <div className="flex w-full gap-16 justify-between">
                    {/* Left Side - Brand and Content */}
                    {/* Logo and Branding */}
                    <div className="!py-24">
                        <h1 className="text-[138px] font-semibold leading-[100%] !mb-4 text-[#FDC182]">
                            NNFPHAS
                        </h1>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="border-[2px] !gap-[31px] flex border-[#FDC182] !max-w-[642px] !px-[13px] !py-[18px] text-[#FDC182]">
                                <span className='font-bold whitespace-nowrap leading-[100%] text-[44px]'> © 2025</span>
                                <span className='text-[24px] !font-medium !leading-[100%]'>Nigerian Female PHD Holders in Arts & Sciences</span>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="!text-[#FDC182] !py-[41px]">
                        <div className='!mb-[25px]'>
                            <Image src="/images/footer/nigeria.svg" alt="Footer logo" width={71} height={101} />
                        </div>
                        <p className="font-medium text-[14px] !leading-[130%] !tracking-[0%] max-w-[487px]">
                            I welcome everyone to this unique Association, the Network for Nigerian
                            Female PhD Holders in Arts and Sciences - (NNFPHAS) with great delight,
                            especially members of the Board of Trustees and the Executive Officers. This
                            is an Association for all to contribute towards the development of Nigeria
                            and the upliftment of the academic status of women. I believe that,
                            together we can make a difference to support our dear country through this
                            platform, which is our desire. This is my team member and committee that
                            will work assiduously with their diverse experiences, knowledge, and
                            disciplines, patriotism, and dedication to make our goal a success.
                        </p>
                        <p className="text-[14px] font-bold !mt-[15px]">
                            DR. ADAEZE PATRICIA ESENYANWU (Founder & President of NNFPHAS)
                        </p>
                    </div>
                    {/* Right Side - Navigation */}
                    <div className="max-w-[232px] text-white !py-[41px]">
                        <nav className="mb-8">
                            <ul className="text-right">
                                {navigationLinks.map((link) => {
                                    const isAboutOrWhatWeDo = link.name === 'About' || link.name === 'What We Do';
                                    const isHome = link.name === 'HOME';
                                    if(isAboutOrWhatWeDo) {
                                        return (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    className="text-[24px] !mb-[12px] font-light !leading-[100%] hover:text-[#EFB025] transition-colors duration-300 block"
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        )
                                    }
                                    if(isHome) {
                                        return (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    className="text-[32px] whitespace-nowrap !mb-[10px] font-bold !leading-[100%] text-[#FDC182] hover:text-[#EFB025] transition-colors duration-300 block"
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        )
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
                                    )
                                })}
                            </ul>
                        </nav>

                        {/* Contact Info */}
                        <div className="mb-8 text-right">
                            <p className="!text-[16px] text-[#FDC182] font-medium !mb-[15px]">(Connect with us)</p>

                            {/* Social Media Icons */}
                            <div className="flex gap-4 justify-end">
                                {/* YouTube */}
                                <a
                                    href="#"
                                    className="w-[42px] h-[30px] rounded flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
                                    aria-label="YouTube"
                                >
                                    <Image src="/images/footer/youtube.svg" alt="YouTube" width={42} height={30} />
                                </a>

                                {/* Twitter/X */}
                                <a
                                    href="#"
                                    className="w-[40px] h-[40px] rounded flex items-center justify-center hover:bg-gray-800 transition-colors duration-300"
                                    aria-label="Twitter/X"
                                >
                                    <Image src="/images/footer/twitter.svg" alt="Twitter" width={40} height={40} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 