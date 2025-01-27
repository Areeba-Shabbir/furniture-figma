// sanity/client.ts
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-01-01', // Adjust to your API version
  useCdn: false, // Set to true for faster responses with cached data
  token: process.env.SANITY_API_TOKEN, // Add token for secured requests
});
