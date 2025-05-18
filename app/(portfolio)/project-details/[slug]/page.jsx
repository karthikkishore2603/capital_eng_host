"use client";

import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb2 from "@/components/portfolio/Breadcumb2";

import ProjectDetails from "@/components/portfolio/myportfolio-details";
import React, { Suspense } from "react";
import { useEffect } from "react";
import { allPortfolio } from "@/data/portfolio";

export default function ProjectPageDetails({ params }) {
  const { slug } = params;
  useEffect(() => {
    // console.log("this is : ", title);
  });

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