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
                {/* Color overlay */}
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{ backgroundColor: '#880C24', opacity: 0.75 }}
                />
            </div>

            <div className="relative w-full z-10 mx-auto !px-[20px] lg:!px-[76px]">
                <div className="flex flex-col-reverse xl:flex-row w-full !gap-[20px] lg:!gap-16 justify-between">
                    {/* Left Side - Brand and Content */}
                    {/* Logo and Branding */}
                    <div className='flex flex-col-reverse xl:flex-row min-[1450px]:flex-row min-[1500px]:gap-16'>
                        <div className="!pt-[60px] xl:pt-0 !pb-[100px] xl:!pb-0 xl:!py-24 flex-1">
                            <h1 className="!text-[60px] lg:!text-[138px] font-semibold leading-[100%] !mb-4 text-[#FDC182]">
                                NENFPHAS
                            </h1>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="border-[2px] !gap-[31px] flex flex-col md:flex-row border-[#FDC182] w-full !max-w-[748px] !px-[13px] !py-[18px] text-[#FDC182]">
                                    <span className='font-bold whitespace-nowrap leading-[100%] text-[44px]'> © 2025</span>
                                    <span className='text-[24px] !font-medium !leading-[100%]'>Network For Nigerian Female PHD Holders in Arts & Sciences</span>
                                </div>
                            </div>
                        </div>
                        {/* Description */}
                        <div className="!text-[#FDC182] !pt-0 lg:!py-[41px] flex-1">
                            <div className='!mb-[25px]'>
                                <Image src="/images/footer/nigeria.svg" alt="Footer logo" width={71} height={101} />
                            </div>
                            <p className="font-medium text-[14px] !leading-[130%] !tracking-[0%] max-w-[487px]">
                                I welcome everyone to this unique Association, the Network for Nigerian
                                Female PhD Holders in Arts and Sciences - (NENFPHAS) with great delight,
                                especially members of the Board of Trustees and the Executive Officers. This
                                is an Association for all to contribute towards the development of Nigeria
                                and the upliftment of the academic status of women. I believe that,
                                together we can make a difference to support our dear country through this
                                platform, which is our desire. I have a dedicated team that
                                will work assiduously with their diverse experiences, knowledge, and
                                disciplines, patriotism, and dedication to make our goal a success.
                            </p>
                            <p className="text-[14px] font-bold !mt-[15px]">
                                DR. ADAEZE PATRICIA ESENWAH (Founder & President of NENFPHAS)
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Navigation */}
                    <div className="text-white !py-[41px]">
                        <nav className="mb-8">
                            <ul className="text-left lg:text-right">
                                {navigationLinks.map((link) => {
                                    const isAboutOrWhatWeDo = link.name === 'About' || link.name === 'What We Do';
                                    const isHome = link.name === 'HOME';
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
                                        )
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
                        <div className="text-left lg:text-right">
                            <p className="!text-[16px] text-[#FDC182] font-medium !mb-[15px]">(Connect with us)</p>

                            {/* Social Media Icons */}
                            <div className="flex flex-col items-start lg:items-end gap-4 justify-end">
                                {/* Email */}
                                <a
                                    href="mailto:NENFPHAS@gmail.com"
                                    className="flex items-center justify-center gap-[23px]"
                                    aria-label="Email"
                                >
                                    <span className='text-[16px] leading-[150%] font-bold'>NENFPHAS@gmail.com</span>
                                    <Image src="/images/footer/mail.svg" alt="Email" width={41} height={33} />
                                </a>

                                {/* Phone Number */}
                                <a
                                    href="tel:08162375044"
                                    className="flex items-center justify-center gap-[23px]"
                                    aria-label="Phone Number"
                                >
                                    <span className='text-[16px] leading-[150%] font-bold'>08162375044</span>
                                    <Image src="/images/footer/phone.svg" alt="Phone" width={25} height={40} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 