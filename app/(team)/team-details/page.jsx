import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Contact2 from "@/components/team/Contact2";

import TeamDetails from "@/components/team/TeamDetails";



export const metadata = {
  title: "Team Details || Frisk - Creative Agency & Portfolio Nextjs Template",
};

export default function TeamPageDetails() {
  return (
    <>
      <Header3 />
      <TeamDetails/>
      <Contact2 />
      <MarqueeComponent/>
      <Footer8 />
    </>
  );
}
