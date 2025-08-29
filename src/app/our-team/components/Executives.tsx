import Image from "next";
import TeamGrid from "./TeamGrid";
import { Executives, Heading3 } from "./properties";

export default function ExecutivesGrid() {
  return <TeamGrid headings={Heading3} members={Executives} />;
}
