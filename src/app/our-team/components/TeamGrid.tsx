import Image from "next/image";
import Link from "next/link";

interface TeamHeadings {
  title: string;
  description: string;
  decorativeImage: string;
}

interface TeamMembers {
  src: string;
  role: string;
  fullName: string;
  biodata: string;
  biolink: string;
}

interface TeamGridProps {
  //   title: string;
  //   description: string;
  //   decorativeImage: string;

  headings: TeamHeadings;
  members: TeamMembers[];
}

export default function TeamGrid({ headings, members }: TeamGridProps) {
  return (
    <section className="relative bg-[#FBF7ED]  ">
      <div className=" max-w-[1700px] !mx-auto">
        <div className=" !px-[9px] md:!px-[207.5px] !pt-[68.9px]  md:!py-[112px] ">
          <div className="">
            {/* Heading */}
            <div className=" ">
              <div className=" items-center justify-center w-full ]">
                <div className="flex w-full items-center justify-center md:justify-start ">
                  <Image
                    src={headings.decorativeImage}
                    alt="kkkkk"
                    width={271}
                    height={45}
                    className="w-[120px] md:w-[271px] "
                  />
                </div>
                <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:justify-between !pb-[70px] gap-2">
                  <h1 className=" text-[16px] md:text-[32px] font-bold grow !pr-[50px]">
                    {headings.title}
                  </h1>
                  <h2 className="text-[16px] md:text-[20px] font-light md:font-semibold ">
                    {headings.description}
                  </h2>
                </div>
              </div>
              {/* Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3  gap-2 md:gap-6 ">
                {members.map((member, ind) => (
                  <Link
                    href={`/our-team/${member.biolink}`}
                    className="bg-[#E8DFCC] "
                    key={ind}
                  >
                    <div className="relative h-[378px] ">
                      <Image
                        src={member.src}
                        alt={member.fullName}
                        width={412}
                        height={378}
                        className=" w-full md:w-[412px]  h-[377px] object-cover object-top"
                      />
                    </div>
                    <div className="!px-[20px] !pt-[34px] !pb-[24px] !pb-[44px] text-[12px] md:text-[16px]">
                      <p className=" ">
                        {member.fullName} <br />
                        <span className="font-bold">{member.role}</span>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
