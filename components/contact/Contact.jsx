"use client";

import { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxaLkroIWphbuY7aL5Z8GBp80Ze5Q4RHJBC-aIciEnyYcd23G-C8hZnD3X6H8Lth20NYA/exec";
    const formData = new FormData(form);

    setIsSubmitting(true);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
   
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        console.error("Verification failed: Unable to submit form.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="contact-map shape-mockup wow img-custom-anim-left animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ top: "-100px", left: 0, bottom: "140px" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.497961879396!2d55.258015474837045!3d25.186424232138027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d0c5aaffd7%3A0xd1b5dcf228b74fa9!2sThe%20Regal%20Tower%20-%20Business%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1736153960414!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="contact-form-wrap">
              <div className="title-area mb-30">
                <h2 className="sec-title">Have Any Project on Your Mind?</h2>
                <p>
                  Great! We're excited to hear from you and let's start
                  something
                </p>
              </div>
              {isSubmitted ? (
                <div className="thank-you-message">
                  <h3>Thank you for submitting!</h3>
                  <p>Our team will contact you shortly.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="contact-form ajax-contact"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          required
                          type="text"
                          className="form-control style-border"
                          name="Name"
                          id="name"
                          placeholder="Full name*"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          required
                          type="email"
                          className="form-control style-border"
                          name="email"
                          id="email"
                          placeholder="Email address*"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control style-border"
                          name="website"
                          id="website"
                          placeholder="Website link"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          required
                          name="Message"
                          placeholder="How Can We Help You*"
                          id="contactForm"
                          className="form-control style-border"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-btn col-12">
                    <button
                      type="submit"
                      className="btn mt-20"
                      disabled={isSubmitting}
                    >
                      <span className="link-effect">
                        <span className="effect-1">SUBMIT</span>
                        <span className="effect-1">SUBMIT</span>
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
