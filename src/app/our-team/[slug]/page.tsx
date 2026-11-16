import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
    BoardOfTrusteesMembers, 
    ExecutiveTrustees, 
    AssociateFounderTrustees, 
    RegularMembers 
} from '../components/constants';
import SmartImage from "@/app/components/SmartImage";

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
  
    const member = 
        BoardOfTrusteesMembers.find(m => m.slug === slug) || 
        ExecutiveTrustees.find(m => m.slug === slug) || 
        AssociateFounderTrustees.find(m => m.slug === slug) || 
        RegularMembers.find(m => m.slug === slug);

    if (!member) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#fff] !px-[1.25rem] md:!px-[4.6875rem] !pb-[6.25rem] md:!pb-[12.5rem] !py-[12.5rem]">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <div className="space-y-6">
                        <div className="relative">
                            <SmartImage
                                src={member.image}
                                alt={member.name}
                                width={645}
                                height={650}
                                tone="light"
                                sizes="(max-width: 1024px) 100vw, 41rem"
                                wrapperClassName="w-[40.3125rem] max-w-full h-[40.625rem] rounded-lg"
                                className="w-[40.3125rem] h-[40.625rem] rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 !pt-[1.625rem] text-[#AD0000]">
                            <Link
                                href="/our-team"
                                className="inline-flex items-center !text-[1.25rem] !font-medium !leading-[100%] gap-[1.25rem] hover:text-[#EFB025] transition-colors"
                            >
                                <Image src="/images/our-team/back.svg" alt="Arrow Left" width={20} height={20} />
                                Back
                            </Link>
                        </div>
                    </div>

                    {/* Bio Section */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-[1.5rem] !leading-[100%] font-bold text-[#232427] !mb-4">
                                {member.name}
                            </h1>
                            <div className="!mb-4 text-[0.875rem] !font-bold !leading-[100%] !text-[#AD0000]">{member.role}</div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-[#454545] leading-relaxed text-[1rem] !font-light !leading-[1.875rem]">
                                {member.info}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export async function generateStaticParams() {
    const allMembers = [
        ...BoardOfTrusteesMembers,
        ...ExecutiveTrustees,
        ...AssociateFounderTrustees,
        ...RegularMembers,
    ];

    return allMembers.map((member) => ({
        slug: member.slug,
    }));
}
