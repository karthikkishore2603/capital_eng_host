"use client";
import React, { useState } from "react";

export default function ContactInfo() {
  const [selectedLocation, setSelectedLocation] = useState(""); // State to hold the selected location

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value); // Update the selected location
  };

  const clearFilter = () => {
    setSelectedLocation(""); // Clear the filter by resetting the selected location
  };

  return (
    <div className="feature-area-1 space">
      <div className="container">
        {/* Globe image section */}
        <div
          className="text-center d-flex justify-content-center align-items-center mb-4"
          style={{ marginTop: "10px" }}
        >
          <img src="/assets/img/image.png" alt="Globe" className="img-fluid" />
        </div>

        {/* Offices around the world section */}
        <div className="text-center mb-5">
          <h2
            style={{
              marginBottom: "30px",
              fontSize: "24px",
              marginTop: "18px",
            }}
          >
            Our Offices Around the World
          </h2>
          <p style={{ marginBottom: "100px", fontSize: "18px" }}>
            Connect with one of our global offices... or feel free to just send
            us a nifty postcard. We won't mind!
          </p>
        </div>

        {/* Filter options */}
        <div className="row">
          {/* Left filter section */}
          <div className="col-md-3 mb-4" style={{ "--theme-color": "#000000" }}>
            <h4 className="mb-3" style={{ color: "#000000" }}>
              Filter by Location
            </h4>

            {/* UAE Locations */}
            <div className="mb-4">
              <h5 className="fs-4">UAE</h5>
              <select
                className="form-select"
                onChange={handleLocationChange}
                value={selectedLocation}
                style={{
                  borderColor: selectedLocation ? "#071e53" : "#ccc",
                  backgroundColor: selectedLocation ? "#f0f8ff" : "#fff",
                }}
              >
                <option value="">All Locations</option>
                <option value="Sharjah HQ">Sharjah HQ</option>
                <option value="Dubai">Dubai</option>
                <option value="Abu Dhabi">Abu Dhabi</option>
                <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                <option value="Ajman">Ajman</option>
                <option value="Umm Al Quwain">Umm Al Quwain</option>
              </select>
            </div>

            {/* KSA Locations */}
            <div className="mb-4">
              <h5 className="fs-4">KSA</h5>
              <select
                className="form-select"
                onChange={handleLocationChange}
                value={selectedLocation}
                style={{
                  borderColor: selectedLocation ? "#071e53" : "#ccc",
                  backgroundColor: selectedLocation ? "#f0f8ff" : "#fff",
                }}
              >
                <option value="">All Locations</option>
                <option value="Riyadh">Riyadh</option>
              </select>
            </div>

            {/* Oman Locations */}
            <div className="mb-4">
              <h5 className="fs-4">Oman</h5>
              <select
                className="form-select"
                onChange={handleLocationChange}
                value={selectedLocation}
                style={{
                  borderColor: selectedLocation ? "#071e53" : "#ccc",
                  backgroundColor: selectedLocation ? "#f0f8ff" : "#fff",
                }}
              >
                <option value="">All Locations</option>
                <option value="Muscat">Muscat</option>
              </select>
            </div>

            {/* Egypt Locations */}
            <div className="mb-4">
              <h5 className="fs-4">Egypt</h5>
              <select
                className="form-select"
                onChange={handleLocationChange}
                value={selectedLocation}
                style={{
                  borderColor: selectedLocation ? "#071e53" : "#ccc",
                  backgroundColor: selectedLocation ? "#f0f8ff" : "#fff",
                }}
              >
                <option value="">All Locations</option>
                <option value="Cairo">Cairo</option>
              </select>
            </div>

            {/* India Locations */}
            <div className="mb-4">
              <h5 className="fs-4">India</h5>
              <select
                className="form-select"
                onChange={handleLocationChange}
                value={selectedLocation}
                style={{
                  borderColor: selectedLocation ? "#071e53" : "#ccc",
                  backgroundColor: selectedLocation ? "#f0f8ff" : "#fff",
                }}
              >
                <option value="">All Locations</option>
                <option value="Chennai">Chennai</option>
                <option value="Kerala">Kerala</option>
              </select>
            </div>

            {/* Clear Filter button */}
            <div className="mb-4">
              <button
                className="btn btn-outline-secondary w-100"
                onClick={clearFilter}
                style={{ marginTop: "10px" }}
              >
                Clear Filter
              </button>
            </div>
          </div>

          {/* Right section to show filtered offices */}
          <div className="col-md-9">
            <div className="row">
              {/* UAE Offices */}
              {(!selectedLocation ||
                selectedLocation === "Sharjah HQ" ||
                selectedLocation === "Dubai" ||
                selectedLocation === "Abu Dhabi" ||
                selectedLocation === "Ras Al Khaimah" ||
                selectedLocation === "Ajman" ||
                selectedLocation === "Umm Al Quwain") && (
                <div className="col-12 mb-4">
                  <div className="feature-card border rounded p-3 text-center shadow-sm w-100">
                    <h4 className="feature-card-title fw-bold">UAE</h4>
                    <div className="dropdown-content">
                      <div className="row">
                        {(!selectedLocation ||
                          selectedLocation === "Sharjah HQ") && (
                          <div
                            className="col-md-6 col-lg-4 text-start mb-3 "
                            style={{ fontSize: "18px" }}
                          >
                            <h5 className="fw-bold">Sharjah HQ</h5>
                            <p className="mb-1">
                              Unit 203, Sama 2 Tower, Abu Shagara,
                              <br /> Sharjah, UAE
                            </p>
                            <p className="mb-1">+971 65536806</p>
                            {/* <p className="mb-1">info@capitalengg.com</p> */}
                          </div>
                        )}
                        {(!selectedLocation ||
                          selectedLocation === "Dubai") && (
                          <div
                            className="col-md-6 col-lg-4 text-start mb-3"
                            style={{ fontSize: "18px" }}
                          >
                            <h5 className="fw-bold">Dubai</h5>
                            <p className="mb-1">
                              Unit 2109, 21st floor Regal Tower, Business Bay,
                              <br />
                              Dubai, UAE
                            </p>
                            <p className="mb-1">+971 42546155</p>
                            {/* <p className="mb-1">info@capitalengg.com</p> */}
                          </div>
                        )}
                        {(!selectedLocation ||
                          selectedLocation === "Abu Dhabi") && (
                          <div
                            className="col-md-6 col-lg-4 text-start mb-3 "
                            style={{ fontSize: "18px" }}
                          >
                            <h5 className="fw-bold">Abu Dhabi</h5>
                            <p className="mb-1">
                              Unit M 1, 2, 3 & 4, Building No: C402, Shabia
                              Musaffah, Sector - 10, Abu Dhabi, UAE
                            </p>
                            <p className="mb-1">+971 25537568</p>
                            {/* <p className="mb-1">info@capitalengg.com</p> */}
                          </div>
                        )}
                        {(!selectedLocation ||
                          selectedLocation === "Ras Al Khaimah") && (
                          <div
                            className="col-md-6 col-lg-4 text-start mb-3 pt-3 "
                            style={{ fontSize: "18px" }}
                          >
                            <h5 className="fw-bold">Ras Al Khaimah</h5>
                            <p className="mb-1">
                              Unit 1506, Julphar Tower, Al Nahkeel, <br /> Ras
                              Al Khaimah, UAE
                            </p>
                            <p className="mb-1">+971 72338744</p>
                            {/* <p className="mb-1">info@capitalengg.com</p> */}
                          </div>
                        )}
                        {(!selectedLocation ||
                          selectedLocation === "Ajman") && (
                          <div
                            className="col-md-6 col-lg-4 text-start mb-3 pt-3 "
                            style={{ fontSize: "18px" }}
                          >
                            <h5 className="fw-bold">Ajman</h5>
                            <p className="mb-1">
                              Unit 101, Al Mashriq Building, Rashideya 2,
                              <br /> Ajman, UAE
                            </p>
                            <p className="mb-1">+971 557973127</p>
                            {/* <p className="mb-1">info@capitalengg.com</p> */}
                          </div>
                        )}
                        {(!selectedLocation ||
                          selectedLocation === "Umm Al Quwain") && (
                          <div
                            className="col-md-6 col-lg-4 text-start mb-3 pt-3"
                            style={{ fontSize: "18px" }}
                          >
                            <h5 className="fw-bold">Umm Al Quwain</h5>
                            <p className="mb-1">
                              Unit 1005, Shomook Business Complex,
                              Etihad Road, Umm Al Quwain, UAE
                            </p>
                            <p className="mb-1">+971 6766 5567</p>
                            {/* <p className="mb-1">Fax: +971 6 766 5569</p> */}
                            {/* <p className="mb-1">info@capitalengg.com</p> */}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* KSA Offices */}
              {(!selectedLocation || selectedLocation === "Riyadh") && (
                <div className="col-md-4 mb-4">
                  <div className="feature-card border rounded p-3 text-center shadow-sm">
                    <h4 className="feature-card-title fw-bold">KSA</h4>
                    <div className="dropdown-content">
                      <div
                        className="location-item text-start mb-3"
                        style={{ fontSize: "18px" }}
                      >
                        <h5 className="fw-bold">Riyadh</h5>
                        <p className="mb-1">
                          2808 Jarir, Al Malaz District, Unit No. 8, PO Box:
                          12831, Riyadh, KSA
                        </p>
                        <p className="mb-1">+966 53 276 9180</p>
                        {/* <p className="mb-1">info@capitalengg.com</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Oman Offices */}
              {(!selectedLocation || selectedLocation === "Muscat") && (
                <div className="col-md-4 mb-4">
                  <div className="feature-card border rounded p-3 text-center shadow-sm">
                    <h4 className="feature-card-title fw-bold">Oman</h4>
                    <div className="dropdown-content">
                      <div
                        className="location-item text-start mb-3"
                        style={{ fontSize: "18px" }}
                      >
                        <h5 className="fw-bold">Muscat</h5>
                        <p className="mb-1">
                          Unit no. 11, Building no. 155, Azaiba, Muscat, <br />{" "}
                          Oman
                        </p>
                        <p className="mb-1">+968 94775486</p>
                        {/* <p className="mb-1" style={{ paddingBottom: "31px" }}>
                          info@capitalengg.com
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Egypt Offices */}
              {(!selectedLocation || selectedLocation === "Cairo") && (
                <div className="col-md-4 mb-4">
                  <div className="feature-card border rounded p-3 text-center shadow-sm">
                    <h4 className="feature-card-title fw-bold">Egypt</h4>
                    <div className="dropdown-content">
                      <div
                        className="location-item text-start mb-3"
                        style={{ fontSize: "18px" }}
                      >
                        <h5 className="fw-bold">Cairo</h5>
                        <p className="mb-1">
                          Cairo Governorate 289, Dream House, 3233433 <br />{" "}
                          Egypt
                        </p>
                        <p className="mb-1">+968 94775486</p>
                        {/* <p className="mb-1" style={{ paddingBottom: "31px" }}>
                          info@capitalengg.com
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* India Offices */}
              {(!selectedLocation ||
                selectedLocation === "Chennai" ||
                selectedLocation === "Kerala") && (
                <div
                  className="col-12 mb-4"
                  style={{ fontFamily: "camber-md" }}
                >
                  <div className="feature-card border rounded p-3 text-center shadow-sm">
                    <h4 className="feature-card-title fw-bold">India</h4>
                    <div className="dropdown-content">
                      <div className="row">
                        {(!selectedLocation ||
                          selectedLocation === "Chennai") && (
                          <div
                            className="col-12 col-md-6 text-start mb-3"
                            style={{ fontSize: "18px" }}
                          >
                            <h5 className="fw-bold">Chennai</h5>
                            <p className="mb-1">
                              Unit No. 4/2, Lloyds Avenue, <br />
                              Adambakkam, P.O Box 600 088, India
                            </p>
                            <p className="mb-1">
                              +91 8144558889, +91 443598226
                            </p>
                            <p className="mb-1">Mobile: +91 443598226</p>
                            {/* <p className="mb-1">
                              info@capitalengg.com
                            </p> */}
                          </div>
                        )}
                        {(!selectedLocation ||
                          selectedLocation === "Kerala") && (
                          <div
                            className="col-12 col-md-6 text-start mb-3"
                            style={{ fontSize: "18px" }}
                          >
                            <h5 className="fw-bold">Kerala</h5>
                            <p className="mb-1">
                              Room No. 5A, Municipal Townhall Building,
                              <br /> Kurishupally Junction, Pala - 686575
                            </p>
                            <p className="mb-1">+ 91 9048820002</p>
                            <p className="mb-1">Mobile: + 91 9048820002</p>
                            {/* <p className="mb-1">
                              info@capitalengg.com
                            </p> */}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
