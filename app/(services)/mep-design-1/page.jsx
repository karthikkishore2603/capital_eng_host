import MarqueeComponent from "./Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import ServiceDetails from "./ServiceDetails";
import Breadcumb from "./Breadcumb";
import CtaForm from "@/components/CTA/cta";

export const metadata = {
    title:
      "MEP Design and Services ",
  };
  
  export default function ServicePageDetails({ params }) {
    return (
      <>
        <Header3 />
        <Breadcumb/>
        <ServiceDetails />
        {/* <CtaForm/> */}
        <MarqueeComponent />
        <Footer8 />
      </>
    );
  }
  