import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";

import ServiceDetails from "./details";
import Contact2 from "./applyform"
import { allFeatures } from "@/data/features";

export const metadata = {
  title:
    "Service Details || Frisk - Creative Agency & Portfolio Nextjs Template",
};

export default function ServicePageDetails({ params }) {
  return (
    <>
      <Header3 />
      <ServiceDetails/>
      <Contact2 />
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
