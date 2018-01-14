import alert from 'alert-node'

export class MarketStudyVendor  {

  averagePrice(blog) {
  if (process.env.LICENSE == null) {
    alert("Missing license !");
    throw "RuntimeException";
  }
  return (blog.length() * (Math.random()));
}

}
