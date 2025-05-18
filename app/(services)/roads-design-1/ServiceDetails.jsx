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
                src="/assets/img/service/rd-1.jpg"
                alt="img"
              />
            </div>
          </div> */}
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <h2 className="sec-title"style={{color:"#071E53"}}>Road & Infrastructure</h2>
              <p className="sec-text mt-30">
                Capital Engineering Consultancy has established a remarkable reputation for delivering top-notch road and infrastructure projects in the UAE and uae. As a leading consultancy, we recognize the crucial role that roads and bridges play in a city's infrastructure, which is why we prioritize quality and excellence in every design we produce. 
              </p>
            </div>
            <h4>Our Commitment:</h4>
            <p className="sec-text mb-n1">
              With a highly skilled and experienced team, we offer comprehensive support throughout all project phases, from initial planning to detailed design, construction site supervision, and commissioning.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="video-area-1 mt-80 mb-80">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  style={{
                    backgroundImage: "url(/assets/img/service/rd-2.jpg)",
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
            <h4>Comprehensive Expertise:</h4>
            <p className="sec-text mt-n1 mb-40">
              Our extensive range of services is designed to cater to the diverse needs of our clients, and we go the extra mile to exceed their expectations.
            </p>
            <h4>Our Services Include:</h4>
            <p className="sec-text mt-30">
              We specialize in the following:
            </p>
            <ol>
              <li className="sec-text mb-12 mt-12">Road and pedestrian route design</li>
              <li className="sec-text mb-12 mt-12">Grading plans and earthwork calculations</li>
              <li className="sec-text mb-12 mt-12">Stormwater management and drainage systems</li>
              <li className="sec-text mb-12 mt-12">Chilled water distribution systems</li>
              <li className="sec-text mb-12 mt-12">Gravity and pressurized systems for wastewater collection</li>
              <li className="sec-text mb-12 mt-12">Power and telecommunications infrastructure design</li>
              <li className="sec-text mb-12 mt-12">Street lighting design</li>
            </ol>
            <p className="sec-text mb-40 mt-30">
              At Capital Engineering Consultancy, we pride ourselves on our ability to analyse and review projects at a high level, enabling us to deliver large-scale infrastructure projects that meet the demands of our clients.
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
                      Cutting-edge Design
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    Innovative design solutions ensuring robust project outcomes
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
                      On-time Delivery
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    Delivering projects within timeframes that exceed expectations
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
