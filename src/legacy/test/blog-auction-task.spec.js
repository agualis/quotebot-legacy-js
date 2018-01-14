import { BlogAuctionTask } from '../blog-auction-task'

describe('BlogAuctionTask', () => {

  it('runs quotes', () => {
    new BlogAuctionTask().PriceAndPublish('a blog', 'FAST')
  })
});
