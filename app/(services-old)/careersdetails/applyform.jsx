"use client";

export default function Contact2() {
  return (
    <div className="contact-area-2 text-center space-bottom pt-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form-wrap">
              <div className="title-area mb-30">
                <h3 className="sec-title">Apply for this job </h3>
                <p className="fs-4">
                  Required fields are
                  marked *
                </p>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="contact-form ajax-contact"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name *"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name *"
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
                        placeholder="Email *"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="tel"
                        className="form-control style-border"
                        name="phone"
                        id="phone"
                        placeholder="Phone *"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="resume" className="d-block text-start mb-2">
                        Resume/CV *
                      </label>
                      <input
                        required
                        type="file"
                        className="form-control style-border"
                        name="resume"
                        id="resume"
                        accept=".pdf,.doc,.docx,.txt"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="photo" className="d-block text-start mb-2">
                        Profile photo *
                      </label>
                      <input
                        required
                        type="file"
                        className="form-control style-border"
                        name="photo"
                        id="photo"
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-btn col-12">
                  <button type="submit" className="btn mt-20">
                    <span className="link-effect">
                      <span className="effect-1">SUBMIT APPLICATION</span>
                      <span className="effect-1">SUBMIT APPLICATION</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}