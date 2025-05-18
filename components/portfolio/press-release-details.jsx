"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { sanityClient4 } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

const ProjectDetails = ({ slug }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      console.error("Slug is missing.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0]{
          title,
          body,
          slug,
         paragraph1,
         paragraph2,
          
          collaborativeEffort,
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`;
        console.log("Fetching data for slug:", slug);
        const data = await sanityClient4.fetch(query, { slug });
        console.log("Fetched data:", data);

        if (!data) {
          console.warn("No post found for the given slug.");
        }

        setPost(data);
      } catch (error) {
        console.error("Error fetching project details:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!post) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="project-details-page-area space">
      <div className="container">
        <div className="col-xl-12">
          <div className="project-inner-thumb mb-80">
            {post.mainImage?.asset?.url && (
              <Image
                width={1296}
                height={700}
                className="w-100"
                src={post.mainImage.asset.url}
                alt={post.title}
              />
            )}
          </div>
        </div>
        <div className="row justify-content-center flex-row-reverse">
          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h3 style={{ color: "#081761" }} className="sec-title">
                {post.title}
              </h3>

              <div className="sec-text mt-30">
                <PortableText value={post.body} />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="title-area mb-35">
              <div className="sec-text mt-30">
                <PortableText value={post.paragraph1} />
              </div>
              <div className="sec-text mt-30">
                <PortableText value={post.paragraph2} />
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h4 className="sec-text">
                For media inquiries , please contact :
              </h4>

              <div className="sec-text mt-30">
                <ul>
                  <li>Email: info@capitalengg.com</li>
                  <li>Phone: +971 6 553 6806</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h4 className="sec-title" style={{letterSpacing:"0px"}}>About Rook</h4>

              <div className="sec-text mt-30">
                <p>
                  Rook is a leading digital technology company specializing in
                  web development, strategic design, and branding solutions.
                  With a focus on sparking innovation, Rook empowers brands to
                  make impactful digital impressions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h4 className="sec-title" style={{letterSpacing:"0px"}}>
                About Capital Engineering Consultancy
              </h4>

              <div className="sec-text mt-30">
                <p>
                  Capital Engineering Consultancy is a premier firm offering
                  architectural, structural, and engineering services worldwide.
                  With a commitment to excellence and cultural integration, they
                  deliver transformative projects that shape the future of urban
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
