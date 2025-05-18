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
        <h2>Smart Engineering for Seamless Execution.</h2>
        <p>
        We integrate advanced technologies, strategic planning, and expert management to optimize construction, supervision, and cost control. Our services include Value Engineering, Supervision, Contract Management, Design Management and Review, Planning, Project Cost Control, Quality Management and Assurance, Risk Management, and Construction Management.
        </p>
                <a href="/contact"><button className="cta-button">Work With Us→</button></a>
      </div>

     
    </section>
  );
}
