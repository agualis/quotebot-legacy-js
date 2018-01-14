export class TechBlogs {

  static async listAllBlogs() {
    await sleep(5000);// Access to DB are very slow
    return ["HackerNews", "Reddit", "TechCrunch", "BuzzFeed",
      "TMZ", "TheHuffPost", "GigaOM"]
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
