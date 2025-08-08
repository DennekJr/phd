import Image from 'next/image';
import Link from 'next/link';

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
        <section className={`relative w-full bg-[#FBF7ED] !pt-[112px] !px-[20px] lg:!px-[60px] xl:!px-[200px] ${className}`}>
            <div className="max-w-[1250px] !mx-auto">
                {/* Header Section */}
                <div className="mb-16 sm:mb-20 md:mb-24 lg:!mb-[103px]">
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
                                    className='h-[45px] w-[271px]' 
                                />
                            )}
                            <h2 className="text-[32px] !leading-[100%] font-bold text-[#232427]">
                                {title}
                            </h2>
                        </div>
                        
                        {/* Right Side - Description */}
                        <div className="">
                            <p className="!text-[12px] font-semibold !text-[#454545] !leading-[30px]">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 !gap-x-[16px] md:!gap-x-[30px] !gap-y-[60px]">
                    {members.map((member, index) => (
                        <Link 
                            href={`/our-team/${member.slug}`} 
                            key={index} 
                            className="bg-[#E8DFCC] max-h-[479px] overflow-hidden duration-300 hover:scale-105 transition-transform cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative h-[377px]">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={412}
                                    height={377}
                                    className="w-full md:w-[412px] h-[377px] object-cover"
                                />
                                {/* Role Badge */}
                                <div className="absolute top-[31px] left-[15px] bg-[#ffffff] text-[#000000] !px-[14px] !py-[10px] rounded-md text-sm font-bold">
                                    {member.role}
                                </div>
                            </div>
                            
                            {/* Name */}
                            <div className="!px-[20px] !pt-[34px] !pb-[44px]">
                                <h3 className="!text-[18px] text-[#232427] leading-[100%]">
                                    {member.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
} 