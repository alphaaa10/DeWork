import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author -> name match $search ] | order(_createdAt desc) {
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, image, bio
  }, 
  views,
  description,
  category,
  image,
}`);

export const STARTUP_QUERY_BY_ID = defineQuery(`*[_type =="startup" && _id==$id][0]{
  _id,
  author ->{
    _id ,name ,username, image ,bio
  },
  _createdAt,
  views,
  image,
  category,
  description,
  title,
  slug,
  pitch,
  emailId,
  PhoneNum
} `)

export const STARTUP_VIEWS_QUERY = defineQuery(`
    *[_type == "startup" && _id == $id][0]{
        _id,views
    }
  `)