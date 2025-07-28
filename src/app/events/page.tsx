import UpcomingEvents from "../components/UpcomingEvents";
import Hero from "./components/Hero";

export default function Events() {
    return (
        <div>
            <Hero />
            <UpcomingEvents showAllEvents={true} />
        </div>
    )
}