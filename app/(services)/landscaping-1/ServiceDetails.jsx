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
                src="/assets/img/service/ls-1.jpg"
                alt="img"
              />
            </div>
          </div> */}
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <h2 className="sec-title"style={{color:"#071E53"}}>Landscaping</h2>
              <p className="sec-text mt-30">
                At Capital Engineering Consultancy LLC in the UAE, we understand the profound impact that a well-executed landscape design can have on the environment and the built world. Our team of skilled landscape architects combine technical proficiency with creative vision to design outdoor spaces that are both sustainable and aesthetically pleasing.
              </p>
            </div>
            <h4>Our Philosophy:</h4>
            <p className="sec-text mb-35">
              We prioritize creating landscapes that not only enhance the natural beauty of the surroundings but also improve the ecological balance. Each design considers the unique needs of the environment, promoting sustainable practices such as water-efficient irrigation systems and native planting strategies.
            </p>
            <h4>Holistic Landscape Solutions:</h4>
            <p className="sec-text mb-n1">
              Our services range from detailed site analysis and conceptual design to the execution of both softscape and hardscape elements. Whether it’s an expansive public park or an intimate residential garden, we ensure that every project harmonizes with its surroundings, creating lasting value for clients and the community.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="video-area-1 mt-80 mb-80">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  style={{
                    backgroundImage: "url(/assets/img/service/ls-2.jpg)",
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
            <h4>Innovation & Sustainability:</h4>
            <p className="sec-text mt-30 mb-40">
              By integrating the latest in landscape architecture technology and sustainable materials, we deliver outdoor spaces that are not only functional but also environmentally responsible. Our approach ensures that projects are resilient to the demands of the UAE climate, while also enhancing the well-being of those who inhabit the spaces.
            </p>
            <h4>Comprehensive Landscape Services Include:</h4>
            <ol>
              <li className="sec-text mb-12 mt-12">Site Analysis & Planning</li>
              <li className="sec-text mb-12 mt-12">Sustainable Landscape Design</li>
              <li className="sec-text mb-12 mt-12">Irrigation System Design</li>
              <li className="sec-text mb-12 mt-12">Hardscape & Softscape Integration</li>
              <li className="sec-text mb-12 mt-12">Plant Selection & Installation</li>
              <li className="sec-text mb-12 mt-12">Maintenance & Aftercare Consultation</li>
            </ol>
            <p className="sec-text mb-40 mt-30">
              Capital Engineering Consultancy LLC is dedicated to creating innovative and sustainable landscapes that enrich the environment and contribute to a greener, more beautiful UAE. Contact us to transform your vision into reality.
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
                      Advanced Design
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    Leveraging cutting-edge design for efficient and innovative results.
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
                    Delivering projects on time with a focus on client satisfaction.
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
