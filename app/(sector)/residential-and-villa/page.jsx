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
  title: "Residential and Villa Projects | Capital Engineering Consultancy",
  description:
    "Explore our bespoke residential and villa developments tailored for luxury, comfort, and modern living. From premium villas to gated communities, we deliver dream homes with precision.",
  keywords:
    "Residential Projects, Villa Construction, Modern Homes, Smart Living, Housing Projects, Luxury Villas, Capital Engineering",
  openGraph: {
    title: "Residential and Villa Projects | Capital Engineering Consultancy",
    description:
      "Experience elegance and quality in every home. We build stylish, efficient, and lasting residential spaces.",
    url: "https://www.capitalengg.com/residential-and-villa",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/residential-and-villa.jpg",
        width: 1200,
        height: 630,
        alt: "Residential and Villa Sector Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential and Villa Projects | Capital Engineering Consultancy",
    description:
      "Premium residential and villa projects built with a perfect blend of aesthetics and engineering excellence.",
    images: ["https://www.capitalengg.com/images/residential-and-villa.jpg"],
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
        <link rel="canonical" href="https://www.capitalengg.com/residential-and-villa" />
      </Head>

      <Header3 />
      <Breadcumb2 />
      <SectorDetails />
      <Blogs />
      {/* <CtaForm/> */}
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
