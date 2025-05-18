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
        <h2>Smart Environmental Planning for a Greener Tomorrow</h2>
        <p>
        We integrate impact assessments, waste management, and compliance strategies to ensure sustainable growth while preserving natural resources. Our expertise helps industries meet environmental goals without compromising efficiency.
        </p>        
        <a href="/contact"><button className="cta-button">Work With Us→</button></a>
      </div>

    
    </section>
  );
}
