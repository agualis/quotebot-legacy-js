import { TechBlogs } from './tech-blogs'

var cache = {}

export function getAdSpaces(callback) {
    if (cache.hasOwnProperty("blogs list")) {
      return cache.get("blogs list");
    }
    // FIXME : only return blogs that start with a 'T'
    return TechBlogs.listAllBlogs().then((listAllBlogs) => {
      cache["blogs list"] =  listAllBlogs;
      callback(listAllBlogs);
    });
}
