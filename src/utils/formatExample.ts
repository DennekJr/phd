import { formatMultiLineString, formatAsTemplateLiteral, formatAsConcatenatedString } from './stringFormatter';

// Your original content
const originalContent = `Kema Chikwe was born to Mr. Nathan Ejiogu from Egbu, Owerri in Imo State and Mrs Amelia Ejiogu.  She attended Queen's College, Lagos, and Queen's School, Enugu, for her secondary education and Advanced Teachers Training College, Owerri, before she proceeded to Queens College, City University of New York, where she obtained Bachelor's and Master's degrees in French. She earned her Doctorate Degree in Curriculum Education in 1995 from the University of Nigeria, Nsukka.

Dr. Chikwe is a distinguished public administrator, educationist, gender and social engineer, activist, writer, and diplomat. Dr. Chikwe's dynamism especially came to the fore when she was appointed as the Minister of Transport in the cabinet of former President Olusegun Obasanjo following Nigeria's return to democracy in 1999. As Minister of Transport, Dr. Chikwe presided over 20 Federal Government parastatals, including the Nigerian Ports Authority, National Maritime Authority, Nigeria Inland Waterways Authority, and so on. Thus, Dr. Chikwe significantly became the first woman to be appointed as the head of a major infrastructure ministry.  She was later moved to the Ministry of Aviation as the first female Minister of Aviation between 2000 and 2003, where she recorded no fewer sterling achievements in her new assignment.
 
Between 2005 and 2006, Dr. Chikwe served as the first female Chairman of Joint Admission and Matriculations Board, JAMB.  Dr. Chikwe was appointed Nigeria's Ambassador to Ireland and Iceland in 2008. Between 2008 and 2011

Dr. Chikwe founded the Women's Leadership Institute. Women's Leadership Institute (WLI) is an international leadership development organization. WLI provides a professional and non-partisan platform for women in Nigeria and across Africa to develop their leadership capacity and to take on constructive roles in the political and economic development of Nigeria and Africa in general. WLI offers vocational training, executive leadership programs, customized leadership interventions, and classroom-based leadership development courses in three categories: certificate, diploma, and advanced leadership courses.

Dr. Chikwe is a renowned writer; her books are included in both the Nigerian and American curricula. The books include Kema Chikwe: Across Borders, Women of My Era, Village Boys, First School Day for Adaze, Kame Chameleon Tours the Garden, My Precious Book, and other publications. Her NGO-Women and A New Orientation, continues to empower women nationwide. Her goal is to relentlessly work towards tireless change, especially concerning women in Nigeria. Dr. Kema Chikwe, a life member of NCWS, once served as the Secretary of Imo State NCWS and in other capacities on the State and National levels. Currently, she is a member of the board of trustees at the national level.

Dr. Kema Chikwe is married to Chief (Nze) Herbert Chikwe, a successful businessman.  They are blessed with five children and eighteen grandchildren.`;

// Example usage in your component
export const formattedInfo = formatMultiLineString(originalContent);

// Example object with the formatted string
export const trusteeWithInfo = {
    name: "Dr. Kema Chikwe",
    role: "MEMBER",
    image: "/images/board-of-trustees/kema-chikwe.png",
    info: formattedInfo
};

// Alternative: Using template literal
export const trusteeWithTemplateLiteral = {
    name: "Dr. Kema Chikwe",
    role: "MEMBER",
    image: "/images/board-of-trustees/kema-chikwe.png",
    info: formatAsTemplateLiteral(originalContent)
};

// Alternative: Using concatenated string
export const trusteeWithConcatenated = {
    name: "Dr. Kema Chikwe",
    role: "MEMBER",
    image: "/images/board-of-trustees/kema-chikwe.png",
    info: formatAsConcatenatedString(originalContent)
};

// Console output for easy copying
console.log('=== FORMATTED STRING ===');
console.log(formattedInfo);
console.log('\n=== TEMPLATE LITERAL ===');
console.log(formatAsTemplateLiteral(originalContent));
console.log('\n=== CONCATENATED STRING ===');
console.log(formatAsConcatenatedString(originalContent)); 