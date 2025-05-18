"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/water/bg.png"; 
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
          <h1 className="heading wow img-custom-anim-top animated"> Water & Waste Management
          </h1>
          <p className="subtext wow img-custom-anim-top animated">
          Providing sustainable, efficient, and innovative water and waste management solutions for a greener future.
            </p>
        </div>
      </div>

      <div className="description wow img-custom-anim-left animated">
        <p className="description-color">
        We design cutting-edge systems that optimize water use, minimize waste, and ensure environmental compliance.
  </p>
      </div>

     
    </>
  );
}