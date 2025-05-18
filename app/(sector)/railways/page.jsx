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
  title: "Railways | Capital Engineering Consultancy",
  description:
    "Capital Engineering specializes in advanced railway infrastructure projects including metro systems, rail electrification, track alignment, and station design.",
  keywords:
    "Railway Engineering, Metro Projects, Railway Electrification, Track Design, Rail Infrastructure, Smart Stations, Capital Engineering Consultancy",
  openGraph: {
    title: "Railways | Capital Engineering Consultancy",
    description:
      "From metros to high-speed rails, we deliver robust railway solutions with cutting-edge engineering and sustainable design.",
    url: "https://www.capitalengg.com/railways",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/railway-sector.jpg",
        width: 1200,
        height: 630,
        alt: "Railway Infrastructure by Capital Engineering Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Railways | Capital Engineering Consultancy",
    description:
      "Explore smart, efficient, and future-ready railway solutions tailored to urban and intercity demands.",
    images: ["https://www.capitalengg.com/images/railway-sector.jpg"],
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
        <link rel="canonical" href="https://www.capitalengg.com/railways" />
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
