import MarqueeComponent from "./Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import ServiceDetails from "./ServiceDetails";
import CtaForm from "@/components/CTA/cta";
import Breadcumb from "./Breadcumb";



export const metadata = {
    title:
      "Architecture & Design",
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
  