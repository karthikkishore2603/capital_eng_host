import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import ServiceDetails from "./ServiceDetails";



export const metadata = {
    title:
      "PrivayPolicy",
  };
  
  export default function PrivayPolicy({ params }) {
    return (
      <>
        <Header3 />
        <ServiceDetails />
        <Footer8 />
      </>
    );
  }
  