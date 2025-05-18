import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb2 from "./breadcumb";
import CtaForm from "@/components/CTA/cta";
import Blogs from "./projects";
import SectorDetails from "./detail";
import { allPortfolio } from "@/data/portfolio";
import Head from "next/head";

export const metadata = {
  title: "Oil & Gas Sector | Capital Engineering Consultancy",
  description:
    "Capital Engineering Consultancy offers innovative engineering, safety, and infrastructure solutions for upstream, midstream, and downstream oil and gas projects.",
  keywords:
    "Oil and Gas Engineering, Pipeline Infrastructure, Offshore Platforms, Energy Sector Solutions, Oilfield Services, Refinery Engineering, Capital Engineering Consultancy",
  openGraph: {
    title: "Oil & Gas Sector | Capital Engineering Consultancy",
    description:
      "Explore how Capital Engineering provides advanced solutions in oilfield services, pipeline design, offshore platforms, and refinery infrastructure.",
    url: "https://www.capitalengg.com/oil-and-gas",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/oil-and-gas-sector.jpg",
        width: 1200,
        height: 630,
        alt: "Oil and Gas Sector - Capital Engineering Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oil & Gas Sector | Capital Engineering Consultancy",
    description:
      "From exploration to distribution, we deliver end-to-end engineering services for the global oil and gas sector.",
    images: [
      "https://www.capitalengg.com/images/oil-and-gas-sector.jpg",
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
        <link rel="canonical" href="https://www.capitalengg.com/oil-and-gas" />
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
