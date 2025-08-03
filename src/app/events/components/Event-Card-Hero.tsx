import Image from "next/image";

export default function EventCardHero() {
    const timeline = [
        {
            tracker: "27 June",
            icon: "/images/events/calender-icon.svg",
        },
        {
            tracker: "7PM",
            icon: "/images/events/time-icon.svg",
        }
    ]
    return (
        <div className="bg-[#FFFFFF] flex items-start justify-between !py-[18px] !gap-[41px]">
            <div className="flex flex-col max-w-[576px] items-start justify-start gap-[20px] !pl-[37px]">
                <h1 className="text-[#232427] whitespace-nowrap !text-left !text-[36px] !leading-[100%] font-bold">
                    "Meet the Mentors" Networking
                    <br />
                    Mixer
                </h1>
                <div className="flex items-center gap-[20px]">
                    {timeline.map((item, index) => (
                        <div key={index} className="flex items-center gap-[10px]">
                            <Image src={item.icon} alt={item.tracker} width={18} height={20} />
                            <p className="text-[#232427] text-[16px] !leading-[100%] font-semibold">{item.tracker}</p>
                        </div>
                    ))}
                </div>
                <p className="text-[#232427] text-[16px] !leading-[120%] !tracking-[0.01em] font-light text-left">
                    An evening mixer in Lekki, Lagos, offering a relaxed environment for emerging female scholars to connect with experienced PhD holders for mentorship and career advice.
                </p>
            </div>
            <div className="!pr-[16px]">
                <Image
                    src="/images/events/event-card-image.svg"
                    alt="Event card hero"
                    width={428}
                    height={305}
                    className="object-cover w-auto h-auto"
                />
            </div>
        </div>
    )
}