import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BoardOfTrusteesMembers, ExecutiveTrustees, AssociateFounderTrustees } from '../components/constants';

// This would typically come from a database or API
// For now, we'll define it here as an example
const teamMembers = [
    {
        name: "Dr. Ada Esenwah",
        role: "CEO & PRESIDENT",
        image: "/images/our-team/ada-esenwah.png",
        slug: "ada-esenwah",
        info: "Dr. Ada Esenwah is a distinguished Socio-economic Policy Analyst with a strong focus on socio-economic growth in developing countries, particularly Nigeria. Her work emphasizes youth and women empowerment and poverty reduction, stemming from her doctoral research on 'Youth Poverty Reduction in Nigeria: Policy Perspective.' She obtained her Doctor of Social Science in Policy from the University of Bristol England in 2012 and her Masters in International Development Studies in 2001 from the University of Bradford in England. She has a Post Graduate Diploma in Agricultural Cooperatives from the University of Nigeria Nsukka obtained in 1988. Her undergraduate study was done in the Institute of Management and Technology Enugu Nigeria, where she obtained the Higher National Diploma in Cooperative Economics and Management in 1986. She is an author and editor of many write-ups. Dr. Ada had organised successful seminars and conferences nationally and internationally. Career wise, she worked for the Central Bank of Nigeria for 34yrs and retired meritoriously in an Executive cadre in 2023. Currently, she consults privately on Socio-economic policy issues. For her leisure, she is a golf addict. She likes adventure especially ocean cruises to different parts of the world. Reading, researching, writing and editing are part of her life among other social interests. Dr. Esenwah is married with children."
    },
    {
        name: "Prof. Mnguember Vicky Sylvester",
        role: "SECRETARY",
        image: "/images/board-of-trustees/vicky-sylvester-woman.jpg",
        slug: "vicky-sylvester",
        info: "Dr. Ada Esenwah is a Socio-economic Policy Analyst. Her focus is on Socio-economic growth of the developing countries especially Nigeria with bias on youth and women empowerment and poverty reduction. Her Doctorate thesis was on 'Youth Poverty Reduction in Nigeria: Policy Perspective' She obtained her Doctor of Social Science in Policy from the University of Bristol England in 2012 and her  Masters in International Development Studies in 2001 from the University of Bradford in England. She has a Post Graduate Diploma  in Agricultural Cooperatives from the University of Nigeria Nsukka obtained in 1988. Her undergraduate study was done in the Institute of Management and Technology Enugu Nigeria, where she obtained the Higher National Diploma in Cooperative Economics and Management in 1986. She is an author and editor of many write-ups.  Dr. Ada had organised successful seminars and conferences nationally and internationally. Career wise, she worked for the Central Bank of Nigeria for 34yrs and retired meritoriously in an Executive cadre in 2023. Currently, she consults privately on Socio-economic policy issues. For her leisure, she is a golf addict. She likes adventure especially ocean cruises to different parts of the world. Reading, researching, writing and editing are part of her life among other social interests. Dr. Esenwah is married with children."
    },
    {
        name: "Dr. Kema Chikwe",
        role: "MEMBER",
        image: "/images/board-of-trustees/kema-chikwe.png",
        slug: "kema-chikwe",
        info: "Kema Chikwe was born to Mr. Nathan Ejiogu from Egbu, Owerri in Imo State and Mrs Amelia Ejiogu.  She attended Queen's College, Lagos, and Queen's School, Enugu, for her secondary education and Advanced Teachers Training College, Owerri, before she proceeded to Queens College, City University of New York, where she obtained Bachelor's and Master's degrees in French. She earned her Doctorate Degree in Curriculum Education in 1995 from the University of Nigeria, Nsukka. Dr. Chikwe is a distinguished public administrator, educationist, gender and social engineer, activist, writer, and diplomat. Dr. Chikwe's dynamism especially came to the fore when she was appointed as the Minister of Transport in the cabinet of former President Olusegun Obasanjo following Nigeria's return to democracy in 1999. As Minister of Transport, Dr. Chikwe presided over 20 Federal Government parastatals, including the Nigerian Ports Authority, National Maritime Authority, Nigeria Inland Waterways Authority, and so on. Thus, Dr. Chikwe significantly became the first woman to be appointed as the head of a major infrastructure ministry.  She was later moved to the Ministry of Aviation as the first female Minister of Aviation between 2000 and 2003, where she recorded no fewer sterling achievements in her new assignment. Between 2005 and 2006, Dr. Chikwe served as the first female Chairman of Joint Admission and Matriculations Board, JAMB.  Dr. Chikwe was appointed Nigeria's Ambassador to Ireland and Iceland in 2008. Between 2008 and 2011 Dr. Chikwe founded the Women's Leadership Institute. Women's Leadership Institute (WLI) is an international leadership development organization. WLI provides a professional and non-partisan platform for women in Nigeria and across Africa to develop their leadership capacity and to take on constructive roles in the political and economic development of Nigeria and Africa in general. WLI offers vocational training, executive leadership programs, customized leadership interventions, and classroom-based leadership development courses in three categories: certificate, diploma, and advanced leadership courses. Dr. Chikwe is a renowned writer; her books are included in both the Nigerian and American curricula. The books include Kema Chikwe: Across Borders, Women of My Era, Village Boys, First School Day for Adaze, Kame Chameleon Tours the Garden, My Precious Book, and other publications. Her NGO-Women and A New Orientation, continues to empower women nationwide. Her goal is to relentlessly work towards tireless change, especially concerning women in Nigeria. Dr. Kema Chikwe, a life member of NCWS, once served as the Secretary of Imo State NCWS and in other capacities on the State and National levels. Currently, she is a member of the board of trustees at the national level. Dr. Kema Chikwe is married to Chief (Nze) Herbert Chikwe, a successful businessman.  They are blessed with five children and eighteen grandchildren."
    },
    {
        name: "Dr. Hassan Mahmud",
        role: "MEMBER",
        image: "/images/board-of-trustees/massan-mahmoud.png",
        slug: "hassan-mahmud",
        info: "Dr. Mahmud Hassan is an economist, financial sector regulator,  and central banker with over 30 years of financial sector regulation, policy research and public service experience. Before his retirement from the Central Bank of Nigeria in 2024, he was one time the Director, Trade and Exchange Department, as well as  the Director of Monetary Policy Department  during his career at the Bank. Prior to these roles, he was the Group Head, Macro-prudential Analysis in the Financial Policy and Regulation Department at the Bank. He also served at the African Union Commission, Ethiopia, as a technical expert and lead consultant  on African trade integration and monetary Union. He currently serve on the Boards of many multilateral corporations,Including the African Finance Corporation. He is a visiting scholar and faculty in many Nigeria Universities, including, scholar of Applied Macroeconomics at the Energy Business School of the Federal University of Petroleum Resources, Effurun,, Nigeria, and a visiting Professor of Economics at the Baze University. Abuja. Nigeria. He has published many research articles in the fields of applied macroeconomics, Petroleum economics, Energy, Institutions, environment, Sustainability and Growth. He holds a MSc in Energy Economics and Policy  and a PhD in Economics from University of Surrey, United Kingdom."
    },
    {
        name: "Dr. Hassana Abdullahi",
        role: "MEMBER",
        image: "/images/board-of-trustees/hassana.jpg",
        slug: "hassana-abdullahi",
        info: "Dr Hassana Abdullahi was born in Jos to late the Vice Admiral Husaini Abdullahi (rtd), and Hajiya Maimunatu Abdullahi from Doma LGA, Nasarawa State, Nigeria. Dr Abdullahi is a Lecturer in Operations and Supply Chain Management at Cardiff Metropolitan University, Wales, United Kingdom.  With a robust academic and research profile in Operational Research (OR), her work centres on developing innovative optimisation models and solution methods to tackle complex real-world challenges in scheduling, supply chains, logistics, and recommender systems. This research has resulted in high-impact publications and has extended into collaborative projects, such as a completed study conducted with colleagues from Cardiff School of Education and Social Policy, University of Bangor, and the Welsh Government, which examined the impact of the Pupils Development Grant on reducing student attainment gaps. Dr Abdullahi's academic journey began at the University of Portsmouth, where she earned an MSc in Logistics and Supply Chain Management (with distinction) and later a PhD in Operational Research. Her doctoral research focused on the development of smart approaches for designing sustainable and robust freight transportation routes. Following her PhD, she held postdoctoral and senior research positions at the University of Portsmouth, contributing to funded projects such as the DfT-funded Solent Future Transport Zone (FTZ) Mobility-as-a-Service project and the Interreg 2-Seas Smart Light Concepts (SLIC) project. In her current role at Cardiff Metropolitan University, Dr Abdullahi is deeply involved in both teaching and academic administration. She leads several modules across undergraduate and postgraduate programmes, serves as a personal tutor, and supervises MSc dissertations. Her teaching experience spans international logistics, contemporary operations management, and MBA-level supply chain management, ensuring her students receive both theoretical and practical insights into the field. Dr Abdullahi is also an active academic leader and mentor, having held roles such as Departmental Mentor and Postdoctoral Researchers Representative during her tenure at the University of Portsmouth. At Cardiff Metropolitan University, she contributes to academic citizenship as a School Representative on the Race Equality Charter Working Group and as a member of the Value Stream Flow Center. Her commitment to diversity and leadership is further demonstrated by her participation in prestigious programmes such as the Welsh Crucible and the UK Advance HE Diversifying Leadership Programme. Her scholarly activities are extensive, with numerous journal and conference publications addressing topics like sustainable vehicle routing, recommender systems in e-commerce, and multi-criteria decision-making in public lighting systems. Dr. Abdullahi's work is further complemented by her active involvement in research funding initiatives; she has received best research paper awards and nominations, as well as several funding awards in leadership and research. Beyond her academic and research achievements, Dr Abdullahi maintains active memberships in professional organisations such as the Chartered Institute of Logistics and Transport, the British Academy of Management, and the British Operational Research Society."
    },
    {
        name: "Dr. Nkem Okeke",
        role: "MEMBER",
        image: "/images/board-of-trustees/nkem-okeke.jpg",
        slug: "nkem-okeke",
        info: "His Excellency, Dr. Nkemakonam Chukwukaodinaka Okeke was born in Zaira on January 13, 1960 to the family of late Chief Richard Nwachukwu Okeke and Chief Mrs. Dorothy Nwakaego Okeke of Umuezu Awovu Village, Enugwu-Ukwu in Anambra State. He attended Denis Memorial Grammar School (DMGS) Onitsha and St. Finbarr's College Akoka, Lagos and later got admission to University of Wisconsin, Madison USA in 1978, where he graduated with a Bachelor of Science (B.Sc.) degree in Civil and Environmental Engineering in 1981. His desire for higher education saw him through Howard University, Washington DC, USA where he obtained an MBA in Management in 1983, and a PhD in Economics (Monetary Economics) at the same Howard University, USA, in 1992. Dr. Okeke has had a distinguished professional career, which commenced with remarkable services rendered in various departments of  Fairfax County Government, Virginia, USA, as an Engineer and later as a Management Analyst.  He returned to Nigeria in 1994, and joined the private sector through the family Construction Company, Renacs Engineering Nigeria, Ltd as Executive Director, until 2002 when he went into public service, based on his desire to further contribute to the development of Anambra State and Nigeria in general. Starting with the academic sector, he held various positions in Nnamdi Azikiwe University, Awka that includes Lecture II, Faculty of Social Science, Economics Department (2002 – 2005), and Acting Head, Department of Economics (January – July 2006). He had a brief stint in Politics when in 2006, Dr. Okeke was appointed as Commissioner for Economic Planning and Development, which he later combined in the same Cabinet as the Commissioner for Works, Housing and Transport. In October 2007, he returned to the Economics Department of Nnamdi Azikiwe University As Lecturer I until October 2008, when he was promoted to Senior Lecturer and served as Acting Head of Department in September 2009 at the University. Dr. Okeke has always stood tall among his contemporaries during his services at the University and in various offices he has held, particularly in Nnamdi Azikiwe University where among other positions, he was Member, Departmental Development Committee (2005); Member, Faculty Development Committee (2005); Staff Adviser, Nigerian Economic Students Association (NESA) 2004 – 2005; Part-Time Lecturer, Enugu State University of Science and Technology (ESUT); Business School (Executive Postgraduate Studies), Enugu (2003 – 2005); Chairman, Departmental Accreditation Task Force Committee (2002007); Chairman, Examination Committee and Departmental Examination Officer (2007 – August 2009); Member, Faculty Conference Committee (2008 – 2009) and Vice Chairman, Convocation and Ceremonial Committee (2009). He has authored or co-authored notable publications, and is a Member of many professional associations, including Nigeria Economic Society (NES); Institute of Chartered Economists of Nigeria, Council for the Regulation of Engineering in Nigeria (COREN); a Fellow of the Nigeria Society of Engineers (FNSE), and APC Professional Forum. Dr. Okeke has been recognized severally for his immense positive impact to institutions he has worked in, couple to his very commendable political contributions.  He served meritoriously in his First Tenure as the most diligent and celebrated Deputy Governor of Anambra State from March 2014 to Match 2018, religiously implementing His Excellency's Policy Direction in order to actualize the admirable vision and mission of the administration He was the statutory Chairman of the State Boundary Committee, and the Chairman of the Christian and Muslim Pilgrims Welfare Boards.  His outstanding and remarkable intellectual contributions, earned him appointments into Chairing many EXCO Committees as directed by the Governor.  He occasionally represented His Excellency at various State, National and International functions, hence remained very instrumental to the development of  Anambra State and her people to the Glory of God, and the first in the history of Anambra State, His Excellency, Dr. Nkemakonam Okeke was re-elected as the Deputy Governor of Anambra State in the 2017 Gubernatorial Election.  The first Deputy Governor to serve two complete tenures. He is the Vice Chairman of APC Professionals Forum Board of Trustees. He also served in Tinubu /Shettima Presidential Campaign Council as the Deputy Director, Policy subcommittee of the Policy, Research and Strategy Directorate. He is married to Mrs. Oby Okeke and they are blessed with five children and three grandchildren"
    },
    {
        name: "Prof. Mnguember Vicky Sylvester",
        role: "MEMBER",
        image: "/images/board-of-trustees/vicky-sylvester.jpg",
        slug: "vicky-sylvester-2",
        info: "Prof. Mnguember Vicky Sylvester is a professor of Literature and Creative Writing at the University of Abuja. She obtained her M. A at Bayero University Kano and her PhD. at the University of Jos with researches at the London School of Oriental and African Studies . She holds a PGDE. She's taught at several institutions of higher learning. Worked also as a radio programs producer, a newspaper journalist and editor with Radio OYO and the Nigeria Standard covering several states. She's known for her critical works in gender security and inclusion. Many of her researches and fictional works attests to that passion. She's received awards for her books which include poetry, drama and prose. Her latest collection of poetry,  Experience is a Woman can be found on Amazon and Boldscholar. Her passion is community service especially training teachers in schools where advancement training is expensive and unaffordable. Prof. Sylvester comes from Kwande Local government area of Benue State."
    }
];

