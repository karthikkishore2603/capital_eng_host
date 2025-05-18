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
  title: "Power & Energy | Capital Engineering Consultancy",
  description:
    "Explore how Capital Engineering delivers sustainable solutions in power generation, transmission, and renewable energy infrastructure.",
  keywords:
    "Power and Energy Engineering, Renewable Energy, Solar Power Plants, Wind Energy, Energy Infrastructure, Power Transmission, Capital Engineering Consultancy",
  openGraph: {
    title: "Power & Energy | Capital Engineering Consultancy",
    description:
      "Capital Engineering is powering the future with smart grid solutions, renewable energy design, and efficient power transmission systems.",
    url: "https://www.capitalengg.com/power-and-energy",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/power-and-energy-sector.jpg",
        width: 1200,
        height: 630,
        alt: "Power and Energy Sector - Capital Engineering Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Power & Energy | Capital Engineering Consultancy",
    description:
      "From renewable energy to power grid management, we engineer innovative energy solutions.",
    images: [
      "https://www.capitalengg.com/images/power-and-energy-sector.jpg",
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
        <link rel="canonical" href="https://www.capitalengg.com/power-and-energy" />
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
