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
    <section className="relative bg-[#FBF7ED] !pb-20">
      <div className=" max-w-[1700px] !mx-auto">
        <div className=" !px-[9px] lg:!px-[207.5px] !pt-[68.9px]  md:!py-[112px] ">
          <div className="">
            {/* Heading */}
            <div className=" ">
              <div className=" items-center justify-center w-full ]">
                <div className="flex w-full items-center justify-center lg:justify-start ">
                  <Image
                    src={headings.decorativeImage}
                    alt="kkkkk"
                    width={271}
                    height={45}
                    className="w-[120px] lg:w-[271px] "
                  />
                </div>
                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between !pb-[70px] gap-2">
                  <h1 className=" text-[16px] lg:text-[32px] font-bold grow lg:!pr-[50px]">
                    {headings.title}
                  </h1>
                  <h2 className="text-[16px] lg:text-[20px] font-light lg:font-semibold ">
                    {headings.description}
                  </h2>
                </div>
              </div>
              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 ">
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
                    <div className="!px-[10px] md:!px-[20px] !pt-[20px] md:!pt-[34px] !pb-[20px] md:!pb-[24px] md:!pb-[44px] text-[16px]">
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
