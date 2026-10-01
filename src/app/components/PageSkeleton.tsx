/**
 * Shared route-transition skeleton. Mirrors the rough shape of a page
 * (dark hero, then a stack of content rows) so navigation feels like the
 * page is filling in rather than hanging on a blank screen.
 */
export default function PageSkeleton({ rows = 3 }: { rows?: number }) {
    return (
        <div className="min-h-screen bg-[#101010]" role="status" aria-label="Loading page">
            <span className="sr-only">Loading…</span>

            {/* Hero band */}
            <div className="relative w-full h-[34rem] lg:h-[43rem] skeleton">
                <div className="absolute inset-x-0 bottom-[6rem] mx-auto max-w-[120rem] !px-[1.25rem] lg:!px-[6.25rem] flex flex-col !gap-[1.25rem]">
                    <div className="h-[2rem] w-[14rem] skeleton" />
                    <div className="h-[3.5rem] w-full max-w-[40rem] skeleton" />
                    <div className="h-[1.5rem] w-full max-w-[28rem] skeleton" />
                </div>
            </div>

            {/* Content rows */}
            <div className="mx-auto w-full max-w-[120rem] !px-[1.25rem] lg:!px-[6.25rem] !py-[6rem] flex flex-col !gap-[4rem]">
                {Array.from({ length: rows }).map((_, i) => (
                    <div key={i} className="flex flex-col-reverse lg:flex-row items-start !gap-[1.5rem] lg:!gap-[2.5rem]">
                        <div className="hidden lg:block w-[6.375rem] h-[7rem] skeleton shrink-0" />
                        <div className="flex-grow w-full flex flex-col !gap-[1rem]">
                            <div className="h-[2rem] w-full max-w-[34rem] skeleton" />
                            <div className="h-[1rem] w-full skeleton" />
                            <div className="h-[1rem] w-full max-w-[48rem] skeleton" />
                        </div>
                        <div className="w-full lg:w-[20.6875rem] h-[12.6875rem] skeleton shrink-0" />
                    </div>
                ))}
            </div>
        </div>
    );
}
