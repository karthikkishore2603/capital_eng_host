import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/road/a1.jpg"; 
import "@/public/assets/servicenew/about.css"; 
export default function SmartDesignSection() {
  return (
    <section className="smart-design">
      <div className="image-container  wow img-custom-anim-left animated">
        <Image
          src={backgroundImage} // Replace with the actual image path
          alt="Modern Architecture"
          
          objectFit="cover"
        />
      </div>
      <div className="content  wow img-custom-anim-right animated">
        <h2>Smart Engineering for Connected Cities</h2>
        <p>
        We develop infrastructure that integrates advanced engineering, optimized planning, and sustainable solutions, ensuring efficiency, resilience, and long-term functionality. Our expertise enhances urban mobility without compromise.        </p>
        <a href="/contact"><button className="cta-button">Work With Us→</button></a>
      </div>


    </section>
  );
}
