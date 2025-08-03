import TeamGrid from './TeamGrid';

export default function MeetOurTeam() {
    const teamMembers = [
        {
            name: "Dr. Ada Esenwah",
            role: "CEO & PRESIDENT",
            image: "/images/our-team/ada-esenwah.png",
            slug: "ada-esenwah",
            info: "Dr. Ada Esenwah is a distinguished Socio-economic Policy Analyst with a strong focus on socio-economic growth in developing countries, particularly Nigeria. Her work emphasizes youth and women empowerment and poverty reduction, stemming from her doctoral research on 'Youth Poverty Reduction in Nigeria: Policy Perspective.' She obtained her Doctor of Social Science in Policy from the University of Bristol England in 2012 and her Masters in International Development Studies in 2001 from the University of Bradford in England. She has a Post Graduate Diploma in Agricultural Cooperatives from the University of Nigeria Nsukka obtained in 1988. Her undergraduate study was done in the Institute of Management and Technology Enugu Nigeria, where she obtained the Higher National Diploma in Cooperative Economics and Management in 1986. She is an author and editor of many write-ups. Dr. Ada had organised successful seminars and conferences nationally and internationally. Career wise, she worked for the Central Bank of Nigeria for 34yrs and retired meritoriously in an Executive cadre in 2023. Currently, she consults privately on Socio-economic policy issues. For her leisure, she is a golf addict. She likes adventure especially ocean cruises to different parts of the world. Reading, researching, writing and editing are part of her life among other social interests. Dr. Esenwah is married with children."
        }
    ];

    return (
        <TeamGrid
            title="Meet Our Team"
            description="Get to know the dedicated individuals who drive the mission of the Network for Nigerian Female PhD Holders in ARTS and SCIENCES."
            members={teamMembers}
            scribbleImage="/images/our-team/love-icon.svg"
        />
    );
} 