"use client";

import { allFeatures } from "@/data/features";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDetails({ serviceId }) {
  const serviceItem =
    allFeatures.filter((elm) => elm.id == serviceId)[0] || allFeatures[1];
  
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
                src="/assets/img/service/bim-1.jpg" // Ensure this is the correct image path for UAE
                alt="BIM Services"
              />
            </div>
          </div> */}
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <h2 className="sec-title"style={{color:"#071E53"}}>BIM Services</h2>
              <p className="sec-text mt-30">
                Capital Engineering Consultancy LLC, UAE, is at the forefront of modern construction technology, offering advanced Building Information Modelling (BIM) services. Our BIM solutions enhance project efficiency, reduce risks, and ensure better collaboration throughout the design and construction process.
              </p>
              <p className="sec-text mt-30">
                With a proven track record across the UAE, we offer comprehensive BIM services for architecture, structure, MEP, and construction disciplines. By integrating all project stakeholders into a centralized model, our BIM services optimize every phase of your project, from initial design to completion.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="video-area-1 mt-80 mb-80">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  style={{
                    backgroundImage: "url(/assets/img/service/bim-2.jpg)", // Adjust this to the correct background image for UAE if necessary
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
            <p className="sec-text mt-30">
              Our BIM services in the UAE include:
            </p>
            <ul className="sec-text mb-40 mt-30">
              <li>BIM Modelling & Coordination</li>
              <li>Architectural Drafting</li>
              <li>MEP Design & Services</li>
              <li>Clash Detection & Resolution</li>
              <li>Quantity Take-Offs & Cost Estimation</li>
              <li>As-Built Drawings</li>
              <li>Structural BIM Modelling</li>
              <li>Façade Detailing</li>
              <li>Project Management Support</li>
              <li>Custom Family Creation</li>
            </ul>
            <p className="sec-text mb-40 mt-30">
              At Capital Engineering Consultancy LLC, we prioritize accuracy, innovation, and efficiency. Our team of skilled BIM engineers and consultants ensures that every project phase runs smoothly, providing clients with 3D models that minimize risks and prevent costly errors during construction. 
            </p>
            <p className="sec-text mb-40 mt-30">
              Whether you are working on a small residential project or a large commercial development in the UAE, we offer tailored BIM solutions that meet your unique requirements, streamline project timelines, and enhance collaboration between architects, engineers, and contractors.
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
                      Innovative Designs
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    Leveraging modern BIM technology for advanced project designs
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
                      On-Time Delivery
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    Ensuring timely project completion with optimized BIM processes
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
