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
                src="/assets/img/service/cm-1.jpg"
                alt="Construction Management"
              />
            </div>
          </div> */}
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <h2 className="sec-title"style={{color:"#071E53"}}>Construction Management</h2>
              <p className="sec-text mt-30">
                At Capital Engineering Consultancy, our Construction Management services ensure projects are completed on time, within budget, and with the highest level of quality. Our technical expertise, meticulous planning, and efficient execution guarantee a smooth construction journey from inception to completion.
              </p>
            </div>
            <h4>Our Approach:</h4>
            <p className="sec-text mb-n1">
              We provide end-to-end construction management solutions that optimize project delivery while minimizing risks. From pre-construction planning to post-construction inspections, we manage your project with precision at every stage.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="video-area-1 mt-80 mb-80">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  style={{
                    backgroundImage: "url(/assets/img/service/cm-2.jpg)",
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
            <ul className="sec-text mt-30">
              <li className="mb-12 mt-12">Pre-construction Planning: Comprehensive project schedules, cost estimates, and construction plans to start your project on the right foot.</li>
              <li className="mb-12 mt-12">Contractor Management: Overseeing the bidding, selection, and coordination of contractors and suppliers to guarantee top quality work.</li>
              <li className="mb-12 mt-12">Quality Assurance & Control: Rigorous quality checks to ensure adherence to the highest standards and project specifications.</li>
              <li className="mb-12 mt-12">Schedule & Budget Management: Monitoring timelines and budgets to ensure your project stays on track.</li>
              <li className="mb-12 mt-12">Health, Safety & Environmental (HSE) Compliance: Ensuring all work meets local regulations and global best practices.</li>
              <li className="mb-12 mt-12">On-site Supervision: Experienced managers ensure real-time problem-solving and clear communication across all stakeholders.</li>
              <li className="mb-12 mt-12">Risk Mitigation & Management: Identifying and addressing potential risks early to prevent costly delays.</li>
              <li className="mb-12 mt-12">Post-construction Services: Comprehensive inspections and a smooth handover process to guarantee the project's success.</li>
            </ul>
            <p className="sec-text mb-40 mt-30">
              Choose Capital Engineering Consultancy for industry-leading project management that safeguards your investment and delivers results that exceed expectations.
            </p>
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <Image
                      width={40}
                      height={40}
                      src="/assets/img/icon/feature-icon1-3.svg"
                      alt="Advanced Design"
                    />
                  </div>
                  <h4 className="feature-card-title">
                    <Link scroll={false} href="/project">
                      Advanced Planning
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    Cutting-edge planning and design ensuring robust project outcomes.
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
                      alt="Timely Delivery"
                    />
                  </div>
                  <h4 className="feature-card-title">
                    <Link scroll={false} href="/project">
                      Timely Delivery
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    We ensure timely project completion without compromising quality.
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
