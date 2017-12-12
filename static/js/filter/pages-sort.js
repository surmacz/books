import {Filter} from "./filter.js";

export class PagesSort extends Filter {
  filter(books) {
    return books.sort((a, b) => a.pages > b.pages ? 1: -1);
  }
}
