import { formatMultiLineString } from '@/utils/stringFormatter';
import TeamGrid from './TeamGrid';

export default function AssociateFounders() {
    const trustees = [
        {
            name: "Prof. Chioma Ikeanyionwu",
            role: "Excellent  Performance Hunt Coordinator",
            image: "/images/associate-founders/Ikeanyionwu.jpg",
            info: formatMultiLineString("Professor Chioma Ikeanyionwu is a highly accomplished educator, researcher, and academic leader. She is a Chief Lecturer at the Federal College of Education (Technical) in Umunze, Anambra State, Nigeria, where she has demonstrated unwavering commitment to academic excellence. With a strong academic background, including a Bachelor of Science, Master of Science, Doctor of Philosophy in Business Education (Accounting), and Professor of Accounting from Nigerian and international universities, Professor Ikeanyionwu has established herself as a respected expert in her field. A prolific researcher and author, she has edited numerous journals, organized conferences, and published papers in reputable journals and textbooks. In addition to her academic achievements, Professor Ikeanyionwu is the Founder of Fontis Aid Foundation Nigeria and the Director of Fontis Scientiae Academy in Onitsha.")
        },
        {
            name: "Prof. Ngozi Eunice Egbuna",
            role: "Event and Compliance Coordinator)",
            image: "/images/associate-founders/ngozi.jpg",
            info: formatMultiLineString("Prof. Ngozi Egbuna is a visiting Professor of International Banking, Finance and Trade at the Nnamdi Azikiwe University Awka, Nigeria and Policy studies at the African University of Science and Technology, Abuja. She retired as Director General of the West African Monetary Institute where she was on Secondment from the Central Bank of Nigeria. An astute economist with over three decades of strategic and focused leadership in central banking, economic research, monetary policy formulation and financial/economic integrationin the West African sub region. Vast knowledge of the economies of West Africa with a track record of implementing innovative solutions that yielded sustainable economic growth and development across the sub-region. Her accomplishments includes the facilitation of the Afrieximbank sponsored  “Linkage of Payment System” infrastructure in the West African Monetary Zone (WAMZ), which will enable trade within the member states to quote and trade within the region in their local currencies. She is an author of several books and academic papers as well as a life member of the Nigerian Economic Society and fellow of the Nigerian Statistical Association amongst others. Phone 📞 +2348183137578, Email  - ngegbuna@yahoo.com")
        },
        {
            name: "Prof. Chinenye Viola Udeze",
            role: "Research Coordinator",
            image: "/images/associate-founders/chineye.jpg",
            info: formatMultiLineString(`PROFESSOR CHINENYE VIOLA UDEZE JP Lecturer, Alvan Ikoku Federal University of Education, Owerri, Imo State, Nigeria Academic Background
- Ph.D. in Igbo Culture and Civilization, Nnamdi Azikiwe University, Awka
- M.A. in Linguistics and Communication Arts, University of Port Harcourt
- B.A. (Ed) in Education/Igbo/Linguistics, University of Nigeria, Nsukka

Professional Experience
- University Professor, Alvan Ikoku Federal University of Education, Owerri. 
- Current Dean, Faculty of Arts.  Alvan Ikoku Federal University of Education, Owerri. 
- Former Director, Alvan Volunteer Community Services
- Former Head, Department of Linguistics and Nigerian Languages
- Former Deputy Dean, Students Affairs
- Chairman, Appraisals and Promotions Committee. (FAVS)
- Current Deputy Chairman,  Examination Misconduct and Malpractices Committee.

Research and Publications
- Published numerous books, chapters in books, and articles in reputable national, international, and online journals
- Successfully executed research projects

Research Interests
- Igbo Language Studies
- Igbo Culture
- Anthropology

Awards and Honors
- Received several awards for academic and personal achievements

Professional Affiliations
- Member, Igbo Studies Association (ISA)
- Member, Teachers Registration Council of Nigeria (TRCN)
- Member, Reading Association of Nigeria (RAN)
- Member, Alvan Volunteers Community Services.(AVS)
- Member, Otu Suwakwa Igbo
- Member, Language Teachers Association of Nigeria.(LANTAN)
- Member, Society for Women and Aids in Nigeria.  (SWAN)
- Former Member,  Association of Nigerian Women Academic Doctors. (ANWAD)
- Former Member, World Association of Academic Doctors. (WAAD).

Teaching and Mentoring
- Taught various courses at undergraduate and graduate levels
- Supervised numerous graduate students (PDE/PGDE)

Community Engagement
- Actively involved in religious and town union activities
- Held leadership positions in various organizations

Contact Information
- Email: chinenye.udeze@alvanikoku.edu.ng
- Email: uchinenye@yahoo.com`)
        }
    ];

    return (
        <TeamGrid
            title="Associate Founders"
            description="The Associate Founder provides crucial support to the Founder's vision and objectives."
            members={trustees}
            scribbleImage="/images/our-team/scribble.svg"
        />
    );
} 