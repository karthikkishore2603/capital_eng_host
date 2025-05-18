import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Philosophy() {
  return (
    <div className="feature-area-1 space-bottom pt-50">
      <div className="container">
        <div className="row justify-content-xl-between justify-content-center">
          <div className="col-xl-5 col-lg-8 position-relative">
            <div className="sec_title_static">
              <div className="sec_title_wrap">
                <div className="title-area">
                  <h2 className="sec-title fs-2" style={{color:"#211574"}}>Our <br /> Philosophy</h2>
                  <p className="fs-5">At Capital Engineering Consultancy, we innovate through collaboration, agility, and expertise, delivering client-focused solutions with excellence.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6">
            <div className="feature-static-wrap">
              {/* Feature 1 */}
              <div className="feature-static">
                <div className="feature-card style-grid">
                  <div className="feature-card-icon">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/img/icon/1.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="feature-card-details">
                    <h4 className="feature-card-title" >
                      <a style={{color:"#211574"}} href="#">Collaboration as the Cornerstone</a>
                    </h4>
                    <p className="feature-card-text">
                      We foster teamwork and knowledge sharing to drive
                      innovation. By leveraging collective expertise, we
                      overcome challenges and deliver results.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="feature-static">
                <div className="feature-card style-grid">
                  <div className="feature-card-icon">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/img/icon/2.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="feature-card-details">
                    <h4 className="feature-card-title">
                      <a style={{color:"#211574"}} href="#">Client-Centric Approach</a>
                    </h4>
                    <p className="feature-card-text">
                      We build lasting relationships by understanding client
                      needs. Our commitment to integrity ensures tailored,
                      high-value solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="feature-static">
                <div className="feature-card style-grid">
                  <div className="feature-card-icon">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/img/icon/3.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="feature-card-details">
                    <h4 className="feature-card-title">
                      <a style={{color:"#211574"}} href="#">Adaptability and Agility</a>
                    </h4>
                    <p className="feature-card-text">
                      Embracing change, we adopt new technologies and methods.
                      Our agility ensures efficient project execution.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="feature-static">
                <div className="feature-card style-grid">
                  <div className="feature-card-icon">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/img/icon/4.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="feature-card-details">
                    <h4 className="feature-card-title">
                      <a style={{color:"#211574"}} href="#">Beyond Technical Excellence</a>
                    </h4>
                    <p className="feature-card-text">
                      We excel in communication, problem-solving, and project
                      management. Seamless coordination ensures timely,
                      budget-conscious delivery.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="feature-static">
                <div className="feature-card style-grid">
                  <div className="feature-card-icon">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/img/icon/5.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="feature-card-details">
                    <h4 className="feature-card-title">
                      <a style={{color:"#211574"}} href="#">A Culture of Excellence</a>
                    </h4>
                    <p className="feature-card-text">
                      We care success relationships fuel real success. We love
                      building brands and helping.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="feature-static">
                <div className="feature-card style-grid">
                  <div className="feature-card-icon">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/img/icon/6.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="feature-card-details">
                    <h4 className="feature-card-title">
                      <a style={{color:"#211574"}} href="#">Conclusion</a>
                    </h4>
                    <p className="feature-card-text">
                      Our expert team, client focus, and commitment to
                      excellence shape a better future through innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
