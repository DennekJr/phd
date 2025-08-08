import MeetOurTeam from './components/MeetOurTeam';
import BoardOfTrustees from './components/BoardOfTrustees';
import Executives from './components/Executives';
import AssociateFounders from './components/AssociateFounders';

export default function OurTeam() {
    return (
        <div className='!bg-white'>
            <MeetOurTeam />
            <BoardOfTrustees />
            <AssociateFounders />
            <Executives />
        </div>
    )
}