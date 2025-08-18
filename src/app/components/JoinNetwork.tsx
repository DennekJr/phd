import YellowButton from './YellowButton';

export default function JoinNetwork() {
  return (
    <section className="relative flex items-start justify-center max-h-[1380px] bg-[#880C24] py-24 overflow-hidden">
      {/* Dynamic animated background */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      </div>

      <div className="relative max-w-[1920px] mx-auto !px-[50px] lg:!px-[76px] !py-[70px] lg:!py-[116px]">
        <div className="max-w-[977px] mx-auto">
          {/* Dynamic header */}
          <div className="text-center !mb-[44px]">
            <h2 className="!text-[24px] !leading-[100%] lg:!text-[48px] font-medium !mb-[44px] leading-[100%]">
              <span className="text-white drop-shadow-[0_4px_4px_rgba(173,0,0,0.3)]">
                Join Our Network of Empowered Nigerian Female PhD Holders!
              </span>
            </h2>
            <p className="!text-[16px] lg:!text-[24px] !font-light text-white mx-auto !leading-[24px] lg:!leading-[100%] tracking-[0%] !mb-[20px]">
            Are you a Nigerian woman holding a PhD in Arts or Sciences? Do you want to connect with like-minded scholars, contribute to national development, and champion academic excellence?
            </p>
            <p className="!text-[16px] lg:!text-[24px] !font-light text-white mx-auto !leading-[24px] lg:!leading-[100%] tracking-[0%] !mb-[20px]">
            The Network for Nigerian Female PhD Holders in ARTS and SCIENCES (NENFPHAS) is building a vibrant community dedicated to empowering Nigerian women with Doctorate degrees in various fields of study for National development. By joining us, you'll gain access to a supportive network, opportunities for collaboration, and avenues to make a real impact through our initiatives, including sponsoring indigent doctorate students and recognizing outstanding academic achievements.
            </p>
            <p className="!text-[16px] lg:!text-[24px] !font-semibold text-white mx-auto !leading-[24px] lg:!leading-[100%] tracking-[0%]">
              Be part of something bigger.
            </p>
          </div>
          <div className='flex justify-center drop-shadow-[0_8px_16px_rgba(96,97,112,0.16)] drop-shadow-[0_2px_4px_rgba(40,41,61,0.04)]'>
            <YellowButton>
              <span className="flex items-center gap-2 text-lg font-bold">
                JOIN NOW
              </span>
            </YellowButton>
          </div>
        </div>
      </div>
    </section>
  );
} 