interface PageProps {
    params: {
        slug: string;
    };
}

export default function TeamMemberPage({ params }: PageProps) {
    const member = BoardOfTrusteesMembers.find(m => m.slug === params.slug) || ExecutiveTrustees.find(m => m.slug === params.slug) || AssociateFounderTrustees.find(m => m.slug === params.slug);

    if (!member) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#fff] !px-[75px] !py-[200px]">
            {/* Header */}
            {/* <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link 
                        href="/our-team" 
                        className="inline-flex items-center text-[#232427] hover:text-[#EFB025] transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Our Team
                    </Link>
                </div>
            </div> */}
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <div className="space-y-6">
                        <div className="relative">
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={645}
                                height={650}
                                className="w-[645px] h-[650px] rounded-lg shadow-lg object-cover"
                            />
                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 !pt-[26px] text-[#AD0000]">
                            <Link
                                href="/our-team"
                                className="inline-flex items-center !text-[20px] !font-medium !leading-[100%] gap-[20px] hover:text-[#EFB025] transition-colors"
                            >
                                <Image src="/images/our-team/back.svg" alt="Arrow Left" width={20} height={20} />
                                Back
                            </Link>
                        </div>
                    </div>

                    {/* Bio Section */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-[24px] !leading-[100%] font-bold text-[#232427] !mb-4">
                                {member.name}
                            </h1>
                            <div className="!mb-4 text-[20px] !font-bold !leading-[100%] !text-[#AD0000]">Member, {member.member}</div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-[#454545] leading-relaxed text-[16px] !font-light !leading-[30px]">
                                {member.info}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Generate static params for all team members
export async function generateStaticParams() {
    return teamMembers.map((member) => ({
        slug: member.slug,
    }));
} 