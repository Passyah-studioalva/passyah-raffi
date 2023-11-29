import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  dataset: "production",
  /* YY - MM - DD */
  apiVersion: "2023-11-09",
  useCdn: true,
});

export { client };
