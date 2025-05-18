import { socialMediaLinks } from "@/data/socials";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faDribbble,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function TeamDetails() {
  return (
    <div className="team-details-page-area space">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-5 col-lg-6">
            <div className="team-inner-thumb mb-lg-0 mb-40">
              <Image
                width={527}
                height={640}
                className="w-100"
                src="/assets/img/team/Balaskandan Raghunathan.png"
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="team-details-about-info mb-0">
              <h2 className="sec-title mb-3">Balaskandan Raghunathan</h2>
              <h4 className="team-desig">CEO/Founder</h4>
              <p className="sec-text mt-30">
                BaseCreate is pleased to announce that it has been commissioned
                by Leighton Asia reposition its brand. We will help Leighton
                Asia evolve its brand strategy, and will be responsible updating
                Leighton Asia’s brand identity, website, and other collaterals.
              </p>
              <p className="sec-text mt-15">
                For almost 50 years Leighton Asia, one of the region’s largest
                most respected construction companies been progressively
              </p>
              <div className="about-contact-wrap mt-35">
                <h6 className="about-contact-title">
                  <a href="mailto:daniyel@Karlos.com">Daniyel@Karlos.com</a>
                </h6>
                <h6 className="about-contact-title">
                  <a href="tel:18408412569">+1 840 841 25 69</a>
                </h6>
                <div className="social-btn style3 mt-4">
                  <a href="https://www.facebook.com/">
                          <span className="link-effect">
                            <span className="effect-1">
                              <FontAwesomeIcon icon={faFacebook} />
                            </span>
                            <span className="effect-1">
                              <FontAwesomeIcon icon={faFacebook} />
                            </span>
                          </span>
                        </a>
                  
                        <a href="https://instagram.com/">
                          <span className="link-effect">
                            <span className="effect-1">
                              <FontAwesomeIcon icon={faInstagram} />
                            </span>
                            <span className="effect-1">
                              <FontAwesomeIcon icon={faInstagram} />
                            </span>
                          </span>
                        </a>
                  
                        <a href="https://twitter.com/">
                          <span className="link-effect">
                            <span className="effect-1">
                              <FontAwesomeIcon icon={faXTwitter} />
                            </span>
                            <span className="effect-1">
                              <FontAwesomeIcon icon={faXTwitter} />
                            </span>
                          </span>
                        </a>
                  
                        <a href="https://dribbble.com/">
                          <span className="link-effect">
                            <span className="effect-1">
                              <FontAwesomeIcon icon={faDribbble} />
                            </span>
                            <span className="effect-1">
                              <FontAwesomeIcon icon={faDribbble} />
                            </span>
                          </span>
                        </a>
                  
                        <a href="https://dribbble.com/">
                          <span className="link-effect">
                            <span className="effect-1">
                              <FontAwesomeIcon icon={faLinkedin} />
                            </span>
                            <span className="effect-1">
                              <FontAwesomeIcon icon={faLinkedin} />
                            </span>
                          </span>
                        </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
