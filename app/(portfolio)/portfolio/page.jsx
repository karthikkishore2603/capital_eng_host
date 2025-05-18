import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb from "@/components/portfolio/Breadcumb";

import Projects3 from "@/components/portfolio/portfolio-capital";
import { Suspense } from "react";
import React from "react";
export const metadata = {
  title: "Capital Engineering Consultancy",
};
export default function ProjectPage3() {
  return (
    <>
      <Header3 />
      <Breadcumb />
      <Suspense fallback={<div>Loading...</div>}>
      <Projects3 />
      </Suspense>
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
