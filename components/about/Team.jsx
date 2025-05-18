import { teamData } from "@/data/team";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Team() {
  return (
    <div className="team-area-1 overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* CEO Message */}
            {/* <div className="title-area text-center">
              <h2 className="sec-title">Message from our CEO and Managing Director</h2>
              <p className="mt-4">
                Established in 2006 and headquartered in the UAE, Capital Engineering Consultancy has grown to become one of the leading multidisciplinary engineering consulting firms, expanding its presence to KSA, Oman, Egypt, India, Iraq, and the United Kingdom. 
                <br />
                <br />
                At Capital Engineering Consultancy, we aim for excellence in every aspect of our work. We embrace traditions and seamlessly incorporate them into our innovative approach. Each of our projects reflects a unique artistic vision coupled with practical and sustainable solutions.
                <br />
                <br />
                Our belief in commitment and perseverance has been the ultimate key to our success. From architecture and structural engineering to roads, infrastructure, and oil and gas, we provide a comprehensive suite of services tailored to the needs of public and private sectors. Our relentless pursuit of quality and innovation drives us to reshape the engineering landscape and deliver exceptional value to our clients worldwide.
                <br />
                <br />
                Join us as we continue to shape the future of engineering through creativity, precision, and a steadfast dedication to excellence.
              </p>
            </div> */}

            {/* Our Team Section */}
            {/* <div className="title-area text-center mt-5">
              <h2 className="sec-title">Our Team Behind the Vision</h2>
              <p className="mt-4">
                Behind the success of Capital Engineering Consultancy is a dedicated and talented team, committed to delivering innovative solutions and engineering excellence. Our team comprises highly skilled professionals with expertise spanning architecture, structural engineering, MEP services, BIM, roads, infrastructure, and more.
                <br />
                <br />
                By embracing challenges and fostering collaboration, we ensure that every project we undertake meets the highest standards of quality and sustainability. Our team members continuously enhance their skills through learning and development, staying at the forefront of technological advancements and industry practices.
                <br />
                <br />
                Together, we blend creativity and precision to provide exceptional engineering solutions that redefine possibilities and create lasting impact for our clients, stakeholders, and communities.
              </p>
            </div> */}
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row gy-4 justify-content-center">
          {teamData.slice(0, 4).map((elm, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="team-card">
                <div className="team-card_img">
                  <Image
                    width={306}
                    height={380}
                    src={elm.imageSrc}
                    alt="Team Image"
                  />
                </div>
                <div className="team-card_content">
                  <h3 className="team-card_title">
                    <Link scroll={false} href={`/team-details/${elm.id}`}>
                      {elm.name}
                    </Link>
                  </h3>
                  <span className="team-card_desig">{elm.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
