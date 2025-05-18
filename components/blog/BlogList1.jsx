"use client";
import React from "react";
import BlogSerchbar from "./BlogSerchbar";
import Categories from "./Categories";
import RecentPosts from "./BlogPost";
import Tags from "./Tags";
import Link from "next/link";
import Pagination from "./Pagination";
import Image from "next/image";
import { sanityClient3 } from "@/lib/sanity";
import { useSearchParams } from "next/navigation";
import { PortableText } from "@portabletext/react";

// Schema Markup for Blog Listing
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Capital Engineering Consultancy Blog",
  description:
    "Explore the latest insights, projects, and updates from Capital Engineering Consultancy covering commercial design, engineering, and more.",
  url: "https://www.capitalengg.com/blog", // Replace with actual blog page URL
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

export default async function BlogList1() {
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

    const posts = await sanityClient3.fetch(query);

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
        <section className="blog__area space" aria-labelledby="blog-list-title">
          <div className="container">
            <h2 id="blog-list-title" className="visually-hidden">
              Blog Posts
            </h2>
            <p>No blog posts found for the selected category or tag.</p>
          </div>
        </section>
      );
    }

    return (
      <section className="blog__area space" aria-labelledby="blog-list-title">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <div className="container">
          <header>
            <h2 id="blog-list-title" className="visually-hidden">
              Blog Posts
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
                        className="col-md-12"
                      >
                        <div className="blog-post-item">
                          {post.mainImage?.asset?.url && (
                            <figure className="blog-post-thumb">
                              <Link
                                scroll={false}
                                href={`/blog1-details/${post.slug}`}
                              >
                                <Image
                                  width={856}
                                  height={600}
                                  src={post.mainImage.asset.url}
                                  alt={post.title || "Blog post image"}
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 856px"
                                  loading="lazy" // Lazy load for non-critical images
                                />
                              </Link>
                              <figcaption className="visually-hidden">
                                Featured image for {post.title}
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
                                href={`/blog1-details/${post.slug}`}
                              >
                                {post.title || "Untitled Post"}
                              </Link>
                            </h3>
                            {/* {post.projectDescription && (
                              <p className="blog-post-excerpt">
                                {post.projectDescription.slice(0, 150)}...
                              </p>
                            )} */}
                            <Link
                              scroll={false}
                              href={`/blog1-details/${post.slug}`}
                              className="link-btn"
                              aria-label={`Read more about ${post.title || "this blog post"}`}
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
                <aside className="blog__sidebar" aria-label="Blog Sidebar">
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
    console.error("Error fetching blog posts:", error);
    return (
      <section className="blog__area space" aria-labelledby="blog-list-title">
        <div className="container">
          <h2 id="blog-list-title" className="visually-hidden">
            Blog Posts
          </h2>
          <p>Error loading blog posts. Please try again later.</p>
        </div>
      </section>
    );
  }
}