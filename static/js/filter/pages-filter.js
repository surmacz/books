import {Filter} from "./filter.js";

export class PagesFilter extends Filter {
  constructor(limit) {
    super();
    this.limit = limit;
  }
  filter(books) {
    return books.filter(book => book.pages > this.limit);
  }
}
