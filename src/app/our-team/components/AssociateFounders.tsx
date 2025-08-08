import TeamGrid from './TeamGrid';
import { AssociateFounderTrustees } from './constants';

export default function AssociateFounders() {

    return (
        <TeamGrid
            title="Associate Founders"
            description="The Associate Founder provides crucial support to the Founder's vision and objectives."
            members={AssociateFounderTrustees}
            scribbleImage="/images/our-team/scribble.svg"
        />
    );
} 