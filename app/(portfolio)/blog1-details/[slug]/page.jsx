"use client";

import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb2 from "@/components/portfolio/Breadcumb2";

import ProjectDetails from "@/components/portfolio/myblog-details";
import { Suspense } from "react";

export default function ProjectPageDetails({ params }) {
  const { slug } = params;

  return (
    <>
      <Header3 />
      <Breadcumb2 />
      <Suspense fallback={<div>Loading...</div>}>
      <ProjectDetails slug={slug} />
      </Suspense>
     
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
