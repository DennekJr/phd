import Image from 'next/image';
import SmartImage from "@/app/components/SmartImage";

export default function MeetOurTeam() {
    const teamMembers = [
        {
            name: "Dr. Ada Esenwah",
            role: "CEO & PRESIDENT",
            image: "/images/our-team/ada-esenwah.webp",
            slug: "ada-esenwah",
            info: "Dr. Ada Esenwah is a distinguished Socio-economic Policy Analyst with a strong focus on socio-economic growth in developing countries, particularly Nigeria. Her work emphasizes youth and women empowerment and poverty reduction, stemming from her doctoral research on 'Youth Poverty Reduction in Nigeria: Policy Perspective.' She obtained her Doctor of Social Science in Policy from the University of Bristol England in 2012 and her Masters in International Development Studies in 2001 from the University of Bradford in England. She has a Post Graduate Diploma in Agricultural Cooperatives from the University of Nigeria Nsukka obtained in 1988. Her undergraduate study was done in the Institute of Management and Technology Enugu Nigeria, where she obtained the Higher National Diploma in Cooperative Economics and Management in 1986. She is an author and editor of many write-ups. Dr. Ada had organised successful seminars and conferences nationally and internationally. Career wise, she worked for the Central Bank of Nigeria for 34yrs and retired meritoriously in an Executive cadre in 2023. Currently, she consults privately on Socio-economic policy issues. For her leisure, she is a golf addict. She likes adventure especially ocean cruises to different parts of the world. Reading, researching, writing and editing are part of her life among other social interests. Dr. Esenwah is married with children."
        }
    ];

    const experiences = [
        {
            title: "Socio-economic Policy Expertise",
            description: "Specializes in socio-economic policy analysis for developing countries, with a significant emphasis on youth and women empowerment and poverty reduction, drawing from her PhD research from the University of Bristol."
        },
        {
            title: "Extensive Public Service Career",
            description: "Meritoriously served the Central Bank of Nigeria for 34 years, retiring in 2023 from an executive cadre position, and now provides private consultation on socio-economic policy."
        },
        {
            title: "Academic and Professional Development",
            description: "Holds a Doctor of Social Science in Policy from the University of Bristol, an M.A. in International Development Studies from the University of Bradford, and earlier qualifications in Agricultural Cooperatives and Cooperative Economics and Management."
        }
    ]

    return (
        <div className='!bg-white'>
            <div className='!px-[1.25rem] lg:!px-[12.5rem] !pt-[9.375rem] !pb-[6.25rem] lg:!pb-[7rem] flex flex-col items-center justify-between'>
                <h2 className='flex w-fit !text-[1.5rem] lg:!text-[3rem] gap-[1.4375rem] !leading-[100%] font-bold text-[#232427]'>Meet Our Team <Image src="/images/our-team/love-icon.svg" alt="Love Icon" width={45} height={57} className='lg:h-[3.5625rem] h-[1.875rem] w-auto' /></h2>
                <p className='!text-[1rem] lg:!text-[1.5rem] font-light !text-[#454545] !leading-[2.25rem]'>Get to know the dedicated individuals who drive the mission of NENFPHAS</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 !gap-[1.25rem] lg:!gap-[4.125rem] !mt-[3.125rem] lg:!mt-[6.25rem]'>
                    <div>
                        {teamMembers.map((member) => (
                            <div key={member.name}>
                                <SmartImage src={member.image} alt={member.name} width={645} height={660} tone="light" sizes="(max-width: 1024px) 100vw, 41rem" wrapperClassName='w-[100%] h-[100%]' className='w-[100%] h-[100%] object-cover' />
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col gap-[1.625rem]'>
                        <h3 className='!text-[1.5rem] font-bold !text-[#232427] !leading-[100%]'>Dr. Ada Esenwah</h3>
                        <h3 className='!text-[0.875rem] font-bold !text-[#880C24] !leading-[0%]'>Founder/President</h3>
                        <p className='!text-[1rem] font-light !text-[#454545] !leading-[1.875rem]'>Dr. Ada Esenwah is a distinguished Socio-economic Policy Analyst with a strong focus on socio-economic growth in developing countries, particularly Nigeria. Her work emphasizes youth and women empowerment and poverty reduction, stemming from her doctoral research on &quot;Youth Poverty Reduction in Nigeria: Policy Perspective.&quot; She is also an accomplished author, editor, and organizer of national and international seminars and conferences.</p>
                        <p className='!text-[1.5rem] font-bold !text-[#454545] !leading-[1.5rem]'>Experience</p>
                        <div className='flex flex-col gap-[1rem]'>
                            {experiences.map((experience) => (
                                <div key={experience.title} className='flex gap-[1rem] items-start'>
                                    <Image src="/images/our-team/checkmark.svg" alt="Bullet Point" width={24} height={24} className='h-[1.5rem] w-auto !mt-[0.375rem]' />
                                    <p className='!text-[1rem] font-bold !text-[#454545] !leading-[1.875rem]'>{experience.title}: <span className='!text-[1rem] font-light !text-[#454545] !leading-[1.875rem]'>{experience.description}</span></p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 