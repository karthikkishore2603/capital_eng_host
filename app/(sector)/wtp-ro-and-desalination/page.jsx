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
  title: "WTP, RO & Desalination | Capital Engineering Consultancy",
  description:
    "Explore our advanced solutions in Water Treatment Plants (WTP), Reverse Osmosis (RO), and Desalination systems designed to meet modern water needs with efficiency and sustainability.",
  keywords:
    "WTP, RO, Desalination, Water Treatment Plants, Water Engineering, Sustainable Water Solutions, Capital Engineering",
  openGraph: {
    title: "WTP, RO & Desalination | Capital Engineering Consultancy",
    description:
      "Leading the way in clean water solutions through cutting-edge WTP, RO, and desalination systems for a sustainable future.",
    url: "https://www.capitalengg.com/wtp-ro-and-desalination",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/wtp-ro-and-desalination.jpg",
        width: 1200,
        height: 630,
        alt: "Water Treatment and Desalination Plant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WTP, RO & Desalination | Capital Engineering Consultancy",
    description:
      "Delivering reliable, scalable, and eco-conscious water treatment and desalination solutions.",
    images: ["https://www.capitalengg.com/images/wtp-ro-and-desalination.jpg"],
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
        <link rel="canonical" href="https://www.capitalengg.com/wtp-ro-and-desalination" />
      </Head>

      <Header3 />
      <Breadcumb2 />
      <SectorDetails />
      <Blogs />
      {/* <CtaForm /> */}
      <MarqueeComponent />
      <Footer1 />
    </>
  );
}
