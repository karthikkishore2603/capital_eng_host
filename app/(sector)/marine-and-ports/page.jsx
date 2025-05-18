import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8"; // fixed from Footer1
import Header3 from "@/components/headers/Header3";
import Breadcumb2 from "./breadcumb";
import CtaForm from "@/components/CTA/cta";
import SectorDetails from "./details";
import Blogs from "./projects";
import { allPortfolio } from "@/data/portfolio";
import Head from "next/head";

export const metadata = {
  title: "Marine & Ports Sector | Capital Engineering Consultancy",
  description:
    "Capital Engineering Consultancy provides innovative marine engineering and port infrastructure solutions to improve port efficiency and coastal resilience.",
  keywords:
    "Marine Engineering, Port Infrastructure, Coastal Development, Maritime Consultancy, Port Modernization, Marine Logistics, Capital Engineering Consultancy",
  openGraph: {
    title: "Marine & Ports Sector | Capital Engineering Consultancy",
    description:
      "Explore how Capital Engineering Consultancy shapes the future of maritime infrastructure through innovative engineering solutions for ports and coastal regions.",
    url: "https://www.capitalengg.com/marine-and-ports",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/marine-and-ports-sector.jpg",
        width: 1200,
        height: 630,
        alt: "Marine and Ports Sector - Capital Engineering Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marine & Ports Sector | Capital Engineering Consultancy",
    description:
      "Capital Engineering delivers world-class solutions for port modernization, marine logistics, and coastal infrastructure projects.",
    images: [
      "https://www.capitalengg.com/images/marine-and-ports-sector.jpg",
    ],
  },
};

export default function ProjectPageDetails({ params }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <link rel="canonical" href="https://www.capitalengg.com/marine-and-ports" />
      </Head>

      <Header3 />
      <Breadcumb2 />
      <SectorDetails />
      <Blogs />
      {/* <CtaForm /> */}
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
