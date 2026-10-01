import Image from 'next/image';
import Link from 'next/link';
import SmartImage from "@/app/components/SmartImage";

interface TeamMember {
    name: string;
    role: string;
    image: string;
    slug: string;
    info?: string;
}

interface TeamGridProps {
    title: string;
    description: string;
    members: TeamMember[];
    scribbleImage?: string;
    className?: string;
}

export default function TeamGrid({ title, description, members, scribbleImage, className }: TeamGridProps) {
    return (
        <section className={`relative w-full bg-[#FBF7ED] !pt-[7rem] !px-[1.25rem] lg:!px-[3.75rem] xl:!px-[12.5rem] ${className}`}>
            <div className="max-w-[78.125rem] !mx-auto">
                {/* Header Section */}
                <div className="mb-16 sm:mb-20 md:mb-24 lg:!mb-[6.4375rem]">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
                        {/* Left Side - Title with decorative line */}
                        <div className="relative">
                            {/* Decorative wavy line */}
                            {scribbleImage && (
                                <Image 
                                    src={scribbleImage} 
                                    alt="Decorative line" 
                                    width={271} 
                                    height={45} 
                                    className='h-[2.8125rem] w-[16.9375rem]' 
                                />
                            )}
                            <h2 className="text-[2rem] !leading-[100%] font-bold text-[#232427]">
                                {title}
                            </h2>
                        </div>
                        
                        {/* Right Side - Description */}
                        <div className="">
                            <p className="!text-[0.75rem] font-semibold !text-[#454545] !leading-[1.875rem]">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 !gap-x-[1rem] md:!gap-x-[1.875rem] !gap-y-[3.75rem]">
                    {members.map((member, index) => (
                        <Link 
                            href={`/our-team/${member.slug}`} 
                            key={index} 
                            className="bg-[#E8DFCC] max-h-[29.9375rem] overflow-hidden duration-300 hover:scale-105 transition-transform cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative h-[23.5625rem]">
                                <SmartImage
                                    src={member.image}
                                    alt={member.name}
                                    width={412}
                                    height={377}
                                    tone="light"
                                    sizes="(max-width: 768px) 100vw, 26rem"
                                    wrapperClassName="w-full h-[23.5625rem]"
                                    className="w-full md:w-[25.75rem] h-[23.5625rem] object-cover"
                                />
                                {/* Role Badge */}
                                {/* <div className="absolute top-[1.9375rem] left-[0.9375rem] bg-[#ffffff] text-[#000000] !px-[0.875rem] !py-[0.625rem] rounded-md text-sm font-bold">
                                    {member.role}
                                </div> */}
                            </div>
                            
                            {/* Name */}
                            <div className="!px-[1.25rem] !pt-[2.125rem] !pb-[2.75rem]">
                                <h3 className="!text-[1.125rem] text-[#232427] leading-[100%] truncate">
                                    {member.name}
                                </h3>
                                <p className="!text-[0.875rem] !pt-[0.625rem] uppercase font-bold !text-[#454545] !leading-[100%] !tracking-[0%] truncate">
                                    {member.role}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
} 