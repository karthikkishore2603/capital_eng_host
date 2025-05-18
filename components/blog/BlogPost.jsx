"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { sanityClient3 } from "@/lib/sanity";

export default function RecentPosts() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc)[0..2] {
          _id,
          title,
          "slug": slug.current,
          publishedAt,
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`;

        const posts = await sanityClient3.fetch(query);
        setRecentPosts(posts);
      } catch (err) {
        console.error("Error fetching recent posts:", err);
        setError("Failed to load recent posts");
      } finally {
        setLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  if (loading) {
    return (
      <div className="sidebar__widget">
        <h4 className="sidebar__widget-title">Recent Posts</h4>
        <div className="sidebar__post-list">
          {[1, 2, 3].map((i) => (
            <div key={i} className="sidebar__post-item">
              <div className="sidebar__post-thumb skeleton"></div>
              <div className="sidebar__post-content">
                <h5 className="title skeleton-text"></h5>
                <span className="date skeleton-text"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="sidebar__widget">
        <h4 className="sidebar__widget-title">Recent Posts</h4>
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Recent Posts</h4>
      <div className="sidebar__post-list">
        {recentPosts.map((post) => (
          <div key={post._id} className="sidebar__post-item">
            {post.mainImage?.asset?.url && (
              <div className="sidebar__post-thumb">
                <Link scroll={false} href={`/blog1-details/${post.slug}`}>
                  <Image
                    width={80}
                    height={76}
                    src={post.mainImage.asset.url}
                    alt={post.title || "Recent post image"}
                    loading="lazy"
                  />
                </Link>
              </div>
            )}
            <div className="sidebar__post-content">
              <h5 className="title">
                <Link scroll={false} href={`/blog1-details/${post.slug}`}>
                  {post.title || "Untitled Post"}
                </Link>
              </h5>
              <span className="date">
                <i className="flaticon-time"></i>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}