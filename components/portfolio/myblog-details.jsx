"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { sanityClient3 } from "@/lib/sanity";
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
          endingSlogan,
          endingPara,
          projectDescription,
          projectOverview,
          points,
          collaborativeEffort,
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`;
        console.log("Fetching data for slug:", slug);
        const data = await sanityClient3.fetch(query, { slug });
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
              <h3 style={{ color: "#081761" }} className="sec-title">{post.title}</h3>

              <div className="sec-text mt-30">
                <PortableText value={post.body} />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h4 className="sec-title" style={{letterSpacing:"0px"}}>Description</h4>

              <div className="sec-text mt-30">
                {post.projectDescription}
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h4 className="sec-title"style={{letterSpacing:"0px"}}>Project Overview</h4>

              <div className="sec-text mt-30">
                <PortableText value={post.projectOverview} />
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h4 className="sec-title"style={{letterSpacing:"0px"}}>Key Features</h4>

              <div className="sec-text mt-30">
                {post.points && post.points.length > 0 ? (
                  <ul>
                    {post.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No key features available.</p>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h4 className="sec-title"style={{letterSpacing:"0px"}}>Collaborative Effort</h4>

              <div className="sec-text mt-30">
                <PortableText value={post.collaborativeEffort} />
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="title-area mb-35">
            <h4 className="sec-title"style={{letterSpacing:"0px"}}>{post.endingSlogan}</h4>

              <div className="sec-text mt-30">
              <PortableText value={post.endingPara} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
