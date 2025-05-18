"use client";
import Header3 from "@/components/headers/Header3";
import Hero from "./Hero";
import Aboutn from "@/components/servicenew/Aboutn";
import About1 from "./Aboutcon";
import Features from "@/components/servicenew/Features"; 
import Port from "./Port";
// import Footern from "@/components/servicenew/Footern";
import Footern from "@/components/footers/Footer8";
import Project from "./Project";
import Head from "next/head";
export default function RefinedLiving() {
  return (
    <>
        <Head><link rel="canonical" href="https://www.capitalengg.com/bim-services" /></Head>
    <Header3 />
    <Hero />
    <Project />
    <Aboutn />
    <About1 />
    <Features />
    <Port />
    <Footern />
    </>
  );
}
