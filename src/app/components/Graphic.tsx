import Image from "next/image";

export default function Graphic() {
    return (
        <section className="relative max-h-[353px] bg-[#880C24] py-24 overflow-hidden">
            <Image src={'/images/join-network/graphic.svg'} alt='Graphic' width={1000} height={1000} className="w-full h-full object-cover" />
        </section>
    );
}