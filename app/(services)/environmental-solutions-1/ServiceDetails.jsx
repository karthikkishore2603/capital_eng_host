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
                src="/assets/img/service/es-1.jpg"
                alt="Environmental Solutions Image"
              />
            </div>
          </div> */}
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <h2 className="sec-title"style={{color:"#071E53"}}>Environmental Solutions</h2>
              <p className="sec-text mt-30">
                Capital Engineering Consultancy is a leading environmental consulting firm in the UAE,
                specializing in comprehensive environmental solutions. With a strong presence in the Middle East,
                we provide innovative and sustainable environmental management services that support the region’s
                development while ensuring regulatory compliance and environmental stewardship.
              </p>
              <p className="sec-text mt-30">
                As an EAD-registered Class ‘A’ Environmental Consultant in Abu Dhabi, we work with both public and private
                sectors, offering tailored solutions that address the environmental challenges of today and anticipate the needs of tomorrow.
              </p>
            </div>
            <h4>Our Services Include:</h4>
            <ol>
              <li className="sec-text mb-12 mt-12">Environmental and Social Impact Assessments (ESIA)</li>
              <li className="sec-text mb-12 mt-12">Environmental Management Plans (EMP)</li>
              <li className="sec-text mb-12 mt-12">Environmental Monitoring and Auditing</li>
              <li className="sec-text mb-12 mt-12">Waste Management and Consultancy</li>
              <li className="sec-text mb-12 mt-12">Risk and Hazard Assessments</li>
              <li className="sec-text mb-12 mt-12">Training and Environmental Education</li>
              <li className="sec-text mb-12 mt-12">Environmental Due Diligence Consultancy</li>
            </ol>
            <p className="sec-text mb-40 mt-30">
              Capital Engineering Consultancy is committed to delivering results that enhance sustainability while meeting the region's ambitious development goals. 
              Our environmental, health, and safety advisory services help our clients navigate the complexities of regulatory landscapes and adopt best practices for a greener future.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="video-area-1 mt-80 mb-80">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  style={{
                    backgroundImage: "url(/assets/img/service/es-2.jpg)",
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
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <Image
                      width={40}
                      height={40}
                      src="/assets/img/icon/feature-icon1-3.svg"
                      alt="Advanced Design Icon"
                    />
                  </div>
                  <h4 className="feature-card-title">
                    <Link scroll={false} href="/project">
                      Innovative Solutions
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    We offer advanced, tailored environmental solutions for sustainable outcomes.
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
                      alt="Timely Results Icon"
                    />
                  </div>
                  <h4 className="feature-card-title">
                    <Link scroll={false} href="/project">
                      Timely Delivery
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    We ensure efficient project execution with a commitment to timely results.
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
