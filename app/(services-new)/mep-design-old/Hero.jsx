"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/mep/bg.png"; 
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
          <h1 className="heading wow img-custom-anim-top animated">MEP Design and Services</h1>
          <p className="subtext wow img-custom-anim-top animated">
          Delivering excellence in MEP design with precision, efficiency, and innovation.
          </p>
        </div>
      </div>

      <div className="description wow img-custom-anim-left animated">
        <p className="description-color">
        We provide cutting-edge mechanical, electrical, and plumbing solutions that optimize performance and sustainability.
        </p>
      </div>

      
    </>
  );
}