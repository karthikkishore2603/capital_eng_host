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
  title: "Roads and Infrastructure | Capital Engineering Consultancy",
  description:
    "Discover our expertise in roads and infrastructure development – from highways to smart urban infrastructure projects ensuring sustainability and long-term performance.",
  keywords:
    "Roads, Infrastructure, Highway Projects, Urban Infrastructure, Smart Roads, Civil Engineering, Capital Engineering",
  openGraph: {
    title: "Roads and Infrastructure | Capital Engineering Consultancy",
    description:
      "Building smarter roads and stronger infrastructure with engineering excellence and sustainable designs.",
    url: "https://www.capitalengg.com/roads-and-infrastructure",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/roads-and-infrastructure.jpg",
        width: 1200,
        height: 630,
        alt: "Roads and Infrastructure Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roads and Infrastructure | Capital Engineering Consultancy",
    description:
      "Transforming connectivity and mobility through road and infrastructure projects tailored for the future.",
    images: ["https://www.capitalengg.com/images/roads-and-infrastructure.jpg"],
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
        <link rel="canonical" href="https://www.capitalengg.com/roads-and-infrastructure" />
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
