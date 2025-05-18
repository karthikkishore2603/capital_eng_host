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
                src="/assets/img/service/pip-1.png"
                alt="Pipeline Design"
              />
            </div>
          </div> */}
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <h2 className="sec-title"style={{color:"#071E53"}}>
                Process Instrumentation & Pipeline Design
              </h2>
              <p className="sec-text mt-30">
                At Capital Engineering Consultancy, we specialize in offering
                cutting-edge Process Instrumentation & Pipeline Design solutions
                that deliver precision, efficiency, and reliability. With our
                deep expertise and innovative approach, we help industries
                seamlessly optimize their process control and pipeline
                infrastructure, ensuring smooth and cost-effective operations.
                Whether it’s for energy, petrochemical, or manufacturing
                industries, our comprehensive services cater to a wide range of
                complex requirements.
              </p>
            </div>
            <h4>Our Approach:</h4>
            <p className="sec-text mb-n1">
              We understand that effective process instrumentation and pipeline
              systems are vital to the success of any industrial operation.
              That’s why we prioritize customized solutions that align with your
              unique operational goals and compliance standards. Our designs not
              only enhance the functionality and safety of your infrastructure
              but also ensure scalability and long-term operational efficiency.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="video-area-1 mt-80 mb-80">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  style={{
                    backgroundImage: "url(/assets/img/service/pip-2.jpg)",
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
            <h4>Services We Offer:</h4>
            <ul>
              <li className="sec-text mb-12 mt-12">
                <strong> Process Flow Design: </strong>We develop detailed 
                Process Flow Diagrams (PFDs) and Piping and Instrumentation 
                Diagrams (P&IDs) to establish an efficient, safe, and scalable 
                process structure.
              </li>
              <li className="sec-text mb-12 mt-12">
                <strong>Instrumentation Design:</strong> We create customized
                control systems that are fully integrated into your industrial
                processes, providing real-time data and control for precision
                management.
              </li>
              <li className="sec-text mb-12 mt-12">
                <strong>Pipeline Design & Layout:</strong> From the initial
                layout and design to implementation, we ensure your pipeline
                systems are optimized for safety, minimal downtime, and
                efficiency.
              </li>
              <li className="sec-text mb-12 mt-12">
                <strong>Compliance and Safety Design:</strong> We guarantee that
                our designs meet the highest industry standards and regulatory
                compliance for both instrumentation and pipeline systems.
              </li>
              <li className="sec-text mb-12 mt-12">
                <strong>Pressure Drop and Flow Analysis:</strong> Our experts
                conduct in-depth pressure and flow analyses to ensure optimal
                flow conditions, mitigating risks like pipeline corrosion or
                blockages.
              </li>
              <li className="sec-text mb-12 mt-12">
                <strong>Pipeline Material Selection:</strong> Selecting the
                correct materials is essential to the longevity of your pipeline
                system. We provide material recommendations based on operational
                requirements, environmental conditions, and regulatory
                standards.
              </li>
              <li className="sec-text mb-12 mt-12">
                <strong>Automation & Control Systems:</strong> We incorporate
                advanced automation technologies into your process systems for
                seamless control and monitoring, ensuring high levels of
                operational efficiency.
              </li>
            </ul>
            <p className="sec-text mb-40 mt-30">
              Experience the transformative power of Process Instrumentation &
              Pipeline Design with Capital Engineering Consultancy. Contact us
              today to explore how we can optimize your industrial processes and
              pipeline infrastructure for long-term success.
            </p>
            <div className="row gy-4" style={{ display: "flex", alignItems: "stretch" }}>
              <div className="col-md-6">
                <div className="feature-card" style={{ height: "100%" }}>
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
                      Customized Solutions
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    Tailored designs that meet your unique industrial
                    requirements.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-card" style={{ height: "100%" }}>
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
                      Efficiency and Reliability
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    Ensuring high efficiency and reliability in all process
                    systems.
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
