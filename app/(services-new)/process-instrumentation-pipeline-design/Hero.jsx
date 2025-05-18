"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/pipline/bg.PNG"; 
import "@/public/assets/servicenew/heroStyle.css";
export default function RefinedLiving() {
  return (
    <>
      <div className="container-sn ">
        {/* Background Image */}
        <div className="image-container wow img-custom-anim-top animated">
          <Image
            src={backgroundImage}
            alt="City Skyline"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Card Positioned at the Bottom */}
        <div className="card">
          <h1 className="heading wow img-custom-anim-top animated">Process Instrumentation & Pipeline Design
          </h1>
          <p className="subtext wow img-custom-anim-top animated">
          Delivering precision, efficiency, and reliability in process instrumentation and pipeline design.
          </p>
        </div>
      </div>

      <div className="description wow img-custom-anim-left animated">
        <p className="description-color">
        We create optimized, safe, and cost-effective pipeline systems tailored to industry needs.
        </p>
      </div>

    
    </>
  );
}