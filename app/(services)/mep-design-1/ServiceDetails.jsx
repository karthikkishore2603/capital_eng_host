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
                src="/assets/img/service/mep-1.jpg"
                alt="img"
              />
            </div>
          </div> */}
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <h2 className="sec-title"style={{color:"#071E53"}}>MEP Design and Services </h2>
              <p className="sec-text mt-30">
                Capital Engineering Consultancy LLC is a distinguished leader in the UAE’s multi-disciplinary engineering sector, offering a comprehensive suite of MEP Design and Services . Our expertise includes HVAC, electrical, plumbing, fire protection, and security and information technology systems. With an illustrious history of delivering exceptional outcomes, we are dedicated to providing unparalleled service excellence to our esteemed clients.
              </p>
              <p className="sec-text mt-30">
                Our MEP Design and Services  encompass a broad spectrum of solutions, ranging from meticulous analysis and conceptualization to precise construction budgeting, detailed services documentation, and comprehensive construction administration. Collaborating closely with our clients, we craft bespoke solutions tailored to their specific needs, consistently striving to exceed expectations at every phase of the project lifecycle.
              </p>
              <p className="sec-text mt-30">
                Recognizing the importance of innovation and efficiency in MEP design, we specialize in creating sustainable and environmentally conscious solutions. Our team of seasoned professionals is equipped with state-of-the-art tools and technologies, enabling us to deliver cutting-edge solutions that yield remarkable results.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="video-area-1 mt-80 mb-80">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  style={{
                    backgroundImage: "url(/assets/img/service/mep-2.jpg)",
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
            <p className="sec-text mb-30">
              What sets us apart is our unwavering commitment to quality, meticulous attention to detail, and dedication to delivering exceptional customer service. Whether you seek a comprehensive MEP Design and Services partner or require specialized support, we possess the expertise and experience to fulfill your requirements with excellence.
            </p>
            <h4>Areas of Expertise in MEP:</h4>
            <ol>
              <li className="sec-text mb-12 mt-12">Mechanical Engineering</li>
              <li className="sec-text mb-12 mt-12">Electrical and Low Current Engineering</li>
              <li className="sec-text mb-12 mt-12">HVAC Engineering</li>
              <li className="sec-text mb-12 mt-12">BIM (Building Information Modeling)</li>
              <li className="sec-text mb-12 mt-12">Infrastructure Design</li>
              <li className="sec-text mb-12 mt-12">Energy Modeling</li>
              <li className="sec-text mb-12 mt-12">Sustainable Design Analysis</li>
              <li className="sec-text mb-12 mt-12">DM Green Building and Estidama Compliant Design</li>
              <li className="sec-text mb-12 mt-12">Value Engineering</li>
              <li className="sec-text mb-12 mt-12">Building Retrofit Design</li>
              <li className="sec-text mb-12 mt-12">Quantity Surveying</li>
            </ol>
            <p className="sec-text mb-40 mt-30">
              Choose Capital Engineering Consultancy LLC as your trusted partner for all your MEP Design and Services needs, and elevate your projects to new heights of engineering excellence.
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
                    Leverage cutting-edge design ensuring robust project outcomes.
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
                      Timely Results
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    We prioritize successful relationships that fuel project success.
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
