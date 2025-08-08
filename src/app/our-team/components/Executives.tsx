import { formatMultiLineString } from '@/utils/stringFormatter';
import TeamGrid from './TeamGrid';
import { ExecutiveTrustees } from './constants';

export default function Executives() {

    return (
            <TeamGrid
                title="Executives"
                description="The Associate Founder provides crucial support to the Founder's vision and objectives."
                members={ExecutiveTrustees}
                scribbleImage="/images/our-team/scribble.svg"
                className='!pb-[150px]'
            />
    );
} 