"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sanityClient2 } from "@/lib/sanity";

export default function Blogs() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    const fetchBlogs = async () => {
      const query = `*[_type == "post" && (categories[]->title match "RO & Desalination Plants" || categories[]->title match "Wastewater Treatment Plants")] | order(publishedAt desc) {
        _id,
        title,
        publishedAt,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        categories[]->{
          _id,
          title
        },
        slug {
          current
        }
      }`;

      const posts = await sanityClient2.fetch(query);
      setBlogs(posts);
    };

    fetchBlogs();
  }, []);

  if (!blogs.length) {
    return <p>Loading...</p>;
  }

  // Shuffle the blogs array to get random order
  const shuffledBlogs = [...blogs].sort(() => 0.5 - Math.random());
  // Take first 3 projects
  const randomBlogs = shuffledBlogs.slice(0, 3);

  return (
    <section className="blog-area">
      <div className="container pb-50">
        <div className="row align-items-center">
          <div className="col-md-6 text-start">
            <div className="title-area">
              <h2 className="sec-title" style={{ color: "#081761", textDecoration: "underline" }}>
                Water Treatment Projects
              </h2>
            </div>
          </div>
          <div className="col-md-6 text-end pb-5">
            <Link
              scroll={false}
              href="/portfolio?category=WTP%2C+RO+%26+Desalination+Plants"
              className="btn"
              style={{
                backgroundColor: "#081761",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "30px",
                textTransform: "uppercase",
                fontWeight: "600",
                textDecoration: "none",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#0d2a8c")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#081761")}
            >
              <span className="link-effect">
                <span className="effect-1">VIEW ALL PROJECTS</span>
                <span className="effect-1">VIEW ALL PROJECTS</span>
              </span>
            </Link>
          </div>
        </div>

        <div className="row gy-40 justify-content-center">
          {randomBlogs.map((post, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div
                className="blog-card"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div className="blog-img" style={{ flex: "1 1 auto" }}>
                  <Link scroll={false} href={`/project-details/${post.slug.current}`}>
                    <Image
                      width={416}
                      height={314}
                      style={{
                        height: "250px",
                        width: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                      src={post.mainImage.asset.url}
                      alt="blog image"
                      onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                    />
                  </Link>
                </div>
                <div className="blog-content" style={{ padding: "20px", flex: "0 0 auto" }}>
                  <div className="post-meta-item blog-meta">
                    <span
                      style={{
                        color: "#081761",
                        fontSize: "14px",
                        fontWeight: "500",
                        textDecoration: "none",
                      }}
                    >
                      {post.categories[0]?.title}
                    </span>
                  </div>
                  <h4 className="blog-title fs-3" style={{ margin: "10px 0", minHeight: "60px", display: "flex", alignItems: "center" }}>
                    <Link
                      style={{ color: "#081761", textDecoration: "none" }}
                      scroll={false}
                      href={`/project-details/${post.slug.current}`}
                    >
                      {post.title}
                    </Link>
                  </h4>
                  <Link
                    scroll={false}
                    href={`/project-details/${post.slug.current}`}
                    className="link-btn"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      color: "#081761",
                      textDecoration: "none",
                      fontWeight: "600",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#0d2a8c")}
                    onMouseLeave={(e) => (e.target.style.color = "#081761")}
                  >
                    <span className="link-effect">
                      <span className="effect-1">READ MORE</span>
                      <span className="effect-1">READ MORE</span>
                    </span>
                    <Image
                      width={13}
                      height={13}
                      src="/assets/img/icon/arrow-left-top.svg"
                      alt="icon"
                      style={{ marginLeft: "8px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}