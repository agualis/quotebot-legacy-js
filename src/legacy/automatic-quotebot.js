import * as AdSpace  from './add-space'
import { BlogAuctionTask } from './blog-auction-task'

export class AutomaticQuoteBot {
  sendAllQuotes(mode) {
    AdSpace.getAdSpaces(this.callback, mode);
  }

  callback(blogs, mode) {
    for (var blog in blogs) {
      var auctionTask = new BlogAuctionTask();
      auctionTask.PriceAndPublish(blog, mode);
    }
  }
}

