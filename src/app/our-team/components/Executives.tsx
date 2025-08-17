import TeamGrid from './TeamGrid';
import { ExecutiveTrustees } from './constants';

export default function Executives() {

    return (
            <TeamGrid
                title="Executives"
                description="The executive members are the engine of the association, doing all the implementation tasks in various capacities. "
                members={ExecutiveTrustees}
                scribbleImage="/images/our-team/scribble.svg"
                className='!pb-[150px]'
            />
    );
} 