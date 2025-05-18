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
                src="/assets/img/service/fai-1.jpg"
                alt="img"
              />
            </div>
          </div> */}
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <h2 className="sec-title"style={{color:"#071E53"}}>Fit Out & Interior Design</h2>
              <p className="sec-text mt-30">
                At Capital Engineering Consultancy LLC, UAE, we specialize in transforming spaces into functional, elegant, and sustainable environments. Our Interior Design Team is renowned for delivering top-tier design solutions for commercial, residential, and hospitality projects. With over a decade of experience, we have successfully completed projects that meet both client expectations and regulatory approvals, reflecting the high standards of the UAE.
              </p>
              <p className="sec-text mt-30">
                Our designs are more than just visual appeal; they are an embodiment of innovation, sustainability, and client-centric customization. We integrate the latest design technologies and trends, ensuring each space is visually captivating, practical, and eco-conscious. Our dedication to premium materials and finishes ensures that your space not only looks stunning but also stands the test of time.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="video-area-1 mt-80 mb-80">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  style={{
                    backgroundImage: "url(/assets/img/service/fai-2.jpg)",
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
            <h4>Our Comprehensive Fit Out & Interior Design Services Include:</h4>
            <ol>
              <li className="sec-text mb-12 mt-12">Concept Design – Developing initial sketches and mood boards that set the design direction.</li>
              <li className="sec-text mb-12 mt-12">Detail Design – Providing 3D renderings and detailed drawings.</li>
              <li className="sec-text mb-12 mt-12">Material & Finish Selections – Reviewing materials and finishes for durability and aesthetics.</li>
              <li className="sec-text mb-12 mt-12">Value Engineering – Ensuring designs are cost-effective without compromising quality.</li>
              <li className="sec-text mb-12 mt-12">MEP Integration – Seamless coordination with mechanical, electrical, and plumbing systems.</li>
              <li className="sec-text mb-12 mt-12">Tender Preparation – Preparing documents for smooth project execution.</li>
              <li className="sec-text mb-12 mt-12">Construction Supervision – Overseeing construction to ensure adherence to design and quality standards.</li>
            </ol>
            <p className="sec-text mb-40 mt-30">
              Our team takes pride in tailoring our approach to meet the unique demands of each project, ensuring that all client requirements are met efficiently. We work closely with our clients to understand their vision, from concept to completion.
            </p>
            <p className="sec-text mb-30">
              At Capital Engineering Consultancy LLC, we are committed to achieving the highest standards in design and execution, backed by a thorough understanding of UAE’s building regulations and authority approvals. Our expert supervision guarantees that each project is executed to perfection.
            </p>
            <div className="row gy-4 d-flex">
              <div className="col-md-6 d-flex">
                <div className="feature-card flex-grow-1">
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
                      Advanced Design Solutions
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    Incorporating the latest innovations to create outstanding results.
                  </p>
                </div>
              </div>
              <div className="col-md-6 d-flex">
                <div className="feature-card flex-grow-1">
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
                      On-time Delivery
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    Ensuring projects are completed on schedule, without compromising quality.
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
