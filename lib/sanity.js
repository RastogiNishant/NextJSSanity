import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET_NAME,
  useCdn: process.env.NODE_ENV === "production",
  // useCdn === true, gives you fast response, it will get you cached data
});
