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
                src="/assets/img/service/aad-1.jpg"
                alt="img"
              />
            </div>
          </div> */}
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <h2 className="sec-title"style={{color:"#071E53"}}>Architecture & Design</h2>
              <p className="sec-text mt-30">
                Welcome to Capital Engineering Consultancy, your trusted partner in the UAE for innovative, 
                sustainable, and enduring architectural solutions. With a legacy built over years of 
                excellence, we provide a wide range of services that span the entire project lifecycle, 
                from concept to execution.
              </p>
            </div>
            <h4>Our Vision:</h4>
            <p className="sec-text mb-n1">
              At Capital Engineering Consultancy, we aim to transform the architectural landscape of the UAE by blending 
              cutting-edge technology with timeless design principles. We pride ourselves on delivering value-driven 
              solutions that meet and exceed the expectations of our clients.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="video-area-1 mt-80 mb-80">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  style={{
                    backgroundImage: "url(/assets/img/service/aad-2.jpg)",
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
            <h4>Designing with Purpose:</h4>
            <p className="sec-text mt-n1 mb-40">
              Our approach to architecture focuses on creating spaces that are not only aesthetically pleasing but also 
              functional and sustainable. We design environments that seamlessly integrate with the surrounding landscape, 
              reflecting the UAE’s unique blend of tradition and modernity.
            </p>
            <h4>Comprehensive Services:</h4>
            <p className="sec-text mt-30">
              Our range of services covers all aspects of architecture and design, ensuring a seamless project delivery 
              experience. We offer expertise in:
            </p>
            <ol>
              <li className="sec-text mb-12 mt-12">Conceptual Design Development</li>
              <li className="sec-text mb-12 mt-12">Detail Design and Planning</li>
              <li className="sec-text mb-12 mt-12">Schematic Design</li>
              <li className="sec-text mb-12 mt-12">Construction Document Preparation</li>
              <li className="sec-text mb-12 mt-12">Feasibility Studies and Reports</li>
              <li className="sec-text mb-12 mt-12">Bidding and Contract Negotiation</li>
              <li className="sec-text mb-12 mt-12">Construction and Project Management</li>
              <li className="sec-text mb-12 mt-12">Architect of Record Services</li>
              <li className="sec-text mb-12 mt-12">Site Supervision and Coordination</li>
            </ol>
            <p className="sec-text mb-40 mt-30">
              Discover how Capital Engineering Consultancy can help bring your vision to life, creating structures 
              that stand as icons of innovation and sustainability. Connect with us to start your architectural journey today.
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
                      Sustainable Design
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    Our designs embrace sustainability, reducing environmental impact.
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
                      Timely Delivery
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    We guarantee projects that meet your timeline and exceed your expectations.
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
