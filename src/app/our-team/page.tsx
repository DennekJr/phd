import UpcomingEvents from "../components/UpcomingEvents";
import Hero from "./components/Hero";
import BoardOfTrusteesGrid from "./components/BoardOfTrustees";
import AssociateFoundersGrid from "./components/AssociateFounder";
import ExecutivesGrid from "./components/Executives";

export default function OurTeam() {
  return (
    <div>
      <Hero />
      <BoardOfTrusteesGrid />
      <AssociateFoundersGrid />
      <ExecutivesGrid />
    </div>
  );
}
