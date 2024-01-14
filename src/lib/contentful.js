import { createClient } from "contentful";

const { VITE_CONTENTFUL_SPACE_ID, VITE_CONTENTFUL_ACCESS_TOKEN } = import.meta.env;

export const contentfulClient = createClient({
  space: VITE_CONTENTFUL_SPACE_ID,
  accessToken: VITE_CONTENTFUL_ACCESS_TOKEN
})