"use client";
import { featureData4 } from "@/data/features";
import Image from "next/image";
import React, { useState } from "react";

export default function Features2() {
  const featureData4 = [
    {
      iconSrc: "/assets/img/icon/feature-icon1-1.svg",
      title: "HVAC Design Engineer",
      location: "Chennai, India",
      experience: "5+ years Experience",
      id: 1,
      text: "We care success relationships fuel success we love building",
    },
    {
      iconSrc: "/assets/img/icon/feature-icon1-2.svg",
      title: "Plumbing Design Engineer",
      id: 2,
      location: "Chennai, India",
      experience: "5+ years Experience",
      text: "We care success relationships fuel success we love building",
    },
    {
      iconSrc: "/assets/img/icon/feature-icon1-3.svg",
      title: "BIM Modeler - HVAC",
      id: 3,
      location: "Chennai, India",
      experience: "5+ years Experience",
      text: "We care success relationships fuel success we love building",
    },
    {
      iconSrc: "/assets/img/icon/feature-icon1-4.svg",
      title: "BIM Modeler - Plumbing",
      id: 4,
      location: "Chennai, India",
      experience: "5+ years Experience",
      text: "We care success relationships fuel success we love building",
    },
    {
      iconSrc: "/assets/img/icon/feature-icon1-5.svg",
      title: "BIM Modeler - Electrical",
      id: 5,
      location: "Chennai, India",
      experience: "5+ years Experience",
      text: "We care success relationships fuel success we love building",
    },
    {
      iconSrc: "/assets/img/icon/feature-icon1-6.svg",
      title: "BIM Modeler - Architectural",
      id: 6,
      location: "Chennai, India",
      experience: "5+ years Experience",
      text: "We care success relationships fuel success we love building",
    },
    {
      iconSrc: "/assets/img/icon/feature-icon1-1.svg",
      title: "Dry Utilities Design Engineer",
      location: "Cairo, Egypt",
      experience: "8+ years Experience",
      id: 7,
      text: "We care success relationships fuel success we love building",
    },
    {
      iconSrc: "/assets/img/icon/feature-icon1-2.svg",
      title: "Wet Utilities Design Engineer",
      id: 8,
      location: "Cairo, Egypt",
      experience: "8+ years Experience",
      text: "We care success relationships fuel success we love building",
    },
    {
      iconSrc: "/assets/img/icon/feature-icon1-3.svg",
      title: "Senior QS",
      id: 9,
      location: "Al Ain, UAE",
      experience: "15+ years Experience",
      text: "We care success relationships fuel success we love building",
    },
    {
      iconSrc: "/assets/img/icon/feature-icon1-4.svg",
      title: "Structural Draftsman",
      id: 10,
      location: "Al Ain, UAE",
      experience: "6+ years Experience",
      text: "We care success relationships fuel success we love building",
    },
    {
      iconSrc: "/assets/img/icon/feature-icon1-5.svg",
      title: "Electrical Design Engineer",
      id: 11,
      location: "Abu Dhabi, UAE",
      experience: "5+ years Experience",
      text: "We care success relationships fuel success we love building",
    },
    {
      iconSrc: "/assets/img/icon/feature-icon1-6.svg",
      title: "Mechanical Design Engineer",
      id: 12,
      location: "Abu Dhabi, UAE",
      experience: "5+ years Experience",
      text: "We care success relationships fuel success we love building",
    },
  ];

  // State for filters
  const [filters, setFilters] = useState({
    role: "",
    experience: "",
    location: "",
  });

  // Get unique filter options
  const roles = [...new Set(featureData4.map((item) => item.title))];
  // Define manual experience ranges
  const experienceRanges = [
    "Freshers",
    "5+ years Experience",
    "10+ years Experience",
    "15+ years Experience",
  ];
  const locations = [...new Set(featureData4.map((item) => item.location))];

  // Handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Filter jobs based on selected filters
  const filteredJobs = featureData4.filter((job) => {
    // For role and location, exact match is fine
    const roleMatch = filters.role === "" || job.title === filters.role;
    const locationMatch =
      filters.location === "" || job.location === filters.location;

    // For experience, we need to handle ranges
    let experienceMatch = true;
    if (filters.experience !== "") {
      const jobExp = parseInt(job.experience);

      if (filters.experience === "Freshers") {
        experienceMatch = job.experience.includes("Fresher") || jobExp < 2;
      } else if (filters.experience === "5+ years Experience") {
        experienceMatch = jobExp >= 5 && jobExp < 10;
      } else if (filters.experience === "10+ years Experience") {
        experienceMatch = jobExp >= 10 && jobExp < 15;
      } else if (filters.experience === "15+ years Experience") {
        experienceMatch = jobExp >= 15;
      }
    }

    return roleMatch && locationMatch && experienceMatch;
  });

  return (
    <div className="feature-area-1 space">
      <div className="container">
        {/* Filter Controls */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "18px",
            marginBottom: "40px",
            flexWrap: "wrap",
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ flex: 1, minWidth: "200px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Job Role
            </label>
            <select
              name="role"
              value={filters.role}
              onChange={handleFilterChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ddd",
                backgroundColor: "white",
              }}
            >
              <option value="">All Roles</option>
              {roles.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div style={{ flex: 1, minWidth: "200px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Experience
            </label>
            <select
              name="experience"
              value={filters.experience}
              onChange={handleFilterChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ddd",
                backgroundColor: "white",
              }}
            >
              <option value="">All Experience Levels</option>
              {experienceRanges.map((exp, index) => (
                <option key={index} value={exp}>
                  {exp}
                </option>
              ))}
            </select>
          </div>

          <div style={{ flex: 1, minWidth: "200px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Location
            </label>
            <select
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ddd",
                backgroundColor: "white",
              }}
            >
              <option value="">All Locations</option>
              {locations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Clear Filters Button */}
        {(filters.role || filters.experience || filters.location) && (
          <div style={{ textAlign: "right", marginBottom: "20px" }}>
            <button
              onClick={() =>
                setFilters({ role: "", experience: "", location: "" })
              }
              style={{
                padding: "8px 16px",
                backgroundColor: "#f0f0f0",
                border: "1px solid #ddd",
                borderRadius: "4px",
                cursor: "pointer",
                color: "#333",
              }}
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Job Listings */}
        <div className="row gy-4 align-items-center justify-content-center fs-3">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((elm, i) => (
              <div key={i} className="col-xxl-6 col-xl-6">
                <div className="feature-card style-grid">
                  <div className="feature-card-icon">
                    {/* <Image width={40} height={40} src={elm.iconSrc} alt="icon" /> */}
                  </div>
                  <div className="feature-card-details">
                    <h4 className="feature-card-title">
                      <a href="#">{elm.title}</a>
                    </h4>

                    <div className="feature-meta d-flex gap-4 mt-2 mb-3 fs-5">
                      {elm.location && (
                        <div className="d-flex align-items-center gap-2">
                          <img
                            width={16}
                            height={16}
                            src="http://pluspng.com/img-png/png-location-location-black-png-image-4231-1200.png"
                            alt="location"
                          />
                          <span>{elm.location}</span>
                        </div>
                      )}
                      {elm.experience && (
                        <div className="d-flex align-items-center gap-2">
                          <img
                            width={20}
                            height={20}
                            src="https://vectorified.com/images/experience-icon-png-20.png"
                            alt="experience"
                          />
                          <span>{elm.experience}</span>
                        </div>
                      )}
                    </div>

                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=hr@capitalengg.com&su=Application for ${encodeURIComponent(elm.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-btn"
                    >
                      <span className="link-effect">
                        <span className="effect-1">APPLY NOW</span>
                        <span className="effect-1">APPLY NOW</span>
                      </span>
                      <Image
                        width={13}
                        height={13}
                        src="/assets/img/icon/arrow-left-top.svg"
                        alt="icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              className="col-12"
              style={{ textAlign: "center", padding: "40px" }}
            >
              <h3 style={{ color: "#666" }}>
                No jobs found matching your filters
              </h3>
              <button
                onClick={() =>
                  setFilters({ role: "", experience: "", location: "" })
                }
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#f0f0f0",
                  border: "1px solid #ddd",
                  borderRadius: "4px",

                  cursor: "pointer",
                  color: "#333",
                  marginTop: "20px",
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
