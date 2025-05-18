"use client";

import { allFeatures } from "@/data/features";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDetails({ serviceId }) {
  const serviceItem =
    allFeatures.filter((elm) => elm.id == serviceId)[0] || allFeatures[1];
  return (
    <section>
      <div
        className="breadcumb-wrapper "
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/high-angle-view-coffee-cup-table_1048944-234072.jpg?w=1380)",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Product manager</h1>
          </div>
        </div>
      </div>
      <div className="service-details-page-area pt-100 pb-5">
        <div className="container">
          <div className="row align-items-start justify-content-center">
          <div className="col-xl-8 text-justify">
  <div className="title-area mb-35">
    <h2 className="sec-title">About Capital Engineering Consultancy</h2>
    <p className="sec-text mt-30">
      Capital Engineering Consultancy is a highly respected firm operating since 2006, with offices across the UAE, Oman, India, KSA, and the UK. Specializing in Engineering Consultancy, Residential & Commercial Design, Industrial Developments, Infrastructure, Oil & Gas, Environmental Solutions, and BIM services, we take pride in our bold and innovative approach. Our commitment to excellence has earned us a prestigious clientele, including the Sharjah Ruler's Office, real estate developers, corporations, contractors, and individuals. From schools and villas to industrial plants and large-scale projects, our designs are known for their uniqueness, precision, and responsiveness to client needs.
    </p>
  </div>

  <h3>Job Description</h3>
  <p className="sec-text mb-n1">
    We are seeking a <strong>Product Manager</strong> - Construction Technology & BIM Solutions to drive innovation in our engineering and construction consulting services. The role involves managing BIM software, digital construction tools, and infrastructure planning solutions to optimize project execution. The Product Manager will work closely with engineers, architects, project managers, and technology teams to enhance the efficiency and sustainability of construction projects.
  </p>

  <h3 className="pt-3">Qualifications</h3>
  <p className="sec-text mb-n1">
    - Bachelor's or Master’s degree in Civil Engineering, Architecture, Construction Management, or a related field. <br />
    - 3+ years of experience in product management within construction, engineering, or infrastructure sectors. <br />
    - Strong knowledge of BIM (Building Information Modeling), AutoCAD, Revit, and digital construction technologies. <br />
    - Understanding of project lifecycle management, sustainable design, and smart infrastructure solutions. <br />
    - Experience working with cross-functional teams including engineering, design, and technology stakeholders. <br />
    - Strong leadership, problem-solving, and communication skills.
  </p>

  <h3 className="pt-3">Additional Information</h3>
  <p className="sec-text mb-n1">
    - Experience with AI-driven construction planning, digital twins, and smart cities solutions is a plus. <br />
    - Familiarity with environmental impact assessments and regulatory compliance in construction projects. <br />
    - Knowledge of Lean Construction, Agile methodologies, and cost optimization strategies. <br />
    - Willingness to travel for site visits, stakeholder meetings, and industry conferences.
  </p>

  <h3 className="pt-3">Our Benefits</h3>
  <p className="sec-text mb-n1">
    - Competitive salary based on experience. <br />
    - Performance-based bonuses and project incentives. <br />
    - Health and wellness programs, including medical insurance. <br />
    - Flexible work arrangements (remote or hybrid options). <br />
    - Professional development with access to industry certifications and training. <br />
    - Opportunities to work on high-profile construction and infrastructure projects.
  </p>
</div>





            {/* job details column */}
            <div className="col-xl-3 col-lg-4">
              <div className="project-details-info mb-lg-0 mb-40">
                <ul className="list-wrap">
                  <li>
                    <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                      Job Role:
                    </span>{" "}
                    Project Manager
                  </li>
                  <li>
                    <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                      Education:
                    </span>{" "}
                    MBA
                  </li>
                  <li>
                    <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                      Salary:
                    </span>{" "}
                    Not Disclose
                  </li>
                  <li>
                    <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                      Job Location:
                    </span>{" "}
                    Dubai
                  </li>
                  <li>
                    <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                      Employment Type:
                    </span>{" "}
                    Full-time
                  </li>
                  <li>
                    <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                      Batch:
                    </span>{" "}
                    2024/2025
                  </li>
                </ul>
              </div>
            </div>

            <style jsx>{`
              .project-details-info {
                padding: 15px;
                background: linear-gradient(145deg, #f9f9f9, #e0e0e0);
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                width: 100%;
                max-width: 100%;
                position: sticky;
                top: 20px; /* Adjust this value based on your header height */
              }
              .list-wrap {
                list-style: none;
                padding: 0;
                margin: 0;
              }
              .list-wrap li {
                font-size: 16px;
                color: #333;
                margin-bottom: 0.8rem;
                line-height: 1.5;
              }
              .list-wrap li span {
                font-size: 18px;
                font-weight: bold;
                color: #071e53;
                display: inline-block;
                margin-right: 0.5rem;
              }

              @media (max-width: 1199.98px) {
                .project-details-info {
                  position: static;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
}
