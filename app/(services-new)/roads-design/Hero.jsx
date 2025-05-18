"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/road/bg.jpg"; 
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
          <h1 className="heading wow img-custom-anim-top animated">Road & Infrastructure </h1>
          <p className="subtext wow img-custom-anim-top animated">
          Engineering roads and infrastructure with precision, durability, and innovation.
          </p>
        </div>
      </div>

      <div className="description wow img-custom-anim-left animated">
        <p className="description-color">
        We design efficient, sustainable, and high-quality infrastructure solutions that enhance urban connectivity.
        </p>
      </div>

     
    </>
  );
}