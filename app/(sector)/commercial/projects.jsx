"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head"; // Added for metadata
import { sanityClient2 } from "@/lib/sanity";

export default function Blogs() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    const fetchBlogs = async () => {
      const query = `*[_type == "post" && (categories[]->title match "Commercial" || categories[]->title match "Automobile" || categories[]->title match "Food & Beverages")] | order(publishedAt desc) {
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
  // Take first 6 projects
  const randomBlogs = shuffledBlogs.slice(0, 6);

  // Schema Markup for Blog Posts
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: randomBlogs.map((post, index) => ({
      "@type": "BlogPosting",
      position: index + 1,
      headline: post.title,
      image: post.mainImage.asset.url,
      url: `https://www.capitalengg.com/project-details/${post.slug.current}`,
      datePublished: post.publishedAt,
      author: {
        "@type": "Organization",
        name: "Capital Engineering Consultancy",
        url: "https://www.capitalengg.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Capital Engineering Consultancy",
        logo: {
          "@type": "ImageObject",
          url: "https://www.capitalengg.com/logo.png", // Replace with actual logo URL
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.capitalengg.com/project-details/${post.slug.current}`,
      },
      keywords: post.categories.map((cat) => cat.title).join(", "),
    })),
  };

  return (
    <>
      {/* Head for SEO Metadata */}
      <Head>
        <title>Commercial, Automobile & Food Beverage Projects | Capital Engineering Consultancy</title>
        <meta
          name="description"
          content="Discover our latest projects in commercial design, automobile showrooms, and food & beverage outlets at Capital Engineering Consultancy. Explore innovative solutions and case studies."
        />
        <meta
          name="keywords"
          content="commercial design projects, automobile showroom projects, food and beverage projects, Capital Engineering Consultancy, retail space design, sustainable commercial spaces"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Capital Engineering Consultancy" />
        <link rel="canonical" href="https://www.capitalengg.com/commercial#projects" /> {/* Adjust based on page URL */}

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Commercial, Automobile & Food Beverage Projects | Capital Engineering Consultancy"
        />
        <meta
          property="og:description"
          content="Explore innovative commercial design, automobile showroom, and food & beverage projects by Capital Engineering Consultancy."
        />
        <meta property="og:url" content="https://www.capitalengg.com/commercial#projects" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={randomBlogs[0]?.mainImage.asset.url || "https://www.capitalengg.com/default-image.jpg"}
        />
        <meta
          property="og:image:alt"
          content="Commercial project by Capital Engineering Consultancy"
        />
        <meta property="og:site_name" content="Capital Engineering Consultancy" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Commercial, Automobile & Food Beverage Projects | Capital Engineering Consultancy"
        />
        <meta
          name="twitter:description"
          content="Explore innovative commercial design, automobile showroom, and food & beverage projects by Capital Engineering Consultancy."
        />
        <meta
          name="twitter:image"
          content={randomBlogs[0]?.mainImage.asset.url || "https://www.capitalengg.com/default-image.jpg"}
        />
        <meta
          name="twitter:image:alt"
          content="Commercial project by Capital Engineering Consultancy"
        />

        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>

      <section className="blog-area pt-50" aria-labelledby="projects-title">
        <div className="container pb-50">
          <div className="row align-items-center">
            <div className="col-md-6 text-start">
              <div className="title-area">
                <h2
                  id="projects-title"
                  className="sec-title"
                  style={{ color: "#081761", textDecoration: "underline" }}
                >
                  Explore Our Projects
                </h2>
              </div>
            </div>
            <div className="col-md-6 text-end pb-5">
              <Link
                scroll={false}
                href="/portfolio?category=Commercial"
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
                title="View All Commercial Projects"
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
              <div key={post._id} className="col-lg-4 col-md-6"> {/* Use post._id for unique key */}
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
                        alt={`${post.title} project by Capital Engineering Consultancy`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive image sizes
                        loading={i === 0 ? "eager" : "lazy"} // Eager load first image
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
                        {post.categories[0]?.title || "Commercial"}
                      </span>
                    </div>
                    <h4
                      className="blog-title fs-3"
                      style={{ margin: "10px 0", minHeight: "60px", display: "flex", alignItems: "center" }}
                    >
                      <Link
                        style={{ color: "#081761", textDecoration: "none" }}
                        scroll={false}
                        href={`/project-details/${post.slug.current}`}
                        title={`Read about ${post.title}`}
                      >
                        {post.title}
                      </Link>
                    </h4>
                    <Link
                      scroll={false}
                      href={`/project-details/${post.slug.current}`}
                      className="link-btn"
                      style={{
                        display: "inline esposa-flex",
                        alignItems: "center",
                        color: "#081761",
                        textDecoration: "none",
                        fontWeight: "600",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#0d2a8c")}
                      onMouseLeave={(e) => (e.target.style.color = "#081761")}
                      title={`Read more about ${post.title}`}
                    >
                      <span className="link-effect">
                        <span className="effect-1">READ MORE</span>
                        <span className="effect-1">READ MORE</span>
                      </span>
                      <Image
                        width={13}
                        height={13}
                        src="/assets/img/icon/arrow-left-top.svg"
                        alt="Arrow icon"
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
    </>
  );
}