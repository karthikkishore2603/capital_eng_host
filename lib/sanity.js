import { createClient } from "@sanity/client";

export const sanityClient2 = createClient({
  // projectId: "hcpoh9t7", // Using environment variable
  projectId: "bqubtd1o", // Using environment variable
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-20", // Using current date is a good practice
  useCdn: true,
}); 

export const sanityClient3 = createClient({
  projectId: "ecjyfmhx", // Using environment variable
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-20", // Using current date is a good practice
  useCdn: true,
}); 

export const sanityClient4 = createClient({
  projectId: "su8fw3f7", // Using environment variable
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-20", // Using current date is a good practice
  useCdn: true,
}); 

export const sanityClient5 = createClient({
  projectId: "dx3nunb2", // Using environment variable
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-20", // Using current date is a good practice
  useCdn: true,
}); 