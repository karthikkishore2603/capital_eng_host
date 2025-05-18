import Image from "next/image";
import backgroundImage from "@/public/assets/images/sn/abt.png"; 
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
        <h2>Building Smart, Building Success.</h2>
        <p>
        Our expertise in contractor coordination, quality control, and proactive risk management ensures smooth, successful, and sustainable construction projects. We prioritize safety, compliance, and innovation to enhance project outcomes.
        </p>        
        <a href="/contact"><button className="cta-button">Work With Us→</button></a>
      </div>

     
    </section>
  );
}
