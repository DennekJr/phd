import Image from "next";
import TeamGrid from "./TeamGrid";
import { BoardOfTrustees, Heading1 } from "./properties";

export default function BoardOfTrusteesGrid() {
  return <TeamGrid headings={Heading1} members={BoardOfTrustees} />;
}
