"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Head from "next/head"; // Added for metadata
import Slider from "react-slick";
import { useEffect, useRef } from "react";
import commercial1 from "@/public/assets/images/commercial.jpg";

export default function SectorDetails() {
  const slideroptions = {
    arrows: true,
    autoplay: true,
    prevArrow: (
      <button
        type="button"
        className="slick-prev slick-arrow"
        aria-label="Previous Slide"
      >
        <i className="fas fa-arrow-left"></i>
      </button>
    ),
    nextArrow: (
      <button
        type="button"
        className="slick-next slick-arrow"
        aria-label="Next Slide"
      >
        <i className="fas fa-arrow-right"></i>
      </button>
    ),
  };

  // Schema Markup for SEO (Enhanced)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Commercial Sector - Capital Engineering Consultancy",
    description:
      "Explore our expertise in designing commercial spaces including retail, offices, mixed-use developments, automobile showrooms, and food & beverage outlets.",
    url: "https://www.capitalengg.com/commercial",
    publisher: {
      "@type": "Organization",
      name: "Capital Engineering Consultancy",
      logo: {
        "@type": "ImageObject",
        url: "https://www.capitalengg.com/logo.png",
        width: 200, // Added for specificity
        height: 60,
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.capitalengg.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sectors",
          item: "https://www.capitalengg.com/sectors",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Commercial",
          item: "https://www.capitalengg.com/commercial",
        },
      ],
    },
    mainEntity: {
      "@type": "Service",
      name: "Commercial Design Services",
      description:
        "Comprehensive design and engineering solutions for retail, office spaces, mixed-use developments, automobile showrooms, and food & beverage outlets.",
      provider: {
        "@type": "Organization",
        name: "Capital Engineering Consultancy",
      },
    },
  };

  return (
    <>
      {/* Head for SEO Metadata (Enhanced) */}
      <Head>
        <title>Commercial Sector | Capital Engineering Consultancy</title>
        <meta
          name="description"
          content="Discover our commercial sector expertise at Capital Engineering Consultancy, specializing in retail, office spaces, mixed-use developments, automobile showrooms, and food & beverage outlets."
        />
        <meta
          name="keywords"
          content="commercial design, retail spaces, office design, mixed-use developments, automobile showrooms, food and beverage outlets, Capital Engineering Consultancy, commercial architecture, sustainable commercial spaces"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.capitalengg.com/commercial" />
        {/* Open Graph Tags (Enhanced) */}
        <meta
          property="og:title"
          content="Commercial Sector | Capital Engineering Consultancy"
        />
        <meta
          property="og:description"
          content="Discover our commercial sector expertise at Capital Engineering Consultancy, specializing in retail, office spaces, mixed-use developments, automobile showrooms, and food & beverage outlets."
        />
        <meta
          property="og:url"
          content="https://www.capitalengg.com/commercial"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={commercial1.src} />
        <meta property="og:image:width" content="1296" />{" "}
        {/* Added for image specificity */}
        <meta property="og:image:height" content="700" />
        <meta
          property="og:image:alt"
          content="Commercial project by Capital Engineering Consultancy"
        />
        <meta
          property="og:site_name"
          content="Capital Engineering Consultancy"
        />
        {/* Twitter Card Tags (Enhanced) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Commercial Sector | Capital Engineering Consultancy"
        />
        <meta
          name="twitter:description"
          content="Discover our commercial sector expertise at Capital Engineering Consultancy, specializing in retail, office spaces, mixed-use developments, automobile showrooms, and food & beverage outlets."
        />
        <meta name="twitter:image" content={commercial1.src} />
        <meta
          name="twitter:image:alt"
          content="Commercial project by Capital Engineering Consultancy"
        />
        <meta name="twitter:site" content="@CapitalEngg" />{" "}
        {/* Replace with actual Twitter handle */}
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <section
        className="project-details-page-area space"
        aria-labelledby="commercial-title"
      >
        <div className="container">
          <div className="col-xl-12">
            <figure className="project-inner-thumb mb-80 wow img-custom-anim-top animated">
              <Image
                width={1296}
                height={700}
                className="w-100"
                src={commercial1}
                alt="Commercial project by Capital Engineering Consultancy"
                priority
                loading="eager" // Enhanced for faster LCP
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1296px" // Responsive image sizes
              />
              <figcaption className="visually-hidden">
                Commercial project showcasing retail and office spaces by
                Capital Engineering Consultancy
              </figcaption>
            </figure>
          </div>

          <div className="row justify-content-between flex-row-reverse">
            <div className="col-xl-3 col-lg-4 d-none d-lg-block">
              <nav
                className="elite-navigation-column"
                aria-label="Sector Navigation"
              >
                <div className="navigation-header">
                  <div className="header-accent"></div>
                  <h3 className="navigation-title" style={{ color: "white" }}>
                    Our Sectors
                  </h3>
                  <svg
                    className="compass-icon"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#E9647C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.24 7.76L14.12 14.12L7.76 16.24L9.88 9.88L16.24 7.76Z"
                      stroke="#E9647C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="navigation-links-container">
                  <div className="navigation-links">
                    {[
                      { text: "Commercial", url: "/commercial" },
                      { text: "Education", url: "/education" },
                      { text: "Railways", url: "/railways" },
                      { text: "Shelters", url: "/shelters" },
                      { text: "Oil & Gas", url: "/oil-and-gas" },
                      { text: "Power & Energy", url: "/power-and-energy" },
                      { text: "Marine & Ports", url: "/marine-and-ports" },
                      {
                        text: "Healthcare & Hospitality",
                        url: "/healthcare-and-hospitality",
                      },
                      {
                        text: "Industrial & Logistics",
                        url: "/industrial-and-logistics",
                      },
                      {
                        text: "Roads & Infrastructure",
                        url: "/roads-and-infrastructure",
                      },
                      {
                        text: "WTP, RO & Desalination",
                        url: "/wtp-ro-and-desalination",
                      },
                    ].map((item, index) => (
                      <a
                        key={index}
                        href={item.url}
                        className="nav-link"
                        rel={item.url === "/commercial" ? "" : "nofollow"} // Conditional rel for current page
                        aria-current={
                          item.url === "/commercial" ? "page" : undefined
                        }
                      >
                        <span className="link-text">{item.text}</span>
                        <span className="link-arrow">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              d="M9 18L15 12L9 6"
                              stroke="#071E53"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>

            <style jsx>{`
              .elite-navigation-column {
                background: white;
                border-radius: 14px;
                overflow: hidden;
                box-shadow: 0 8px 30px rgba(7, 30, 83, 0.08);
                width: 280px;
                margin-left: -40px;
                border: 1px solid rgba(239, 130, 143, 0.1);
              }

              .navigation-header {
                background: #071e53;
                color: white;
                padding: 18px 20px;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
              }

              .header-accent {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 3px;
                background: linear-gradient(90deg, #e9647c 0%, #fa1b3a 100%);
              }

              .compass-icon {
                width: 20px;
                height: 20px;
              }

              .navigation-title {
                font-size: 1.1rem;
                font-weight: 600;
                margin: 0;
                letter-spacing: 0.5px;
              }

              .navigation-links-container {
                padding: 12px 0;
              }

              .navigation-links {
                display: flex;
                flex-direction: column;
              }

              .nav-link {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 20px;
                text-decoration: none;
                color: #444;
                transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                position: relative;
              }

              .nav-link:hover {
                background: rgba(7, 30, 83, 0.03);
                color: #071e53;
              }

              .nav-link:hover .link-text {
                transform: translateX(4px);
              }

              .link-text {
                font-size: 0.9rem;
                font-weight: 500;
                transition: transform 0.3s ease;
              }

              .link-arrow {
                opacity: 0;
                transform: translateX(-5px);
                transition: all 0.3s ease;
              }

              .nav-link:hover .link-arrow {
                opacity: 1;
                transform: translateX(0);
              }

              .link-arrow svg {
                width: 16px;
                height: 16px;
              }

              .nav-link:hover .link-arrow path {
                stroke: #e9647c;
              }

              .nav-link:not(:last-child)::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 20px;
                right: 20px;
                height: 1px;
                background: rgba(239, 130, 143, 0.1);
              }

              @media (max-width: 1199px) {
                .elite-navigation-column {
                  width: 260px;
                }
              }
            `}</style>

            <article className="col-lg-8">
              <div className="title-area mb-35">
                <h1
                  className="sec-title fs-1"
                  id="commercial-title"
                  style={{ color: "#071E53" }}
                >
                  Commercial
                </h1>
                <p className="sec-text mt-30" style={{ textAlign: "justify" }}>
                  At <strong>Capital Engineering Consultancy</strong>, we
                  understand that commercial spaces must seamlessly integrate
                  functionality, efficiency, and aesthetics to create
                  environments that drive success. Whether it&apos;s{" "}
                  <strong>
                    retail, office spaces, mixed-use developments, automobile
                    showrooms and food & beverage outlets
                  </strong>
                  , we work closely with clients to design spaces that support
                  operational goals and enhance customer engagement.
                </p>
              </div>
              <h2 style={{ color: "#071E53", marginBottom: "20px" }}>
                Designing for Business Success
              </h2>
              <p className="sec-text" style={{ textAlign: "justify" }}>
                Commercial projects come with unique challenges, from optimizing
                high-traffic areas to integrating sustainable technologies. Our
                expertise ensures that every space is strategically planned to
                align with business objectives while adapting to future demands:
                <br />
                <b style={{ color: "#071E53" }}>• Retail Excellence:</b>{" "}
                Designing layouts that enhance customer experiences, maximize
                space utilization, and boost foot traffic.
                <br />
                <b style={{ color: "#071E53" }}>
                  • Dynamic Office Spaces:
                </b>{" "}
                Crafting flexible, collaborative environments that drive
                employee productivity and satisfaction.
                <br />
                <b style={{ color: "#071E53" }}>
                  • Mixed-Use Innovations:
                </b>{" "}
                Combining retail, residential, and office spaces into cohesive
                developments that cater to diverse user needs.
                <br />
                <b style={{ color: "#071E53" }}>
                  • Automobile Showrooms & Service Centers:
                </b>{" "}
                Creating high-performance spaces that showcase vehicles
                effectively, enhance customer engagement, and optimize service
                efficiency.
                <br />
                <b style={{ color: "#071E53" }}>
                  • Food & Beverage Outlets:
                </b>{" "}
                Designing modern, efficient kitchens, dining areas, and retail
                spaces that enhance customer flow, improve service speed, and
                elevate the overall dining experience.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
