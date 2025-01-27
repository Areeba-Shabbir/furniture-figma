// sanity/client.ts
import { createClient } from "next-sanity";

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw new Error("Missing Sanity environment variables.");
}

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-01-01", // Adjust to match your API version
  useCdn: process.env.NODE_ENV === "production", // Use CDN for production only
  token: process.env.SANITY_API_TOKEN, // Server-side token for secured requests
});

export default client;
