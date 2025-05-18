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
        <h2>Smart Water & Waste Management</h2>
        <p>
        From wastewater recycling to solid waste management, we deliver tailored solutions that enhance sustainability, reduce environmental impact, and comply with strict regulations. Our focus is on efficiency, conservation, and responsible resource management.
        </p>
        <a href="/contact"><button className="cta-button">Work With Us→</button></a>
      </div>

     
    </section>
  );
}
