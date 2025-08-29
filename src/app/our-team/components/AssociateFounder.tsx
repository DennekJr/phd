import Image from "next";
import TeamGrid from "./TeamGrid";
import { AssociateFounders, Heading2 } from "./properties";

export default function AssociateFoundersGrid() {
  return <TeamGrid headings={Heading2} members={AssociateFounders} />;
}
