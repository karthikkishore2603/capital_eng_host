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
                src="/assets/img/service/pm-1.jpg"
                alt="img"
              />
            </div>
          </div> */}
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <h2 className="sec-title"style={{color:"#071E53"}}>Project Management Consultancy</h2>
              <p className="sec-text mt-30">
              At Capital Engineering Consultancy, we are more than just project managers; 
              we are your partners in success, committed to delivering integrated and multidisciplinary 
              services that encompass every facet of the construction project life cycle. From initial 
              feasibility studies and conceptualization to the final stages of testing and commissioning, 
              we offer a comprehensive range of services designed to ensure the success of your project.
              </p>
              <p className="sec-text mt-30">
              Our team of experts brings extensive experience in all phases of construction, including design, 
              tendering, procurement, construction management, and contract management. We believe 
              in the power of collaboration, working closely with our clients to understand their unique 
              needs and objectives, and delivering tailor-made solutions that exceed expectations.
              </p>
              <p className="sec-text mt-30">
              With a focus on exceptional value delivery, we have a proven track record of completing projects 
              on time, within budget, and to the highest quality standards. Our multidisciplinary team is dedicated 
              to providing the highest level of service, leveraging the latest technologies and best practices to 
              achieve optimal project outcomes.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="video-area-1 mt-80 mb-80">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  style={{
                    backgroundImage: "url(/assets/img/service/pm-2.jpg)",
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
            <h4>OUR SERVICES INCLUDE:</h4>
            <ul>
            <li className="sec-text mb-12 mt-12">Value Engineering</li>
            <li className="sec-text mb-12 mt-12">Supervision</li>
            <li className="sec-text mb-12 mt-12">Contract Management</li>
            <li className="sec-text mb-12 mt-12">Design Management and Review</li>
            <li className="sec-text mb-12 mt-12">Planning</li>
            <li className="sec-text mb-12 mt-12">Project Cost Control</li>
            <li className="sec-text mb-12 mt-12">Deputations of Engineers</li>
            <li className="sec-text mb-12 mt-12">Quality Management and Assurance</li>
            <li className="sec-text mb-12 mt-12">Risk Management</li>
            <li className="sec-text mb-12 mt-12">Scheduling</li>
            <li className="sec-text mb-12 mt-12">Procurement</li>
            <li className="sec-text mb-12 mt-12">Construction Management</li>
            <li className="sec-text mb-12 mt-12">Claims Management and Dispute Resolution</li>
            <li className="sec-text mb-12 mt-12">Contractual FIDIC Advice</li>
           </ul>
            <p className="sec-text mb-40 mt-30">
            At Capital Engineering Consultancy, we go beyond project management; we deliver excellence, integrity, 
            and innovation to every project we undertake. Let us be your trusted partner on your journey to success in the construction industry.
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
                  Leverage cutting-edge design ensuring robust project outcomes
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
                      In-time Result
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    We care success relationships fuel success we love building
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
