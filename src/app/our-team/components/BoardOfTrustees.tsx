import TeamGrid from './TeamGrid';
import { BoardOfTrusteesMembers } from './constants';

export default function BoardOfTrustees() {

    return (
        <TeamGrid
            title="Board of Trustees"
            description="The Board of Trustees is responsible for safeguarding the interests of the Association."
            members={BoardOfTrusteesMembers}
            scribbleImage="/images/our-team/scribble.svg"
        />
    );
} 