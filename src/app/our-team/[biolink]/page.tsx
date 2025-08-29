import Image from "next/image";
import Link from "next/link";
import {
  BoardOfTrustees,
  AssociateFounders,
  Executives,
} from "../components/properties";

const TeamBio = [
  {
    biodata:
      "Kema Chikwe was born to Mr. Nathan Ejiogu from Egbu, Owerri in Imo State and Mrs Amelia Ejiogu.  She attended Queen’s College, Lagos, and Queen’s School, Enugu, for her secondary education and Advanced Teachers Training College, Owerri, before she proceeded to Queens College, City University of New York, where she obtained Bachelor's and Master's degrees in French. She earned her Doctorate Degree in Curriculum Education in 1995 from the University of Nigeria, Nsukka. Dr. Chikwe is a distinguished public administrator, educationist, gender and social engineer, activist, writer, and diplomat. Dr. Chikwe’s dynamism especially came to the fore when she was appointed as the Minister of Transport in the cabinet of former President Olusegun Obasanjo following Nigeria’s return to democracy in 1999. As Minister of Transport, Dr. Chikwe presided over 20 Federal Government parastatals, including the Nigerian Ports Authority, National Maritime Authority, Nigeria Inland Waterways Authority, and so on. Thus, Dr. Chikwe significantly became the first woman to be appointed as the head of a major infrastructure ministry.  She was later moved to the Ministry of Aviation as the first female Minister of Aviation between 2000 and 2003, where she recorded no fewer sterling achievements in her new assignment. Between 2005 and 2006, Dr. Chikwe served as the first female Chairman of Joint Admission and Matriculations Board, JAMB.  Dr. Chikwe was appointed Nigeria’s Ambassador to Ireland and Iceland in 2008. Between 2008 and 2011 Dr. Chikwe founded the Women’s Leadership Institute. Women's Leadership Institute (WLI) is an international leadership development organization. WLI provides a professional and non-partisan platform for women in Nigeria and across Africa to develop their leadership capacity and to take on constructive roles in the political and economic development of Nigeria and Africa in general. WLI offers vocational training, executive leadership programs, customized leadership interventions, and classroom-based leadership development courses in three categories: certificate, diploma, and advanced leadership courses. Dr. Chikwe is a renowned writer; her books are included in both the Nigerian and American curricula. The books include Kema Chikwe: Across Borders, Women of My Era, Village Boys, First School Day for Adaze, Kame Chameleon Tours the Garden, My Precious Book, and other publications. Her NGO-Women and A New Orientation, continues to empower women nationwide. Her goal is to relentlessly work towards tireless change, especially concerning women in Nigeria. Dr. Kema Chikwe, a life member of NCWS, once served as the Secretary of Imo State NCWS and in other capacities on the State and National levels. Currently, she is a member of the board of trustees at the national level. Dr. Kema Chikwe is married to Chief (Nze) Herbert Chikwe, a successful businessman.  They are blessed with five children and eighteen grandchildren.",
    src: "/images/our-team/Prof.-Mnguember-Vicky-Sylvester.png",
    role: "Secretary",
    biolink: "Mnguember-Vicky-Sylvester",
    fullName: " Prof. Mnguember Vicky Sylvester ",
  },
  {
    biodata:
      "Kema Chikwe was born to Mr. Nathan Ejiogu from Egbu, Owerri in Imo State and Mrs Amelia Ejiogu.  She attended Queen’s College, Lagos, and Queen’s School, Enugu, for her secondary education and Advanced Teachers Training College, Owerri, before she proceeded to Queens College, City University of New York, where she obtained Bachelor's and Master's degrees in French. She earned her Doctorate Degree in Curriculum Education in 1995 from the University of Nigeria, Nsukka. Dr. Chikwe is a distinguished public administrator, educationist, gender and social engineer, activist, writer, and diplomat. Dr. Chikwe’s dynamism especially came to the fore when she was appointed as the Minister of Transport in the cabinet of former President Olusegun Obasanjo following Nigeria’s return to democracy in 1999. As Minister of Transport, Dr. Chikwe presided over 20 Federal Government parastatals, including the Nigerian Ports Authority, National Maritime Authority, Nigeria Inland Waterways Authority, and so on. Thus, Dr. Chikwe significantly became the first woman to be appointed as the head of a major infrastructure ministry.  She was later moved to the Ministry of Aviation as the first female Minister of Aviation between 2000 and 2003, where she recorded no fewer sterling achievements in her new assignment. Between 2005 and 2006, Dr. Chikwe served as the first female Chairman of Joint Admission and Matriculations Board, JAMB.  Dr. Chikwe was appointed Nigeria’s Ambassador to Ireland and Iceland in 2008. Between 2008 and 2011 Dr. Chikwe founded the Women’s Leadership Institute. Women's Leadership Institute (WLI) is an international leadership development organization. WLI provides a professional and non-partisan platform for women in Nigeria and across Africa to develop their leadership capacity and to take on constructive roles in the political and economic development of Nigeria and Africa in general. WLI offers vocational training, executive leadership programs, customized leadership interventions, and classroom-based leadership development courses in three categories: certificate, diploma, and advanced leadership courses. Dr. Chikwe is a renowned writer; her books are included in both the Nigerian and American curricula. The books include Kema Chikwe: Across Borders, Women of My Era, Village Boys, First School Day for Adaze, Kame Chameleon Tours the Garden, My Precious Book, and other publications. Her NGO-Women and A New Orientation, continues to empower women nationwide. Her goal is to relentlessly work towards tireless change, especially concerning women in Nigeria. Dr. Kema Chikwe, a life member of NCWS, once served as the Secretary of Imo State NCWS and in other capacities on the State and National levels. Currently, she is a member of the board of trustees at the national level. Dr. Kema Chikwe is married to Chief (Nze) Herbert Chikwe, a successful businessman.  They are blessed with five children and eighteen grandchildren.",
    src: "/images/our-team/Kema-Chikwe.png",
    role: "Member",
    biolink: "Kema-Chikwe",
    fullName: " Dr. Kema Chikwe ",
  },
  {
    biodata:
      "Kema Chikwe was born to Mr. Nathan Ejiogu from Egbu, Owerri in Imo State and Mrs Amelia Ejiogu.  She attended Queen’s College, Lagos, and Queen’s School, Enugu, for her secondary education and Advanced Teachers Training College, Owerri, before she proceeded to Queens College, City University of New York, where she obtained Bachelor's and Master's degrees in French. She earned her Doctorate Degree in Curriculum Education in 1995 from the University of Nigeria, Nsukka. Dr. Chikwe is a distinguished public administrator, educationist, gender and social engineer, activist, writer, and diplomat. Dr. Chikwe’s dynamism especially came to the fore when she was appointed as the Minister of Transport in the cabinet of former President Olusegun Obasanjo following Nigeria’s return to democracy in 1999. As Minister of Transport, Dr. Chikwe presided over 20 Federal Government parastatals, including the Nigerian Ports Authority, National Maritime Authority, Nigeria Inland Waterways Authority, and so on. Thus, Dr. Chikwe significantly became the first woman to be appointed as the head of a major infrastructure ministry.  She was later moved to the Ministry of Aviation as the first female Minister of Aviation between 2000 and 2003, where she recorded no fewer sterling achievements in her new assignment. Between 2005 and 2006, Dr. Chikwe served as the first female Chairman of Joint Admission and Matriculations Board, JAMB.  Dr. Chikwe was appointed Nigeria’s Ambassador to Ireland and Iceland in 2008. Between 2008 and 2011 Dr. Chikwe founded the Women’s Leadership Institute. Women's Leadership Institute (WLI) is an international leadership development organization. WLI provides a professional and non-partisan platform for women in Nigeria and across Africa to develop their leadership capacity and to take on constructive roles in the political and economic development of Nigeria and Africa in general. WLI offers vocational training, executive leadership programs, customized leadership interventions, and classroom-based leadership development courses in three categories: certificate, diploma, and advanced leadership courses. Dr. Chikwe is a renowned writer; her books are included in both the Nigerian and American curricula. The books include Kema Chikwe: Across Borders, Women of My Era, Village Boys, First School Day for Adaze, Kame Chameleon Tours the Garden, My Precious Book, and other publications. Her NGO-Women and A New Orientation, continues to empower women nationwide. Her goal is to relentlessly work towards tireless change, especially concerning women in Nigeria. Dr. Kema Chikwe, a life member of NCWS, once served as the Secretary of Imo State NCWS and in other capacities on the State and National levels. Currently, she is a member of the board of trustees at the national level. Dr. Kema Chikwe is married to Chief (Nze) Herbert Chikwe, a successful businessman.  They are blessed with five children and eighteen grandchildren.",
    src: "/images/our-team/Hassan-Mahmud.png",
    role: "Member",
    biolink: "Hassan-Mahmud",
    fullName: " Dr. Hassan Mahmud ",
  },
  {
    biodata:
      "Kema Chikwe was born to Mr. Nathan Ejiogu from Egbu, Owerri in Imo State and Mrs Amelia Ejiogu.  She attended Queen’s College, Lagos, and Queen’s School, Enugu, for her secondary education and Advanced Teachers Training College, Owerri, before she proceeded to Queens College, City University of New York, where she obtained Bachelor's and Master's degrees in French. She earned her Doctorate Degree in Curriculum Education in 1995 from the University of Nigeria, Nsukka. Dr. Chikwe is a distinguished public administrator, educationist, gender and social engineer, activist, writer, and diplomat. Dr. Chikwe’s dynamism especially came to the fore when she was appointed as the Minister of Transport in the cabinet of former President Olusegun Obasanjo following Nigeria’s return to democracy in 1999. As Minister of Transport, Dr. Chikwe presided over 20 Federal Government parastatals, including the Nigerian Ports Authority, National Maritime Authority, Nigeria Inland Waterways Authority, and so on. Thus, Dr. Chikwe significantly became the first woman to be appointed as the head of a major infrastructure ministry.  She was later moved to the Ministry of Aviation as the first female Minister of Aviation between 2000 and 2003, where she recorded no fewer sterling achievements in her new assignment. Between 2005 and 2006, Dr. Chikwe served as the first female Chairman of Joint Admission and Matriculations Board, JAMB.  Dr. Chikwe was appointed Nigeria’s Ambassador to Ireland and Iceland in 2008. Between 2008 and 2011 Dr. Chikwe founded the Women’s Leadership Institute. Women's Leadership Institute (WLI) is an international leadership development organization. WLI provides a professional and non-partisan platform for women in Nigeria and across Africa to develop their leadership capacity and to take on constructive roles in the political and economic development of Nigeria and Africa in general. WLI offers vocational training, executive leadership programs, customized leadership interventions, and classroom-based leadership development courses in three categories: certificate, diploma, and advanced leadership courses. Dr. Chikwe is a renowned writer; her books are included in both the Nigerian and American curricula. The books include Kema Chikwe: Across Borders, Women of My Era, Village Boys, First School Day for Adaze, Kame Chameleon Tours the Garden, My Precious Book, and other publications. Her NGO-Women and A New Orientation, continues to empower women nationwide. Her goal is to relentlessly work towards tireless change, especially concerning women in Nigeria. Dr. Kema Chikwe, a life member of NCWS, once served as the Secretary of Imo State NCWS and in other capacities on the State and National levels. Currently, she is a member of the board of trustees at the national level. Dr. Kema Chikwe is married to Chief (Nze) Herbert Chikwe, a successful businessman.  They are blessed with five children and eighteen grandchildren.",
    src: "/images/our-team/Hassana-Abdullahi.png",
    role: "Member",
    biolink: "Hassana-Abdullahi",
    fullName: "Dr. Hassana Abdullahi",
  },
];

