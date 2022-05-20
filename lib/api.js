import { client } from "lib/sanity";

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'coverImage': coverImage.asset->url,
  'author': author->{name, 'avatar': avatar.asset->url},
`;

export const getAllBlogs = async () => {
  const response = await client.fetch(`*[_type == "blog"]{${blogFields}}`);
  return response;
};

export const getBlogBySlug = async (slug) => {
  const result = await client.fetch(
    `*[_type == "blog" && slug.current == $slug]{${blogFields}}`,
    { slug }
  );
  return result[0];
};
