import {Filter} from "./filter.js";

export class CollectionFilter extends Filter {
  constructor(factory) {
    super();
    this.factory = factory;
  }

  filter(books) {
    for (let filter of this.factory.getCollection()) {
      books = filter.filter(books);
    }
    return books;
  }
}
