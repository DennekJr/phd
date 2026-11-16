import MeetOurTeam from './components/MeetOurTeam';
import BoardOfTrustees from './components/BoardOfTrustees';
import AssociateFounders from './components/AssociateFounders';
import Executives from './components/Executives';
import Members from './components/Members'; 

export default function OurTeam() {
    return (
        <div className='!bg-white'>
            <MeetOurTeam />
            <BoardOfTrustees />
            <AssociateFounders />
            <Executives />
            <Members /> 
        </div>
    )
}
