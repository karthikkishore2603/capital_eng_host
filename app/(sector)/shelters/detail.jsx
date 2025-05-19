"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Head from "next/head";
import Slider from "react-slick";
import shelter from "@/public/assets/images/shelter.jpg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function SectorDetails() {
  const itemsImages = [
    "/assets/img/portfolio/portfolio_inner_1.png",
    "/assets/img/portfolio/portfolio_inner_2.png",
  ];

  const slideroptions = {
    arrows: true,
    autoplay: true,
    prevArrow: (
      <button type="button" className="slick-prev slick-arrow">
        <i className="fas fa-arrow-left"></i>
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next slick-arrow">
        <i className="fas fa-arrow-right"></i>
      </button>
    ),
  };

  // Schema Markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Shelters - Capital Engineering Consultancy",
    description:
      "Explore our expertise in designing and constructing shelters at Capital Engineering Consultancy, providing safe, sustainable, and adaptable solutions for emergency protection.",
    url: "https://www.capitalengg.com/shelters",
    publisher: {
      "@type": "Organization",
      name: "Capital Engineering Consultancy",
      logo: {
        "@type": "ImageObject",
        url: "https://www.capitalengg.com/logo.png",
      },
    },
  };

  return (
    <>
      {/* Head for SEO Metadata */}
      <Head>
        <title>Shelters | Capital Engineering Consultancy</title>
        <meta
          name="description"
          content="Discover our shelter solutions at Capital Engineering Consultancy, designing civil defense shelters, bomb shelters, and safe rooms for safety and sustainability."
        />
        <meta
          name="keywords"
          content="shelter design, civil defense shelters, bomb shelters, Capital Engineering Consultancy, safe rooms, sustainable shelters"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.capitalengg.com/shelters" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Shelters | Capital Engineering Consultancy"
        />
        <meta
          property="og:description"
          content="Discover our shelter solutions at Capital Engineering Consultancy, designing civil defense shelters, bomb shelters, and safe rooms for safety and sustainability."
        />
        <meta
          property="og:url"
          content="https://www.capitalengg.com/shelters"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={shelter.src} />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Shelters | Capital Engineering Consultancy"
        />
        <meta
          name="twitter:description"
          content="Discover our shelter solutions at Capital Engineering Consultancy, designing civil defense shelters, bomb shelters, and safe rooms for safety and sustainability."
        />
        <meta name="twitter:image" content={shelter.src} />
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <section
        className="project-details-page-area space"
        aria-labelledby="shelters-title"
      >
        <div className="container">
          <div className="col-xl-12">
            <div className="project-inner-thumb mb-80 wow img-custom-anim-top animated">
              <Image
                width={1296}
                height={700}
                className="w-100"
                src={shelter}
                alt="Shelter project by Capital Engineering Consultancy"
                priority
              />
            </div>
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
                        rel="nofollow"
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
                  id="shelters-title"
                  style={{ color: "#071E53" }}
                >
                  Shelters
                </h1>
                <p className="sec-text mt-30" style={{ textAlign: "justify" }}>
                  At <strong>Capital Engineering Consultancy</strong>, we
                  specialize in designing, constructing, and modernizing
                  shelters and protective spaces. Our solutions include civil
                  defense shelters, bomb shelters, government and industrial
                  bunkers, safe rooms, prefabricated shelters, and other
                  structures tailored to safeguard lives and assets during
                  emergencies.
                </p>
                <p className="sec-text mt-30" style={{ textAlign: "justify" }}>
                  Whether addressing natural disasters, conflicts, or chemical
                  threats, our shelters provide robust protection and
                  adaptability for a variety of scenarios.
                </p>
              </div>
              <h2 style={{ color: "#071E53", marginBottom: "20px" }}>
                Designing for Safety and Sustainability
              </h2>
              <p className="sec-text mb-n1" style={{ textAlign: "justify" }}>
                We prioritize safety, accessibility, and sustainability in every
                project:
                <br />
                <b style={{ color: "#071E53" }}>• Structural Integrity:</b> Our
                shelters are designed to withstand extreme weather, seismic
                events, and other severe threats.
                <br />
                <b style={{ color: "#071E53" }}>• Health and Hygiene:</b>{" "}
                Features are integrated to maintain sanitary conditions,
                ensuring occupant safety during prolonged use.
                <br />
                <b style={{ color: "#071E53" }}>• Energy Efficiency:</b> By
                incorporating sustainable materials and technologies, we reduce
                energy consumption and operational costs.
                <br />
                <b style={{ color: "#071E53" }}>• Community Integration:</b> Our
                designs foster social cohesion, usability, and resilience,
                making them functional and adaptable for diverse needs.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
