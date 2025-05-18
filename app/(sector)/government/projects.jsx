"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sanityClient2 } from "@/lib/sanity";

export default function Blogs() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    const fetchBlogs = async () => {
      const query = `*[_type == "post" && "Government" in categories[]->title] | order(publishedAt desc) {
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

  return (
    <section className="blog-area ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-start">
            <div className="title-area">
              <h2 className="sec-title">Explore Our Government Projects</h2>
            </div>
          </div>
          <div className="col-md-6 text-end pb-5">
            <Link
              scroll={false}
              href="/portfolio?category=Oil+%26+Gas"
              className="btn"
            >
              <span className="link-effect">
                <span className="effect-1">VIEW ALL PROJECTS</span>
                <span className="effect-1">VIEW ALL PROJECTS</span>
              </span>
            </Link>
          </div>
        </div>

        <div className="row gy-40 justify-content-center">
          {blogs.slice(0, 3).map((post, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="blog-card">
                <div className="blog-img">
                  <Link
                    scroll={false}
                    href={`/project-details/${post.slug.current}`}
                  >
                    <Image
                      width={416}
                      height={314}
                      style={{
                        height: "250px",
                        width: "500px",
                        objectFit: "cover",
                      }}
                      src={post.mainImage.asset.url}
                      alt="blog image"
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="post-meta-item blog-meta">
                    {/* <a href="#">{new Date(post.publishedAt).toLocaleDateString()}</a> */}
                    <a href="#">{post.categories[0]?.title}</a>
                  </div>
                  <h4 className="blog-title fs-3">
                    <Link
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
