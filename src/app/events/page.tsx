import UpcomingEvents from "../components/UpcomingEvents";
import Hero from "./components/Hero";
import { eventData } from "../components/eventsdata";

export default function Events() {
  const hasEvents = eventData.length > 0;
  return (
    <div>
      {hasEvents && <Hero />}
      <UpcomingEvents showAllEvents={true} />
    </div>
  );
}
