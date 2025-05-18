"use client";
import React from "react";
import BlogSerchbar from "./BlogSerchbar";
import Categories from "./Categories";
import RecentPosts from "./PressPost";
import Tags from "./Tags";
import Link from "next/link";
import Pagination from "./Pagination";
import Image from "next/image";
import { sanityClient4 } from "@/lib/sanity";
import { useSearchParams } from "next/navigation";
import { PortableText } from "@portabletext/react";

// Schema Markup for Press Release Listing
const schemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Capital Engineering Consultancy Press Releases",
  description:
    "Stay updated with the latest press releases from Capital Engineering Consultancy, covering projects, achievements, and industry insights.",
  url: "https://www.capitalengg.com/press-releases", // Replace with actual press releases page URL
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

    const posts = await sanityClient4.fetch(query);

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
          aria-labelledby="press-release-list-title"
        >
          <div className="container">
            <h2 id="press-release-list-title" className="visually-hidden">
              Press Releases
            </h2>
            <p>No press releases found for the selected category or tag.</p>
          </div>
        </section>
      );
    }

    return (
      <section
        className="blog__area space"
        aria-labelledby="press-release-list-title"
      >
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <div className="container">
          <header>
            <h2 id="press-release-list-title" className="visually-hidden">
              Press Releases
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
                        className="col-md-6"
                      >
                        <div className="blog-post-item-2">
                          {post.mainImage?.asset?.url && (
                            <figure className="blog-post-thumb">
                              <Link
                                scroll={false}
                                href={`/press-release-details/${post.slug}`}
                              >
                                <Image
                                  src={post.mainImage.asset.url}
                                  alt={post.title || "Press release image"}
                                  width={856}
                                  height={300} // Adjusted height to match style
                                  style={{
                                    width: "100%", // Responsive
                                    height: "300px", // Maintain aspect ratio
                                    objectFit: "cover", // Ensure image fits well
                                  }}
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 428px"
                                  loading="lazy" // Lazy load for non-critical images
                                />
                              </Link>
                              <figcaption className="visually-hidden">
                                Featured image for {post.title || "press release"}
                              </figcaption>
                            </figure>
                          )}
                          <div className="blog-post-content">
                            <div className="blog-post-meta">
                              <ul className="list-wrap" role="list">
                                <li>
                                  <time
                                    dateTime={new Date(
                                      post.publishedAt
                                    ).toISOString()}
                                  >
                                    {new Date(
                                      post.publishedAt
                                    ).toLocaleDateString("en-US", {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    })}
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
                                        {index < post.categories.length - 1
                                          ? ", "
                                          : ""}
                                      </span>
                                    ))}
                                  </li>
                                )}
                              </ul>
                            </div>
                            <h3
                              className="title"
                              style={{ fontSize: "20px" }}
                            >
                              <Link
                                scroll={false}
                                href={`/press-release-details/${post.slug}`}
                              >
                                {post.title || "Untitled Press Release"}
                              </Link>
                            </h3>
                            {post.projectDescription && (
                              <p className="press-release-excerpt">
                                {post.projectDescription.slice(0, 150)}...
                              </p>
                            )}
                            <Link
                              scroll={false}
                              href={`/press-release-details/${post.slug}`}
                              className="link-btn"
                              aria-label={`Read more about ${post.title || "this press release"}`}
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
                  aria-label="Press Release Sidebar"
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
    console.error("Error fetching press releases:", error);
    return (
      <section
        className="blog__area space"
        aria-labelledby="press-release-list-title"
      >
        <div className="container">
          <h2 id="press-release-list-title" className="visually-hidden">
            Press Releases
          </h2>
          <p>Error loading press releases. Please try again later.</p>
        </div>
      </section>
    );
  }
}