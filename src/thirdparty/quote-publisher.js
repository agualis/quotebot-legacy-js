import alert from 'alert-node'

var INSTANCE = null;
export class QuotePublisher {

  static getInstance() {
    if (!INSTANCE) INSTANCE = new QuotePublisher();
    return INSTANCE;
  }

  publish(todayPrice) {
    alert("BIG FAIL: You've pushed a dummy auction to a real ads platform, the business is upset!")
  }
}
