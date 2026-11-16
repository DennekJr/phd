import TeamGrid from './TeamGrid';
import { RegularMembers } from './constants';

export default function Members() {
    return (
        <TeamGrid
            title="Members"
            description="Our dedicated members driving the vision and mission of the Association."
            members={RegularMembers}
            scribbleImage="/images/our-team/scribble.svg"
            className='!pb-[9.375rem]'
        />
    );
}
