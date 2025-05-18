"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/landscape/bg.jpg"; 
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
          <h1 className="heading wow img-custom-anim-top animated">Landscaping</h1>
          <p className="subtext wow img-custom-anim-top animated">
          Designing landscapes that are sustainable, functional, and visually captivating.
          </p>
        </div>
      </div>

      <div className="description wow img-custom-anim-left animated">
        <p className="description-color">
        We craft outdoor spaces that seamlessly blend aesthetics, ecology, and innovation to create lasting value.
        </p>
      </div>

    </>
  );
}