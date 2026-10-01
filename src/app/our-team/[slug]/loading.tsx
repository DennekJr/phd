export default function Loading() {
    return (
        <div className="min-h-screen bg-[#FFFFFF] !pt-[12rem] !pb-[6rem]" role="status" aria-label="Loading profile">
            <span className="sr-only">Loading…</span>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="w-full h-[40.625rem] rounded-lg skeleton skeleton-light" />
                <div className="flex flex-col !gap-[1.25rem] !pt-[2rem]">
                    <div className="h-[3rem] w-[75%] skeleton skeleton-light" />
                    <div className="h-[1.5rem] w-[50%] skeleton skeleton-light !mb-[1.5rem]" />
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="h-[1rem] w-full skeleton skeleton-light" />
                    ))}
                </div>
            </div>
        </div>
    );
}
