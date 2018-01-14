import { AutomaticQuoteBot } from './automatic-quotebot'

export class Application {
  static main(args) {
    var bot = new AutomaticQuoteBot();
    bot.sendAllQuotes("FAST");
  }
}
