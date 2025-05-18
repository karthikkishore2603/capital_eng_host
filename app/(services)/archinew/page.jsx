"use client";
import Header3 from "@/components/headers/Header3";
import Hero from "@/app/(services-new)/architecture-and-design/Hero";
import Aboutn from "@/components/servicenew/Aboutn";
// import About1 from "@/components/servicenew/Aboutcon";
import Features from "@/components/servicenew/Features"; 
import Port from "@/app/(services-new)/architecture-and-design/Port";
import Footern from "@/components/servicenew/Footern";
import Project from "@/app/(services-new)/architecture-and-design/Project";
export default function RefinedLiving() {
  return (
    <>
    <Header3 />
    <Hero />
    <Project />
    <Aboutn />
    {/* <About1 /> */}
    <Features />
    <Port />
    <Footern />
    </>
  );
}
