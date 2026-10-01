/**
 * The team pages sit on a light background, so their skeleton uses the
 * light shimmer and a card grid instead of the dark list layout.
 */
export default function Loading() {
    return (
        <div className="min-h-screen bg-[#FFFFFF] !pt-[12rem] !pb-[6rem]" role="status" aria-label="Loading team">
            <span className="sr-only">Loading…</span>
            <div className="mx-auto w-full max-w-[120rem] !px-[1.25rem] lg:!px-[6.25rem]">
                <div className="h-[3rem] w-[20rem] skeleton skeleton-light !mb-[3rem]" />
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 !gap-[1.5rem]">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="bg-[#E8DFCC]">
                            <div className="h-[23.5625rem] w-full skeleton skeleton-light" />
                            <div className="!px-[1.25rem] !pt-[2.125rem] !pb-[2.75rem] flex flex-col !gap-[0.75rem]">
                                <div className="h-[1.125rem] w-[70%] skeleton skeleton-light" />
                                <div className="h-[1rem] w-[45%] skeleton skeleton-light" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
