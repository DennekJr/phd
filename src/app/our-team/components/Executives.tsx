import { formatMultiLineString } from '@/utils/stringFormatter';
import TeamGrid from './TeamGrid';

export default function Executives() {
    const trustees = [
        {
            name: "Dr. Adaeze Patricia Esenwah ",
            role: "FOUNDER/PRESIDENT",
            image: "/images/associate-founders/adaeze.jpg",
            info: formatMultiLineString("Dr. Ada Esenwah is a Socio-economic Policy Analyst. Her focus is on Socio-economic growth of the developing countries especially Nigeria with bias on youth and women empowerment and poverty reduction. Her Doctorate thesis was on 'Youth Poverty Reduction in Nigeria: Policy Perspective' She obtained her Doctor of Social Science in Policy from the University of Bristol England in 2012 and her  Masters in International Development Studies in 2001 from the University of Bradford in England. She has a Post Graduate Diploma  in Agricultural Cooperatives from the University of Nigeria Nsukka obtained in 1988. Her undergraduate study was done in the Institute of Management and Technology Enugu Nigeria, where she obtained the Higher National Diploma in Cooperative Economics and Management in 1986. She is an author and editor of many write-ups.  Dr. Ada had organised successful seminars and conferences nationally and internationally. Career wise, she worked for the Central Bank of Nigeria for 34yrs and retired meritoriously in an Executive cadre in 2023. Currently, she consults privately on Socio-economic policy issues. For her leisure, she is a golf addict. She likes adventure especially ocean cruises to different parts of the world. Reading, researching, writing and editing are part of her life among other social interests. Dr. Esenwah is married with children."),
        },
        {
            name: "Dr.  Osatohanmwen Osamudiamen Anastasia Eruaga",
            role: "Vice President & Legal Advisor",
            image: "/images/associate-founders/osamudiamen.jpg",
            info: formatMultiLineString("Dr. Mrs.  Osatohanmwen Osamudiamen Anastasia Eruaga Dr. Mrs. Osatohanmwen (Osato) Anastasia Eruaga an Associate Professor with the Nigerian Institute of Advanced Legal Studies is the Head of Department, Private and Property Law at the Institute. She studied Law at the University of Benin, Nigeria and was called to the Nigerian Bar in 2006. Osato obtained an LL.M (Maritime Law) from the University of Nottingham, the United Kingdom in 2009 and her doctoral degree in Maritime Affairs (maritime law and policy) from the World Maritime University, Sweden. An NDDC Scholar and an Alumni of the Yeosu Academy of the Law of the Sea, has been involved in extensive legal research and writing. She has served as a speaker and guest lecturer at several local and international learned events. Her interests are in the areas of public international law, especially Law of the Sea, Marine Environmental Law, and Sustainability as well as Human Rights Law. She currently serves as the Nigerian branch representative to the International Law Association Committee on the Protection of People at Sea. Osato is passionate about supporting processes that enhance gender equality and protect the rights of vulnerable persons, especially children. She loves to travel and experience new cultures.")
        },
        {
            name: "Dr. Sarah Ogah-Aduwari",
            role: "SECRETARY",
            image: "/images/associate-founders/sarah.jpg",
            info: formatMultiLineString("Dr. Sarah Ogah-Aduwari mni a member of the National Institute Nigeria, is a philanthropist, gender advocate, and educationist. She is from the Idoma ethnic group of Nigeria. Dr. Sarah, had her PHD in Adult Education and Community service in 2019 from the Rivers State University Port-Harcourt. She had her Masters in Educational Administration in 2012 from the University of PH  and her Bachelor's in English/Linguistics in 1992 from the University of Jos. Dr Sarah is an accredited adult educationist  and community development consultant. She is a seasoned educationst with over 20 years of experience. Dr. Sarah, is also a fellow of the Chartered Institute of Strategic Management (ISMN) and has accomplished a tremendous feat in both the Public and Private Sector, making her a serial entrepreneur. She is the Founder and Director of Spring Valley Nursery, Primary, and High School Port Harcourt, a citadel of learning with a pristine standard, established in 2005.")
        },
        {
            name: "Dr. Hadiza Minna",
            role: "ASSISTANT SECRETARY GENERAL",
            image: "/images/associate-founders/hadiza.jpg",
            info: formatMultiLineString("Dr (Mrs) Hadiza Maina , hails from Okene, Kogi State, a Moslem. She is a Development Finance Policy expert with a proven track record in policy making and implementation for enhancing micro, small, and medium enterprises (MSMEs) access to finance through strategic planning and relationship management. She is an advocate of deepening Financial Inclusion for women in Nigeria and rural rejuvenation through agriculture, guarantee programmes, brownfield development and other transformative projects that require significant public capital to transform the poorest of the poor at the bottom of the economic pyramid. She holds a PhD in Leadership and Strategic Studies obtained 2024  from the Nigerian Defence Academy. She has BSc in Public Administration from ABU 1986, a Post Graduate Diploma Financial Management, ATBU Bauchi, 1999,  and MSc Development Policy , Planing and Process , Reading UK ,2005. She is a Member of NIM, PMP, BSP,. She had a successful career in the Central Bank of Nigeria spanning from 1990-2021. She retired meritoriously as a Director in the Development Finance Department of the CBN. She is currently the National Coordinator Nigeria for Women Program, a collaboration between the Federal Government of Nigeria and World Bank group domiciled in the Federal Ministry of Women Affairs. She can be reached via email: hadimaina@yahoo.com.")
        },
        {
            name: "Dr. Princess Enape Victoria Ayishetu",
            role: "FINANCIAL SECRETARY",
            image: "/images/associate-founders/princess.jpg",
            info: formatMultiLineString("Dr. (Mrs) Princess Enape Victoria Ayishetu, PhD, MSC, MBA, PGD, HND , FCCA, FCTI, FCFM, FCT, FCA, MNIM, CFE, CIPFA.Victoria Ayishetu  Enape PhD, born into a royal family in Kogi State in the early 70's is a Chartered accountant of over 3 decades. She chartered in Nigerian, United Kingdom, America and Australia. She is also a Financial Manager, and Tax specialist as well as an Economist and Administrator. Equally she is a writer, an author of books and a Professional Leadership Strategist.Dr Victoria, possess 1. Postgraduate Diploma (PGD) in Accounting, 2. MSC Accounting,  MBA Financial Management. 3. PhD Accounting. 4. PhD Leadership and Strategic Studies in view. She has about thirty (30) years working experience at various organizations both private and public. She currently works in the Office of the Accountant General of the Federation. She was appointed as an accredited Peace Ambassador to the United Nation. She is married with children")
        },
        {
            name: "Dr Victoria Afangideh",
            role: "TREASURER",
            image: "/images/associate-founders/victoria.jpg",
            info: formatMultiLineString("Dr. Victoria hails from Odukpani LGA of cross river State She is an educationist having taught in FCT schools for over two decades and counting. Presently still teaching and working as an administrator for the FCT Department of Mass Education (FCT- DME) in charge of special duties and women education. Dr Victoria obtained her B.Sc Mathematics and Statistics from the University of Calabar. Her M.Ed and PhD are both in Measurement and Evaluation from UNN Nsukka. She has contributed immensely in the training and development of young adults and up-skilling of women on hands-on experiences. She loves traveling, reading and discussions.  She is married with children")

        },
        {
            name: "Dr. Ngozi Cordelia Agbata",
            role: "PROVOST",
            image: "/images/associate-founders/ngozi.jpg",
            info: formatMultiLineString("Dr. Ngozi Cordelia Agbata (Provost). agbatavn@gmail.com Dr. Agbata has BA, MA and PHD in English, Literature and Literacy studies from University of Nigeria Nsukka and Chukwuemeka Odumegwu Ojukwu University, Anambra State respectively. She is currently a Director in the Anambra State Civil Service. She is a seasoned educationist for over three decades in different capacities from a class room teacher, HOD, to Vice Principal. Her passion is impacting young minds through teaching English language, Literature and literacy studies. This she did through teaching students in both senior and junior secondary schools.  She enjoys exposing the young generations, on both African and non African Literature. They invariably get to know of Classical, Neoclassical, Independent, Post independent, and Modern writers' experiences. These past experiences, events and ethos, she believes will guide young people in their future endeavours, producing great minds and future global leaders.  Dr. Agbata hails from Anambra State.")
        },
        {
            name: "Dr. Victoria Oladumeji",
            role: "PRO",
            image: "/images/associate-founders/oladumeji.jpg",
            info: formatMultiLineString(" Dr. Oladumeji is a Public Health Specialist. She obtained her PhD in Education from the University of Wales Cardiff United Kingdom 1992. Her Masters Degree in 1987and Bachelor degrees in Education in 1981 from the University of Wales. She also has a Certificate in Education  from the University of Wales and Masters Degree in Business Studies (MBA) in (1996) from the University of East London. Career wise, she is a seasoned Lecturer in  Public Health and  Health Promotion for over 3 decades. She lectured  at the City University London  for 25 years and previously lectured at The Princess Alexandra School of Nursing  and St Bartholomew School of   Nursing and Social Sciences for 10 years. She is known for   her knowledge  and practical skills in  the application  of complex theories into practice. Her passion and enthusiasm for innovation and compassionate teaching skills transformed her into an outstanding Lecturer. Dr. Oladumeji is from Osun state, married with children")
        }
    ];

    return (
        <TeamGrid
            title="Executives"
            description="The Associate Founder provides crucial support to the Founder's vision and objectives."
            members={trustees}
            scribbleImage="/images/our-team/scribble.svg"
        />
    );
} 