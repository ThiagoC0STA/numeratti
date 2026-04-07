import { groq } from "next-sanity";

export const ALL_POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    "date": publishedAt,
    "excerptPlain": coalesce(excerpt, ""),
    "imageUrl": mainImage.asset->url,
    "categoryNames": categories[]->title
  }
`;

export const ALL_SLUGS_QUERY = groq`
  *[_type == "post"].slug.current
`;

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    "date": publishedAt,
    "excerptPlain": coalesce(excerpt, ""),
    "imageUrl": mainImage.asset->url,
    "categoryNames": categories[]->title,
    body[] {
      ...,
      _type == "image" => {
        ...,
        "url": asset->url
      }
    }
  }
`;
