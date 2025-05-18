import MarqueeComponent from "@/components/common/Marquee";
import Footer1 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb2 from "./breadcumb";
import CtaForm from "@/components/CTA/cta";
import SectorDetails from "./details";
import Blogs from "./projects";
import { allPortfolio } from "@/data/portfolio";
export const metadata = {
  title: "Commercial Sector",
};

//For Static Side Genaration(SSG)

// export async function generateStaticParams() {
//   return allPortfolio.map((elm) => ({
//     id: `${elm.id}`,
//   }));
// }

export default function ProjectPageDetails({ params }) {
  return (
    <>
      <Header3 />
      <Breadcumb2 />
      <SectorDetails />
      <Blogs />
      {/* <CtaForm/> */}
      <MarqueeComponent />
      <Footer1 />
    </>
  );
}
