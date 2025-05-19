"use client";
import Image from "next/image";
import Head from "next/head";
import industrial from "@/public/assets/images/industrial.jpeg";

export default function SectorDetails() {
  // Schema Markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Industrial & Logistics - Capital Engineering Consultancy",
    description:
      "Discover our expertise in designing industrial and logistics facilities at Capital Engineering Consultancy, creating smart, efficient, and sustainable spaces for warehousing and manufacturing.",
    url: "https://www.capitalengg.com/industrial-and-logistics",
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
        <title>Industrial & Logistics | Capital Engineering Consultancy</title>
        <meta
          name="description"
          content="Explore our industrial and logistics solutions at Capital Engineering Consultancy, designing smart warehouses, automated facilities, and sustainable manufacturing units."
        />
        <meta
          name="keywords"
          content="industrial design, logistics facilities, smart warehousing, Capital Engineering Consultancy, sustainable manufacturing, automation"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://www.capitalengg.com/industrial-and-logistics"
        />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Industrial & Logistics | Capital Engineering Consultancy"
        />
        <meta
          property="og:description"
          content="Explore our industrial and logistics solutions at Capital Engineering Consultancy, designing smart warehouses, automated facilities, and sustainable manufacturing units."
        />
        <meta
          property="og:url"
          content="https://www.capitalengg.com/industrial-and-logistics"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={industrial.src} />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Industrial & Logistics | Capital Engineering Consultancy"
        />
        <meta
          name="twitter:description"
          content="Explore our industrial and logistics solutions at Capital Engineering Consultancy, designing smart warehouses, automated facilities, and sustainable manufacturing units."
        />
        <meta name="twitter:image" content={industrial.src} />
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <section
        className="project-details-page-area space"
        aria-labelledby="industrial-logistics-title"
      >
        <div className="container">
          <div className="col-xl-12">
            <div className="project-inner-thumb mb-80 wow img-custom-anim-top animated">
              <Image
                width={1296}
                height={700}
                className="w-100"
                src={industrial}
                alt="Industrial and logistics facility by Capital Engineering Consultancy"
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
                  id="industrial-logistics-title"
                  style={{ color: "#071E53" }}
                >
                  Industrial & Logistics
                </h1>
                <p className="sec-text mt-30" style={{ textAlign: "justify" }}>
                  At <strong>Capital Engineering Consultancy</strong>, we design
                  industrial and logistics spaces that are robust, efficient,
                  and future-ready. By collaborating closely with businesses
                  across the UAE, we deliver high-performance facilities that
                  streamline production, optimize supply chains, and integrate
                  cutting-edge technology. Whether you require a smart warehouse
                  or a specialized manufacturing unit, we help turn your
                  operational goals into reality.
                </p>
              </div>
              <h2 style={{ color: "#071E53", marginBottom: "20px" }}>
                Innovative Solutions for Industrial & Logistics Excellence
              </h2>
              <p className="sec-text mb-n1" style={{ textAlign: "justify" }}>
                Industrial and logistics projects demand precision,
                adaptability, and sustainability. Our specialized solutions
                include:
                <br />
                <b style={{ color: "#071E53" }}>
                  • Smart Warehousing & Automation:
                </b>{" "}
                Integrating IoT, AI, and robotics to enhance inventory tracking,
                reduce handling time, and improve operational efficiency.
                <br />
                <b style={{ color: "#071E53" }}>• Process Optimization:</b>{" "}
                Designing efficient layouts that streamline workflows, minimize
                downtime, and maximize productivity.
                <br />
                <b style={{ color: "#071E53" }}>
                  • Energy-Efficient Systems:
                </b>{" "}
                Implementing sustainable lighting, ventilation, and renewable
                energy solutions to reduce operational costs and environmental
                impact.
                <br />
                <b style={{ color: "#071E53" }}>
                  • Strategic Logistics Planning:
                </b>{" "}
                Ensuring optimal warehouse placement for seamless
                transportation, reduced transit time, and improved supply chain
                management.
                <br />
                <b style={{ color: "#071E53" }}>
                  • Smart Factory Innovations:
                </b>{" "}
                Leveraging digital transformation, AI-driven monitoring, and big
                data analytics to enhance automation and drive industrial
                growth.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