export default async function BioDesign({
  params,
}: {
  params: Promise<{ biolink: string }>;
}) {
  const { biolink } = await params;
  const members =
    BoardOfTrustees.find((m) => m.biolink === biolink) ||
    AssociateFounders.find((m) => m.biolink === biolink) ||
    Executives.find((m) => m.biolink === biolink);

  if (!members) {
    return;
  }
  return (
    <div className="relative !py-[140px] md:!pt-[182px] max-w-[1728px]">
      <div className="flex items-start justify-center !mx-auto h-auto">
        <div className="flex flex-col flex-1  items-center justify-end ">
          <Image
            src={members.src}
            alt={members.fullName}
            width={645}
            height={660}
            className="w-[645px] h-[660px] object-top object-cover"
          />
          <Link href="/our-team" className=" flex items-center gap-[8px]">
            <svg
              width="36"
              height="36"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(0 0 0)"
            >
              <path
                d="M3.57813 12.4981C3.5777 12.6905 3.65086 12.8831 3.79761 13.0299L9.7936 19.0301C10.0864 19.3231 10.5613 19.3233 10.8543 19.0305C11.1473 18.7377 11.1474 18.2629 10.8546 17.9699L6.13418 13.2461L20.3295 13.2461C20.7437 13.2461 21.0795 12.9103 21.0795 12.4961C21.0795 12.0819 20.7437 11.7461 20.3295 11.7461L6.14168 11.7461L10.8546 7.03016C11.1474 6.73718 11.1473 6.2623 10.8543 5.9695C10.5613 5.6767 10.0864 5.67685 9.79362 5.96984L3.84392 11.9233C3.68134 12.0609 3.57812 12.2664 3.57812 12.4961L3.57813 12.4981Z"
                fill="#AD0000"
              />
            </svg>
            <h3 className="text-[#AD0000] text-[20px]">Back</h3>
          </Link>
        </div>
        <div className="flex-1 h-auto !pr-[66px] !space-y-2">
          <h1 className="font-bold text-[24px]">{members.fullName}</h1>
          <h2 className="text-[#AD0000] font-bold">{members.role}</h2>
          <p className="leading-9 font-regular">{members.biodata}</p>
        </div>
      </div>
    </div>
  );
}
