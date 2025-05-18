import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/fitout/a1.jpg"; 
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
        <h2>Smart Design for Inspired Interiors</h2>
        <p>
        We create designs that balance aesthetics, efficiency, and sustainability, ensuring functional, elegant, and eco-conscious spaces without compromise.
        </p>
        <a href="/contact"><button className="cta-button">Work With Us→</button></a>
      </div>


    </section>
  );
}
