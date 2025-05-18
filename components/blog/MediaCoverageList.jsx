"use client";
import React from "react";
import BlogSerchbar from "./BlogSerchbar";
import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Tags from "./Tags";
import Link from "next/link";
import Pagination from "./Pagination";
import Image from "next/image";
import { sanityClient5 } from "@/lib/sanity";
import { useSearchParams } from "next/navigation";
import { PortableText } from "@portabletext/react";

// Schema Markup for Media Coverage Listing
const schemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Capital Engineering Consultancy Media Coverage",
  description:
    "Discover media coverage of Capital Engineering Consultancy's projects, achievements, and industry contributions.",
  url: "https://www.capitalengg.com/media-coverage", // Replace with actual media coverage page URL
  publisher: {
    "@type": "Organization",
    name: "Capital Engineering Consultancy",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capitalengg.com/logo.png", // Replace with actual logo URL
      width: 200,
      height: 60,
    },
  },
};

export default async function BlogList2() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "All";
  const currentTag = searchParams.get("tag");

  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      projectDescription,
      "slug": slug.current,
      publishedAt,
      projectOverview,
      link {
        url,
        label
      },
      body,
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
      tags[]->{
        _id,
        title
      }
    }`;

    const posts = await sanityClient5.fetch(query);

    // Filter posts based on query parameters
    const filteredPosts = posts.filter((post) => {
      const categoryMatch =
        currentCategory === "All" ||
        post.categories?.some((cat) => cat.title === currentCategory);
      const tagMatch =
        !currentTag || post.tags?.some((tag) => tag.title === currentTag);
      return categoryMatch && tagMatch;
    });

    if (!filteredPosts || filteredPosts.length === 0) {
      return (
        <section
          className="blog__area space"
          aria-labelledby="media-coverage-list-title"
        >
          <div className="container">
            <h2 id="media-coverage-list-title" className="visually-hidden">
              Media Coverage
            </h2>
            <p>No media coverage found for the selected category or tag.</p>
          </div>
        </section>
      );
    }

    return (
      <section
        className="blog__area space"
        aria-labelledby="mediaCoverage-list-title"
      >
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <div className="container">
          <header>
            <h2 id="mediaCoverage-list-title" className="visually-hidden">
              Media Coverage
            </h2>
          </header>
          <div className="blog__inner-wrap">
            <div className="row">
              <div className="col-70">
                <div className="blog-post-wrap">
                  <div className="row gy-50 gutter-24">
                    {filteredPosts.map((post) => (
                      <article
                        key={post?.slug?.current || `post-${Math.random()}`}
                        className="col-12"
                      >
                        <div className="blog-post-item-2 d-flex align-items-center">
                          {/* Image Section */}
                          {post.mainImage?.asset?.url && (
                            <figure className="blog-post-thumb me-4" style={{ flex: "1" }}>
                              <Link
                                scroll={false}
                                href={`/media-coverage-details/${post.slug}`}
                              >
                                <Image
                                  src={post.mainImage.asset.url}
                                  alt={post.title || "Media coverage image"}
                                  width={300}
                                  height={200}
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                  }}
                                  sizes="(max-width: 768px) 100vw, 300px"
                                  loading="lazy"
                                />
                              </Link>
                              <figcaption className="visually-hidden">
                                Featured image for {post.title || "media coverage"}
                              </figcaption>
                            </figure>
                          )}

                          {/* Content Section */}
                          <div className="blog-post-content" style={{ flex: "2" }}>
                            <div className="blog-post-meta">
                              <ul className="list-wrap" role="list">
                                <li>
                                  <time
                                    dateTime={new Date(post.publishedAt).toISOString()}
                                  >
                                    Published on{" "}
                                    {new Date(post.publishedAt).toLocaleDateString(
                                      "en-US",
                                      {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                      }
                                    )}
                                  </time>
                                </li>
                                {post.categories?.length > 0 && (
                                  <li>
                                    {post.categories.map((category, index) => (
                                      <span key={index}>
                                        <Link
                                          href={`?category=${encodeURIComponent(
                                            category.title
                                          )}`}
                                          rel="tag"
                                        >
                                          {category.title}
                                        </Link>
                                        {index < post.categories.length - 1 ? ", " : ""}
                                      </span>
                                    ))}
                                  </li>
                                )}
                              </ul>
                            </div>
                            <h3 className="title" style={{ fontSize: "20px" }}>
                              <Link
                                scroll={false}
                                href={`/media-coverage-details/${post.slug}`}
                              >
                                {post.title || "Untitled Media Coverage"}
                              </Link>
                            </h3>
                            {post.projectDescription && (
                              <p className="media-coverage-excerpt fs-5">
                                {post.projectDescription.slice(0, 150)}...
                              </p>
                            )}
                            {post.link?.url && (
                              <a
                                href={post.link.url}
                                className="fs-5"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: "#071E53",
                                  textDecoration: "none",
                                  fontWeight: "bold",
                                }}
                                aria-label={`Visit external source for ${post.title || "this media coverage"}`}
                              >
                                {post.link.label || "Read More"}
                              </a>
                            )}
                            {post.body && (
                              <div className="media-coverage-body fs-5">
                                <PortableText
                                  value={post.body.slice(0, 1)} // Limit to first block for preview
                                  components={{
                                    block: {
                                      normal: ({ children }) => (
                                        <p>{children.slice(0, 150)}...</p>
                                      ),
                                    },
                                  }}
                                />
                              </div>
                            )}
                            <Link
                              scroll={false}
                              href={`/media-coverage-details/${post.slug}`}
                              className="link-btn"
                              aria-label={`Read more about ${post.title || "this media coverage"}`}
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
                              />
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                  <Pagination />
                </div>
              </div>
              <div className="col-30">
                <aside
                  className="blog__sidebar"
                  aria-label="Media Coverage Sidebar"
                >
                  <BlogSerchbar />
                  <Categories />
                  <RecentPosts />
                  <Tags />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching media coverage:", error);
    return (
      <section
        className="blog__area space"
        aria-labelledby="media-coverage-list-title"
      >
        <div className="container">
          <h2 id="media-coverage-list-title" className="visually-hidden">
            Media Coverage
          </h2>
          <p>Error loading media coverage. Please try again later.</p>
        </div>
      </section>
    );
  }
}