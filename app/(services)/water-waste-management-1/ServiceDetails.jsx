"use client";

import { allFeatures } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function ServiceDetails({ serviceId }) {
  const serviceItem =
    allFeatures.filter((elm) => elm.id == serviceId)[0] || allFeatures[1];

  useEffect(() => {
    const setEqualHeight = () => {
      const featureCards = document.querySelectorAll(".feature-card");
      let maxHeight = 0;

      featureCards.forEach((card) => {
        card.style.height = "auto"; // Reset height to auto for recalculation
        const cardHeight = card.offsetHeight;
        if (cardHeight > maxHeight) {
          maxHeight = cardHeight;
        }
      });

      featureCards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
      });
    };

    setEqualHeight();
    window.addEventListener("resize", setEqualHeight);

    return () => {
      window.removeEventListener("resize", setEqualHeight);
    };
  }, []);

  return (
    <div className="service-details-page-area space">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* <div className="col-xl-12">
            <div className="service-inner-thumb mb-80 wow img-custom-anim-top animated">
              <Image
                width={1296}
                height={700}
                className="w-100"
                src="/assets/img/service/wwm-1.jpg"
                alt="Water and Waste Management"
              />
            </div>
          </div> */}
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <h2 className="sec-title">Water & Waste Management</h2>
              <p className="sec-text mt-30"style={{color:"#071E53"}}>
                At Capital Engineering Consultancy, we offer sustainable and
                innovative Water & Waste Management solutions tailored to meet
                the growing demands of urbanization and industrial development.
                With a focus on environmental stewardship, we design systems
                that optimize water usage, manage waste responsibly, and comply
                with stringent regulatory standards.
              </p>
            </div>
            <h4>Our Approach:</h4>
            <p className="sec-text mb-n1">
              We believe in designing systems that are not only efficient and
              cost-effective but also environmentally responsible. Our team
              leverages cutting-edge technologies and best practices in water
              and waste management to create solutions that minimize
              environmental impact while maximizing resource efficiency.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="video-area-1 mt-80 mb-80">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  style={{
                    backgroundImage: "url(/assets/img/service/wwm-2.jpg)",
                    overflow: "hidden",
                  }}
                ></div>
                <a
                  href="https://www.youtube.com/watch?v=vvNwlRLjLkU"
                  className="play-btn popup-video background-image"
                ></a>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <h4>Key Services We Offer:</h4>
            <p className="sec-text mt-n1 mb-40">
              Our comprehensive Water & Waste Management services include:
            </p>
            <ol>
              <li className="sec-text mb-12 mt-12">
                Water Treatment Solutions: Clean, safe, and efficient water
                supply systems for residential and industrial use.
              </li>
              <li className="sec-text mb-12 mt-12">
                Wastewater Treatment & Recycling: End-to-end solutions that
                reduce environmental footprints and promote sustainability.
              </li>
              <li className="sec-text mb-12 mt-12">
                Stormwater Management: Systems that mitigate flooding and
                pollution risks, ensuring proper drainage and conservation.
              </li>
              <li className="sec-text mb-12 mt-12">
                Solid Waste Management: Strategies for collection, segregation,
                recycling, and disposal of solid waste.
              </li>
              <li className="sec-text mb-12 mt-12">
                Industrial Waste Management: Tailored solutions for industries
                to manage hazardous and non-hazardous waste safely.
              </li>
              <li className="sec-text mb-12 mt-12">
                Sustainability & Green Infrastructure: Practices like rainwater
                harvesting and eco-friendly waste treatment processes.
              </li>
            </ol>
            <p className="sec-text mb-40 mt-30">
              At Capital Engineering Consultancy, we are committed to providing
              water and waste management solutions that contribute to a
              sustainable future by reducing waste, conserving water, and
              promoting a circular economy.
            </p>
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <Image
                      width={40}
                      height={40}
                      src="/assets/img/icon/feature-icon1-3.svg"
                      alt="icon"
                    />
                  </div>
                  <h4 className="feature-card-title">
                    <Link scroll={false} href="/project">
                      Innovative Solutions
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    Cutting-edge design and technology for resource-efficient
                    water and waste systems.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <Image
                      width={40}
                      height={40}
                      src="/assets/img/icon/feature-icon1-6.svg"
                      alt="icon"
                    />
                  </div>
                  <h4 className="feature-card-title">
                    <Link scroll={false} href="/project">
                      Sustainable Results
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    Our focus on sustainability ensures long-lasting positive
                    environmental impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
