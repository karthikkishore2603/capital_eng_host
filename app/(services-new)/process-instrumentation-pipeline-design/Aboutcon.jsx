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
        <h2>Smart Engineering for Seamless Operations</h2>
        <p>
        We develop process flow and instrumentation designs that maximize performance, minimize downtime, and ensure regulatory compliance. Our advanced solutions enhance industrial efficiency while maintaining sustainability.
        </p>
        <a href="/contact"><button className="cta-button">Work With Us→</button></a>
      </div>

     
    </section>
  );
}
