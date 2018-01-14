import alert from 'alert-node'

export class QuotePublisher {
  constructor() {
    this.INSTANCE = new QuotePublisher();
  }

  publish(todayPrice) {
    alert("BIG FAIL: You've pushed a dummy auction to a real ads platform, the business is upset!")
  }
}
