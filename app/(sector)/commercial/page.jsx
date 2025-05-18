import MarqueeComponent from "@/components/common/Marquee";
import Footer1 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb2 from "./breadcumb";
import CtaForm from "@/components/CTA/cta";
import SectorDetails from "./details";
import Blogs from "./projects";
import { allPortfolio } from "@/data/portfolio";
import Head from "next/head";

export const metadata = {
  title: "Commercial Sector | Capital Engineering Consultancy",
  description:
    "Explore Capital Engineering Consultancy’s expert solutions across the Commercial, Automobile, and Food & Beverages sectors, tailored to meet diverse business needs.",
  keywords:
    "Commercial Engineering, Automobile Engineering, Food and Beverages Sector, Capital Engineering Consultancy, Commercial Sector Solutions, Industrial Projects",
  openGraph: {
    title: "Commercial Sector | Capital Engineering Consultancy",
    description:
      "Discover our engineering expertise across commercial, automobile, and food & beverage sectors. Partner with Capital Engineering Consultancy for industry-leading innovation.",
    url: "https://www.capitalengg.com/commercial",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/commercial-sector.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial Sector - Capital Engineering Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Sector | Capital Engineering Consultancy",
    description:
      "Driving innovation in the Commercial, Automobile, and Food & Beverage industries through advanced engineering and consultancy services.",
    images: [
      "https://www.capitalengg.com/images/commercial-sector.jpg",
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
        <link rel="canonical" href="https://www.capitalengg/commercial" />
      </Head>

      <Header3 />
      <Breadcumb2 />
      <SectorDetails />
      <Blogs />
      {/* <CtaForm/> */}
      <MarqueeComponent />
      <Footer1 />
    </>
  );
}
